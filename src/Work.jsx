import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: 'Box Office App',
    description:
      'A movie discovery interface for browsing trending titles, ratings, and details. Built with React consuming a public movie database API, featuring search, filtering, and a clean responsive UI.',
    tags: ['React', 'REST API', 'JavaScript', 'CSS3'],
    gradient: 'from-rose-900/50 via-red-900/20 to-[#111118]',
    glowColor: 'rgba(244,63,94,0.15)',
    emoji: '🎬',
    live: 'https://cheery-parfait-a96f30.netlify.app/',
    github: 'https://github.com/Midhun-7/Box-Office-App',
    index: '01',
  },
  {
    title: 'Google Keep Clone',
    description:
      'A full-featured notes app inspired by Google Keep. Supports creating, editing, and deleting notes with a responsive masonry grid layout, color labels, and a minimal, snappy interface.',
    tags: ['React', 'Node.js', 'JavaScript', 'CSS3'],
    gradient: 'from-amber-900/50 via-yellow-900/20 to-[#111118]',
    glowColor: 'rgba(251,191,36,0.12)',
    emoji: '📝',
    live: 'https://loquacious-zuccutto-4f74a9.netlify.app/',
    github: 'https://github.com/Midhun-7/Google-Keep-clone',
    index: '02',
  },
  {
    title: 'MSLAT',
    description:
      'Malayalam Sign Language Automatic Translator — an ML/Computer Vision system that recognises Malayalam sign language gestures in real time and translates them to text, bridging communication for the hearing-impaired community.',
    tags: ['Python', 'Machine Learning', 'Computer Vision', 'OpenCV'],
    gradient: 'from-violet-900/50 via-purple-900/20 to-[#111118]',
    glowColor: 'rgba(139,92,246,0.15)',
    emoji: '🤖',
    live: 'https://mslat.onrender.com',
    github: 'https://github.com/Midhun-7/MSLAT',
    index: '03',
  },
  {
    title: 'MediFlowIQ',
    description:
      'Centralized Hospital Coordination System — real-time queue management, ambulance tracking, and intelligent patient prioritization to reduce waiting times and improve emergency response.',
    tags: ['Go', 'React', 'PostgreSQL', 'Docker', 'WebSocket'],
    gradient: 'from-teal-900/50 via-cyan-900/20 to-[#111118]',
    glowColor: 'rgba(20,184,166,0.15)',
    emoji: '🏥',
    live: null,
    github: 'https://github.com/Midhun-7/MediFlowIQ',
    index: '04',
  },
];

/* ─── Shared section heading ─── */
export function SectionHeader({ label, title, subtitle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className="mb-14"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">{label}</p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-[2.4rem] font-black leading-none tracking-tight text-slate-50">{title}</h2>
        {subtitle && <p className="max-w-xs text-sm text-slate-500">{subtitle}</p>}
      </div>
      <div className="mt-6 h-px bg-gradient-to-r from-blue-500/40 via-white/[0.05] to-transparent" />
    </motion.div>
  );
}

/* ─── Project card ─── */
function ProjectCard({ project, i }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.13, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      style={{ '--glow': project.glowColor }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111118] shadow-card hover:border-white/[0.16] hover:shadow-[0_24px_60px_rgba(0,0,0,0.65)] transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className={`relative flex h-52 items-center justify-center bg-gradient-to-b ${project.gradient}`}>
        <motion.span
          className="text-7xl select-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: i * 0.7 }}
        >
          {project.emoji}
        </motion.span>

        {/* Top-left index */}
        <span className="absolute left-4 top-4 font-mono text-xs text-slate-700">{project.index}</span>

        {/* Top-right "Live" badge */}
        {project.live && (
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">Live</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-black tracking-tight text-slate-50">{project.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors shadow-glow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
              </svg>
              Live Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-400 hover:border-white/[0.2] hover:text-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
            View Source
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Work section ─── */
function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        label="Portfolio"
        title="Featured Work"
        subtitle="Projects I've shipped — more on the way."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} i={i} />
        ))}
      </div>
    </section>
  );
}

export default Work;
