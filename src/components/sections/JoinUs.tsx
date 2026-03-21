"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  branch: z.string().min(2, "Branch is required."),
  year: z.string().min(1, "Year is required."),
});

export function JoinUs() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", branch: "", year: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        console.error("Failed to join");
      }
    } catch (error) {
       console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="join" className="py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-lg relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Join the Network</h2>
          <p className="text-muted-foreground text-lg">Ready to start building? Secure your spot today.</p>
        </motion.div>

        {!success ? (
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-px w-full bg-linear-to-r from-transparent via-primary/50 to-transparent" />
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-black/50 border-white/10 focus-visible:ring-primary rounded-xl px-4 py-6" />
                      </FormControl>
                      <FormMessage className="text-accent" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-black/50 border-white/10 focus-visible:ring-primary rounded-xl px-4 py-6" />
                      </FormControl>
                      <FormMessage className="text-accent" />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="branch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Branch</FormLabel>
                        <FormControl>
                          <Input placeholder="Computer Science" {...field} className="bg-black/50 border-white/10 focus-visible:ring-primary rounded-xl px-4 py-6" />
                        </FormControl>
                        <FormMessage className="text-accent" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Year of Study</FormLabel>
                        <FormControl>
                          <Input placeholder="Sophomore" {...field} className="bg-black/50 border-white/10 focus-visible:ring-primary rounded-xl px-4 py-6" />
                        </FormControl>
                        <FormMessage className="text-accent" />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" disabled={loading} className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 transition-all font-bold tracking-wide text-primary-foreground mt-4">
                  {loading ? "INITIALIZING..." : "SUBMIT APPLICATION"}
                </Button>
              </form>
            </Form>
          </motion.div>
        ) : (
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="p-12 text-center rounded-3xl bg-primary/10 border border-primary/20 backdrop-blur-xl flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
               <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
               </svg>
            </div>
            <h3 className="text-3xl font-bold mb-3 tracking-tighter">Application Received</h3>
            <p className="text-muted-foreground text-lg">Check your email for confirmation. Welcome to the future.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
