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
    <section id="faq" className="py-24 relative bg-white overflow-hidden border-b border-slate-100">
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 select-none"
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 inline-block font-heading">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tighter mb-4 text-slate-900">
            Frequently Asked.
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-lg mx-auto leading-relaxed">
            Everything you need to know about joining our local chapter networks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 md:p-8 bg-slate-50/50 border border-slate-200/60 rounded-3xl shadow-2xs relative"
        >
          <Accordion type="single" collapsible className="w-full">
            {QUESTIONS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-slate-200/50 last:border-b-0 py-1">
                <AccordionTrigger className="text-left text-sm md:text-base font-heading font-bold text-slate-800 hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 text-xs md:text-sm leading-relaxed pb-4 font-medium">
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
