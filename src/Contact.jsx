import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactForm from './ContactForm';
import { SectionHeader } from './Work';

const links = [
  {
    label: 'Email',
    value: 'midhunmuraleedharan18@gmail.com',
    display: 'midhunmuraleedharan18@gmail.com',
    href: 'mailto:midhunmuraleedharan18@gmail.com',
    color: 'text-blue-400 hover:text-blue-300',
    bg: 'bg-blue-500/[0.08] border-blue-500/20 hover:border-blue-500/40',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: '/in/midhun-muraleedharan',
    display: 'midhun-muraleedharan',
    href: 'https://www.linkedin.com/in/midhun-muraleedharan-9411951b7/',
    color: 'text-sky-400 hover:text-sky-300',
    bg: 'bg-sky-500/[0.08] border-sky-500/20 hover:border-sky-500/40',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'Midhun-7',
    display: 'github.com/Midhun-7',
    href: 'https://github.com/Midhun-7',
    color: 'text-slate-300 hover:text-white',
    bg: 'bg-white/[0.04] border-white/[0.07] hover:border-white/[0.14]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    value: '@Midhun_M10',
    display: '@Midhun_M10',
    href: 'https://twitter.com/Midhun_M10',
    color: 'text-slate-300 hover:text-white',
    bg: 'bg-white/[0.04] border-white/[0.07] hover:border-white/[0.14]',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

function ContactLink({ link, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.a
      ref={ref}
      href={link.href}
      target={link.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ x: 4, transition: { duration: 0.15 } }}
      className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-200 ${link.bg}`}
    >
      <div className={`shrink-0 ${link.color}`}>{link.icon}</div>
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-600">{link.label}</div>
        <div className={`mt-0.5 truncate text-sm font-medium transition-colors ${link.color}`}>
          {link.display}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="ml-auto h-3.5 w-3.5 shrink-0 text-slate-700">
        <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06l5.22-5.22H7.75a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
      </svg>
    </motion.a>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 pt-10 pb-24 sm:px-6 lg:px-8">
      <SectionHeader
        label="Contact"
        title="Let's Work Together"
        subtitle="Got a project in mind? I'd love to hear about it."
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left — contact info */}
        <div className="flex flex-col gap-3">
          <p className="mb-2 text-[1.05rem] leading-8 text-slate-400">
            I&apos;m currently open to full-time roles and freelance opportunities.
            Whether it&apos;s a quick question or a long-term collaboration — drop me a message.
          </p>
          {links.map((link, i) => (
            <ContactLink key={link.label} link={link} index={i} />
          ))}
        </div>

        {/* Right — form */}
        <ContactForm />
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-24 border-t border-white/[0.06] pt-8 flex flex-col items-center gap-2 text-center"
      >
        <p className="font-mono text-sm text-slate-600">
          <span className="text-blue-500">&gt;</span> Built with React &amp; Tailwind CSS · Designed by Midhun
        </p>
        <p className="text-xs text-slate-700">© {new Date().getFullYear()} Midhun Muraleedharan</p>
      </motion.div>
    </section>
  );
}

export default Contact;
