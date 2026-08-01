"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

// --- Global types for Speech Recognition ---
interface SpeechRecognitionEvent {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
}
interface SpeechRecognition extends EventTarget {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onstart: ((this: SpeechRecognition, ev: Event) => unknown) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => unknown) | null;
  onerror: ((this: SpeechRecognition, ev: Event) => unknown) | null;
  onend: ((this: SpeechRecognition, ev: Event) => unknown) | null;
}
interface WindowWithSpeech extends Window {
  SpeechRecognition?: {
    new (): SpeechRecognition;
  };
  webkitSpeechRecognition?: {
    new (): SpeechRecognition;
  };
}
// -------------------------------------------

export type AssistantState = "idle" | "listening" | "speaking" | "thinking";

interface AssistantResponse {
  text: string;
  action?: () => void;
}

const INTENTS: { patterns: RegExp[]; respond: (router: ReturnType<typeof useRouter>) => AssistantResponse }[] = [
  {
    patterns: [/project/i, /built/i, /innovation/i, /deploy/i, /work/i],
    respond: (router) => ({
      text: "We have 4 deployed projects including Quantum API, Nebula Dashboard, Horizon AI, and OpenCampus. Let me take you there.",
      action: () => router.push("/projects"),
    }),
  },
  {
    patterns: [/event/i, /workshop/i, /upcoming/i, /schedule/i, /register/i],
    respond: (router) => ({
      text: "We have exciting events coming up — including Hack The Future 2025 in August! Taking you to the events page.",
      action: () => router.push("/events"),
    }),
  },
  {
    patterns: [/team/i, /people/i, /who/i, /node/i, /staff/i],
    respond: (router) => ({
      text: "INNOVARE has 26 active members — engineers, designers, and architects. Opening the team directory.",
      action: () => router.push("/team"),
    }),
  },
  {
    patterns: [/blog/i, /article/i, /log/i, /read/i, /tutorial/i, /post/i],
    respond: (router) => ({
      text: "Our engineering blog covers system architecture, AI, and IoT. Redirecting you to the logs.",
      action: () => router.push("/blog"),
    }),
  },
  {
    patterns: [/join/i, /apply/i, /recruit/i, /enrol/i, /sign up/i],
    respond: () => ({
      text: "Applications close September 30th. Scrolling down to the application section.",
      action: () => {
        const el = document.getElementById("join");
        el?.scrollIntoView({ behavior: "smooth" });
      },
    }),
  },
  {
    patterns: [/about/i, /what is innovare/i, /introduce/i, /tell me/i, /explain/i],
    respond: () => ({
      text: "INNOVARE is the IEEE Student Branch. We are a collective of engineers who build, ship, and deploy real-world solutions.",
    }),
  },
  {
    patterns: [/hackathon/i, /won/i, /win/i, /award/i, /achiev/i, /prize/i],
    respond: () => ({
      text: "We have won 3 hackathons and hosted 6 events. Our teams specialize in AI and full-stack engineering.",
    }),
  },
  {
    patterns: [/contact/i, /email/i, /reach/i, /message/i],
    respond: () => ({
      text: "You can reach our core team at core@innovare.org. We typically respond within 24 hours.",
    }),
  },
  {
    patterns: [/stack/i, /technology/i, /tech/i, /language/i, /framework/i, /tool/i],
    respond: () => ({
      text: "Our stack includes TypeScript, React, Next.js, Python, Node.js, TensorFlow, and AWS. We love open-source and ship production-ready code.",
    }),
  },
  {
    patterns: [/hello/i, /hi/i, /hey/i, /greet/i, /sup/i],
    respond: () => ({
      text: "Hello! I am NOVA, the INNOVARE neural assistant. Ask me anything about our projects, events, team, or how to join!",
    }),
  },
  {
    patterns: [/home/i, /back/i, /start/i, /beginning/i, /main/i],
    respond: (router) => ({
      text: "Taking you back to the main system.",
      action: () => router.push("/"),
    }),
  },
];

const FALLBACK_RESPONSES = [
  "I didn't catch that. Try asking about our projects, events, team, or how to join.",
  "Hmm, not sure about that. Try: 'show me events' or 'tell me about the team'.",
  "Signal unclear. Try: 'how do I join' or 'what projects did you build'.",
];

export function useVoiceAssistant() {
  const router = useRouter();
  const [state, setState] = useState<AssistantState>("idle");
  const [transcript, setTranscript] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [isSupported, setIsSupported] = useState<boolean>(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const fallbackCountRef = useRef(0);

  // ── 1. speak (no dependencies on processInput) ───────────────
  const speak = useCallback((text: string, onEnd?: () => void) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 0.85;
    utterance.volume = 1;

    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(v =>
        v.name.includes("Google UK English Male") ||
        v.name.includes("Alex") ||
        v.name.includes("Microsoft David") ||
        v.lang === "en-US"
      );
      if (preferred) utterance.voice = preferred;
    };

    pickVoice();
    // Voices may not be loaded yet on first call
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = pickVoice;
    }

    utterance.onend = () => {
      setState("idle");
      setResponse("");
      onEnd?.();
    };

    setState("speaking");
    window.speechSynthesis.speak(utterance);
  }, []);

  // ── 2. processInput (depends on speak) ───────────────────────
  const processInput = useCallback((input: string) => {
    setState("thinking");
    setTranscript(input);

    setTimeout(() => {
      let matched = false;
      for (const intent of INTENTS) {
        if (intent.patterns.some(p => p.test(input))) {
          const res = intent.respond(router);
          setResponse(res.text);
          speak(res.text, res.action);
          matched = true;
          break;
        }
      }
      if (!matched) {
        const fallback = FALLBACK_RESPONSES[fallbackCountRef.current % FALLBACK_RESPONSES.length];
        fallbackCountRef.current++;
        setResponse(fallback);
        speak(fallback);
      }
    }, 600);
  }, [router, speak]);

  // ── 3. startListening (depends on processInput) ───────────────
  const startListening = useCallback(() => {
    if (!isSupported) return;
    const win = window as unknown as WindowWithSpeech;
    const SpeechRec = win.SpeechRecognition || win.webkitSpeechRecognition;
    const recognition = new SpeechRec!() as SpeechRecognition;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setState("listening");
      setTranscript("");
      setResponse("");
    };
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      processInput(result);
    };
    recognition.onerror = () => {
      setState("idle");
      setResponse("Microphone error. Please allow access and try again.");
    };
    recognition.onend = () => {
      setState(prev => prev === "listening" ? "idle" : prev);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [isSupported, processInput]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    window.speechSynthesis?.cancel();
    setState("idle");
  }, []);

  // ── 4. Effects (all dependencies defined above) ───────────────
  useEffect(() => {
    if (typeof window !== "undefined") {
      const win = window as unknown as WindowWithSpeech;
      const SpeechRec = win.SpeechRecognition || win.webkitSpeechRecognition;
      setIsSupported(!!SpeechRec && !!window.speechSynthesis);
    }
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const query = (e as CustomEvent<string>).detail;
      if (query) processInput(query);
    };
    window.addEventListener("nova-query", handler);
    return () => window.removeEventListener("nova-query", handler);
  }, [processInput]);

  return { state, transcript, response, isSupported, startListening, stopListening };
}
