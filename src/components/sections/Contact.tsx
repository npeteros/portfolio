import { useState, ChangeEvent, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-6">
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-xl bg-emerald-600/90 dark:bg-emerald-800/80 border border-emerald-500 text-white text-center py-3 px-4"
          >
            Message sent! I'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/[0.1] dark:border-white/[0.2] text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-carnelian-red"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/[0.1] dark:border-white/[0.2] text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-carnelian-red"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-black/[0.1] dark:border-white/[0.2] text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-carnelian-red"
        />
        <button
          type="submit"
          className="rounded-xl bg-carnelian-red text-white text-center w-full py-4 hover:-translate-y-1 hover:scale-100 focus:-translate-y-1 focus:scale-100 focus:outline-none"
        >
          Send Message
        </button>
      </form>
      <a
        href="mailto:n.peteros2003@gmail.com"
        className="flex items-center justify-center gap-2 text-neutral-600 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white text-sm"
      >
        <Mail size={16} />
        or email me directly
      </a>
    </div>
  );
}

export function Contact() {
  return (
    <section className="min-h-screen py-0 md:pb-24" id="contact">
      <div className="max-w-6xl bg-white dark:bg-neutral-900 mx-auto px-8 rounded-lg">
        <SectionHeading icon={Mail} label="Contact" />
        <div className="py-10" id="content">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
