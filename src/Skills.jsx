import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeader } from './Work';

const categories = [
  {
    label: 'Frontend',
    emoji: '🎨',
    desc: 'Building responsive, accessible user interfaces',
    iconsUrl:
      'https://skillicons.dev/icons?i=react,tailwind,ts,js,html,css&theme=dark&perline=6',
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    accent: 'border-blue-500/20 hover:border-blue-500/40',
    dot: 'bg-blue-500',
  },
  {
    label: 'Backend & Databases',
    emoji: '⚙️',
    desc: 'APIs, server-side logic, and data management',
    iconsUrl:
      'https://skillicons.dev/icons?i=go,py,cpp,postgres,nodejs,mongodb&theme=dark&perline=6',
    skills: ['Go', 'Python', 'C++', 'PostgreSQL', 'Node.js', 'MongoDB'],
    accent: 'border-purple-500/20 hover:border-purple-500/40',
    dot: 'bg-purple-500',
  },
  {
    label: 'DevOps & Tools',
    emoji: '🚀',
    desc: 'Infrastructure, deployment, and developer tooling',
    iconsUrl:
      'https://skillicons.dev/icons?i=docker,kubernetes,git,github,githubactions,linux&theme=dark&perline=6',
    skills: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'GitHub Actions', 'Linux'],
    accent: 'border-emerald-500/20 hover:border-emerald-500/40',
    dot: 'bg-emerald-500',
  },
];

function CategoryCard({ cat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.22 } }}
      className={`rounded-2xl border bg-[#111118] p-6 transition-colors duration-300 ${cat.accent}`}
    >
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05]">
          <span className="text-xl">{cat.emoji}</span>
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-100">{cat.label}</h3>
          <p className="text-xs text-slate-600 mt-0.5">{cat.desc}</p>
        </div>
      </div>

      {/* skillicons.dev image */}
      <div className="mb-5 overflow-hidden rounded-xl bg-white/[0.02] p-3">
        <img
          src={cat.iconsUrl}
          alt={`${cat.label} technologies`}
          className="h-12 object-contain object-left"
          loading="lazy"
        />
      </div>

      {/* Text chips */}
      <div className="flex flex-wrap gap-1.5">
        {cat.skills.map((s) => (
          <span
            key={s}
            className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-slate-500"
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-[#0d0d15] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Tech Stack"
          title="Skills & Technologies"
          subtitle="Continuously expanding across web, backend, and infrastructure."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>



      </div>
    </section>
  );
}

export default Skills;
