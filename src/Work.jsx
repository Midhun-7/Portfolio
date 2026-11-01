import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: 'Box Office App',
    description: 'A movie discovery interface for browsing trending titles, ratings, and details. Built with React consuming a public movie database API.',
    tags: ['React', 'REST API', 'JavaScript', 'CSS3'],
    gradient: 'from-rose-950/60 via-rose-900/20 to-[#111118]',
    accentBorder: 'hover:border-rose-500/30',
    emoji: '🎬',
    live: 'https://cheery-parfait-a96f30.netlify.app/',
    github: 'https://github.com/Midhun-7/Box-Office-App',
    index: '01',
  },
  {
    title: 'Google Keep Clone',
    description: 'A full-featured notes app inspired by Google Keep. Supports creating, editing, and deleting notes with a responsive masonry grid layout.',
    tags: ['React', 'Node.js', 'JavaScript', 'CSS3'],
    gradient: 'from-amber-950/60 via-amber-900/20 to-[#111118]',
    accentBorder: 'hover:border-amber-500/30',
    emoji: '📝',
    live: 'https://loquacious-zuccutto-4f74a9.netlify.app/',
    github: 'https://github.com/Midhun-7/Google-Keep-clone',
    index: '02',
  },
  {
    title: 'MSLAT',
    description: 'Malayalam Sign Language Automatic Translator — ML/Computer Vision system that recognises sign gestures in real time and translates them to text.',
    tags: ['Python', 'Machine Learning', 'Computer Vision', 'OpenCV'],
    gradient: 'from-violet-950/60 via-purple-900/20 to-[#111118]',
    accentBorder: 'hover:border-violet-500/30',
    emoji: '🤖',
    live: 'https://mslat.onrender.com',
    github: 'https://github.com/Midhun-7/MSLAT',
    index: '03',
  },
  {
    title: 'MediFlowIQ',
    description: 'Centralized Hospital Coordination System — real-time queue management, ambulance tracking, and intelligent patient prioritization.',
    tags: ['Go', 'React', 'PostgreSQL', 'Docker', 'WebSocket'],
    gradient: 'from-teal-950/60 via-emerald-900/20 to-[#111118]',
    accentBorder: 'hover:border-teal-500/30',
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
      className="mb-4"
    >
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">{label}</p>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl sm:text-3xl font-black leading-none tracking-tight text-slate-50">{title}</h2>
        {subtitle && <p className="text-xs text-slate-500 sm:whitespace-nowrap">{subtitle}</p>}
      </div>
      <div className="mt-3 h-px bg-gradient-to-r from-blue-500/40 via-white/[0.05] to-transparent" />
    </motion.div>
  );
}

/* ─── Project card ─── */
function ProjectCard({ project, i }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#111118] ${project.accentBorder} hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300`}
    >
      {/* Balanced dark-gradient header strip */}
      <div className={`relative flex items-center gap-3 border-b border-white/[0.06] bg-gradient-to-r ${project.gradient} px-4.5 py-3.5 sm:px-5`}>
        <span className="text-3xl select-none">{project.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm sm:text-base font-bold tracking-tight text-slate-100 truncate">{project.title}</h3>
            <span className="font-mono text-[11px] text-slate-500 shrink-0">{project.index}</span>
          </div>
        </div>
        {project.live && (
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 backdrop-blur-sm shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-medium text-emerald-400">Live</span>
          </div>
        )}
      </div>

      {/* Content with comfortable breathing room */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 gap-3.5">
        <p className="text-xs leading-relaxed text-slate-400 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded border border-white/[0.07] bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-slate-400">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-auto pt-1">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors shadow-glow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
              </svg>
              Live Demo
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-slate-400 hover:border-white/[0.2] hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
            Source
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Work section ─── */
function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 pt-4 pb-12 sm:px-6 lg:px-8 min-h-screen">
      <SectionHeader
        label="Portfolio"
        title="Featured Work"
        subtitle="Projects I've shipped — more on the way."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} i={i} />
        ))}
      </div>
    </section>
  );
}

export default Work;
