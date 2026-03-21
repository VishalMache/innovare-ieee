"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const QUESTIONS = [
  { q: "Do I need to be a CS major to join?", a: "No. We look for passion and a builder's mindset, regardless of your major." },
  { q: "What is the commitment like?", a: "Expect around 5-10 hours a week, leaning heavier during hackathons and project deadlines." },
  { q: "How do I apply?", a: "Fill out the Join Us form below. We review applications on a rolling basis and will invite you for an informal technical chat." },
  { q: "Do we get funding for projects?", a: "Yes, approved projects receive full funding for cloud infrastructure, APIs, and hardware components." }
];

export function FAQ() {
  return (
    <section className="py-32 relative bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Frequently Asked</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about joining INNOVARE.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {QUESTIONS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
