import React, { useState } from 'react';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.4, 0.25, 1] } },
};

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handle = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-12 text-center"
      >
        <span className="text-5xl">✅</span>
        <h3 className="text-xl font-bold text-emerald-400">Message sent!</h3>
        <p className="text-sm text-slate-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
      </motion.div>
    );
  }

  const inputCls = (name) =>
    `w-full rounded-xl border bg-[#0d0d16] px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all duration-200 ${
      focused === name
        ? 'border-blue-500/70 ring-2 ring-blue-500/20'
        : 'border-white/[0.08] hover:border-white/[0.14]'
    }`;

  return (
    <form onSubmit={submit} className="rounded-2xl border border-white/[0.07] bg-[#111118] p-6 sm:p-8">
      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        initial="hidden"
        animate="visible"
        className="space-y-5"
      >
        <motion.div variants={item}>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
            Name
          </label>
          <input
            id="name" name="name" type="text" required
            placeholder="Your name"
            value={form.name} onChange={handle}
            onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
            className={inputCls('name')}
          />
        </motion.div>

        <motion.div variants={item}>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
            Email
          </label>
          <input
            id="email" name="email" type="email" required
            placeholder="you@example.com"
            value={form.email} onChange={handle}
            onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
            className={inputCls('email')}
          />
        </motion.div>

        <motion.div variants={item}>
          <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">
            Message
          </label>
          <textarea
            id="message" name="message" rows="5" required
            placeholder="Tell me about your project or idea..."
            value={form.message} onChange={handle}
            onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
            className={`${inputCls('message')} resize-none`}
          />
        </motion.div>

        <motion.div variants={item}>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors shadow-glow"
          >
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
              <path d="M2.87 2.298a.75.75 0 0 0-.812.123.75.75 0 0 0-.137.836l1.813 3.627a.75.75 0 0 0 .498.386L9.5 8l-5.268.73a.75.75 0 0 0-.498.386L1.921 12.743a.75.75 0 0 0 .137.836.75.75 0 0 0 .812.123l12.25-5.5a.75.75 0 0 0 0-1.364L2.87 2.298Z" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </form>
  );
}

export default ContactForm;
