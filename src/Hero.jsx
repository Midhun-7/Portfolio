import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

/* ─── Typewriter hook ─── */
const ROLES = ['Software Engineer', 'Web Developer', 'ML Enthusiast', 'Full-Stack Developer'];

function useTypewriter(words, typing = 80, deleting = 40, pause = 2200) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDel, setIsDel] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];

    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsDel(true); }, pause);
      return () => clearTimeout(t);
    }

    if (!isDel) {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), typing);
        return () => clearTimeout(t);
      } else {
        setIsPaused(true);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(word.slice(0, text.length - 1)), deleting);
        return () => clearTimeout(t);
      } else {
        setIsDel(false);
        setWordIdx((i) => (i + 1) % words.length);
      }
    }
  }, [text, isDel, isPaused, wordIdx, words, typing, deleting, pause]);

  return text;
}

/* ─── Animation variants ─── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

/* ─── Code block card ─── */
function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
      className="animate-float relative"
    >
      {/* glow behind */}
      <div className="absolute inset-0 rounded-2xl bg-blue-600/10 blur-3xl scale-110" />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d0d16] shadow-card">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0b0b13] px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-slate-600">~/portfolio/main.go</span>
        </div>

        {/* code body */}
        <div className="p-6 font-mono text-sm leading-7 select-none">
          <div className="flex gap-5">
            {/* line nums */}
            <div className="text-right text-[11px] leading-7 text-slate-700">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i}>{String(i + 1).padStart(2, '0')}</div>
              ))}
            </div>
            {/* code */}
            <div>
              <div><span className="text-slate-600">{`// midhun's engineering loop`}</span></div>
              <div>&nbsp;</div>
              <div>
                <span className="text-purple-400">package</span>{' '}
                <span className="text-blue-300">main</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="text-purple-400">func</span>{' '}
                <span className="text-yellow-300">main</span>
                <span className="text-slate-300">() {'{'}</span>
              </div>
              <div>
                <span className="pl-4 text-purple-400">for</span>{' '}
                <span className="text-orange-300">learning</span>{' '}
                <span className="text-slate-300">{'{'}</span>
              </div>
              <div><span className="pl-8 text-[#61afef]">Build</span><span className="text-slate-400">()</span></div>
              <div><span className="pl-8 text-[#61afef]">Learn</span><span className="text-slate-400">()</span></div>
              <div><span className="pl-8 text-[#61afef]">Improve</span><span className="text-slate-400">()</span></div>
              <div><span className="pl-8 text-[#61afef]">Repeat</span><span className="text-slate-400">()</span></div>
              <div><span className="pl-4 text-slate-300">{'}'}</span></div>
              <div><span className="text-slate-300">{'}'}</span></div>
            </div>
          </div>
        </div>

        {/* status bar */}
        <div className="flex items-center gap-4 border-t border-white/[0.05] bg-[#0b0b13] px-4 py-2">
          <span className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Running
          </span>
          <span className="text-xs text-slate-600">Go · 1.21</span>
          <span className="ml-auto text-xs text-slate-600">main.go</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Hero ─── */
function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-orb-1 absolute -left-72 -top-72 h-[600px] w-[600px] rounded-full bg-blue-600/[0.07] blur-3xl" />
        <div className="animate-orb-2 absolute -bottom-72 -right-72 h-[600px] w-[600px] rounded-full bg-purple-600/[0.07] blur-3xl" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* ── Left column ── */}
          <motion.div variants={container} initial="hidden" animate="visible">

            {/* Avatar */}
            <motion.div variants={item} className="mb-8 flex items-center gap-5">
              <div className="relative shrink-0">
                {/* gradient ring */}
                <div
                  className="absolute -inset-[3px] rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #22d3ee)',
                  }}
                />
                <div
                  role="img"
                  aria-label="Midhun Muraleedharan"
                  style={{
                    backgroundImage: 'url(/avatar.jpg)',
                    backgroundSize: '175%',
                    backgroundPosition: '7% 60%',
                  }}
                  className="relative h-20 w-20 rounded-full border-[3px] border-[#0a0a0f]"
                />
                {/* online dot */}
                <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-[#0a0a0f] bg-emerald-400" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-200">Hello, world! <span className="animate-wave inline-block origin-[70%_70%]">👋</span></div>
                <div className="text-sm font-medium text-slate-500">Welcome to my portfolio</div>
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div variants={item} className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-emerald-400 opacity-75" />
                <span className="relative flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-emerald-400">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={item} className="mb-6 font-black leading-[0.9] tracking-tight">
              <span className="block text-[clamp(2.4rem,3.5vw,4rem)] text-slate-50">
                MIDHUN
              </span>
              <span
                className="block text-[clamp(2.4rem,3.5vw,4rem)]"
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #22d3ee 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MURALEEDHARAN
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={item} className="mb-7 flex items-center gap-2 font-mono text-lg">
              <span className="text-slate-600">&gt;</span>
              <span className="text-blue-400">{role}</span>
              <span className="animate-blink h-5 w-0.5 bg-blue-400" />
            </motion.div>

            {/* Bio */}
            <motion.p variants={item} className="mb-10 max-w-[480px] text-[1.05rem] leading-8 text-slate-400">
              Software Engineer (R&D) at{' '}
              <span className="font-semibold text-slate-200">Armada</span>.
              B.Tech CS from{' '}
              <span className="font-medium text-slate-300">College of Engineering Trivandrum</span>.
              Passionate about building intuitive web apps, ML/AI, and problem solving.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={item} className="mb-12 flex flex-wrap items-center gap-4">
              <Link
                to="work"
                smooth
                duration={600}
                offset={-48}
                className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white hover:bg-blue-500 transition-all shadow-glow"
              >
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                </svg>
              </Link>
              <a
                href="https://github.com/Midhun-7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-base font-semibold text-slate-300 hover:bg-white/[0.08] hover:text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
                GitHub
              </a>
            </motion.div>

            {/* Meta strip */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-5 text-xs text-slate-600">
              {[
                { dot: 'bg-blue-500', label: 'SWE (R&D) · Armada' },
                { dot: 'bg-purple-500', label: 'Go · React · TypeScript' },
                { dot: 'bg-emerald-500', label: 'Trivandrum, India' },
              ].map(({ dot, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column ── */}
          <div className="hidden lg:block">
            <CodeCard />
          </div>
        </div>

        {/* Scroll nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest text-slate-700">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="h-5 w-px rounded-full bg-slate-700"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
