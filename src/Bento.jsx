import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

function Tile({ children, className = '', index = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={tileVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`rounded-2xl border border-white/[0.07] bg-[#111118] p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }) {
  return (
    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
      {children}
    </p>
  );
}

function Bento() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">

        {/* 1 — Location & Role */}
        <Tile index={0}>
          <Label>Currently</Label>
          <div className="text-lg font-black text-slate-100">Software Engineer (R&amp;D)</div>
          <div className="mt-0.5 text-sm font-semibold text-blue-400">@ Armada</div>
          <div className="mt-1 text-xs text-slate-500">Trivandrum, India 🇮🇳</div>
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-emerald-400">Open to opportunities</span>
          </div>
        </Tile>



        {/* 3 — Education */}
        <Tile index={2}>
          <Label>Education</Label>
          <div className="text-base font-bold text-slate-100">B.Tech Computer Science</div>
          <div className="mt-1 text-sm font-medium text-blue-400">College of Engineering Trivandrum</div>
          <div className="mt-1 text-xs text-slate-600">Kerala, India</div>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-blue-500/[0.08] border border-blue-500/20 px-2.5 py-1">
            <span className="text-xs font-medium text-blue-400">🎓 CET</span>
          </div>
        </Tile>

        {/* 4 — Philosophy code snippet */}
        <Tile index={3} className="col-span-1 lg:col-span-1">
          <Label>Philosophy</Label>
          <div className="font-mono text-[13px] leading-7">
            <div>
              <span className="text-purple-400">for</span>{' '}
              <span className="text-orange-300">learning</span>{' '}
              <span className="text-slate-400">{'{'}</span>
            </div>
            <div className="pl-4"><span className="text-[#61afef]">Build</span><span className="text-slate-500">()</span></div>
            <div className="pl-4"><span className="text-[#61afef]">Learn</span><span className="text-slate-500">()</span></div>
            <div className="pl-4"><span className="text-[#61afef]">Repeat</span><span className="text-slate-500">()</span></div>
            <div><span className="text-slate-400">{'}'}</span></div>
          </div>
        </Tile>

        {/* 5 — Interests */}
        <Tile index={4}>
          <Label>Interests</Label>
          <div className="flex flex-wrap gap-2">
            {['Machine Learning', 'AI', 'Hackathons', 'Open Source', 'System Design', 'Web Dev'].map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-400"
              >
                {t}
              </span>
            ))}
          </div>
        </Tile>

      </div>
    </section>
  );
}

export default Bento;
