import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeader } from './Work';

const categories = [
  {
    label: 'Frontend',
    emoji: '🎨',
    desc: 'Building responsive, accessible user interfaces',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'HTML5', icon: 'html' },
      { name: 'CSS3', icon: 'css' },
    ],
    accentBorder: 'border-blue-500/20 hover:border-blue-500/40',
    accentBg: 'from-blue-500/[0.07] via-transparent to-transparent',
  },
  {
    label: 'Backend & Databases',
    emoji: '⚙️',
    desc: 'APIs, server-side logic, and data management',
    skills: [
      { name: 'Go', icon: 'go' },
      { name: 'Python', icon: 'py' },
      { name: 'C++', icon: 'cpp' },
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
    accentBorder: 'border-purple-500/20 hover:border-purple-500/40',
    accentBg: 'from-purple-500/[0.07] via-transparent to-transparent',
  },
  {
    label: 'Developer Tools',
    emoji: '🛠️',
    desc: 'Containers, version control, and CI/CD automation',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'GitHub Actions', icon: 'githubactions' },
    ],
    accentBorder: 'border-emerald-500/20 hover:border-emerald-500/40',
    accentBg: 'from-emerald-500/[0.07] via-transparent to-transparent',
  },
];

function CategoryCard({ cat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative flex flex-col overflow-hidden rounded-2xl border bg-[#111118] bg-gradient-to-b ${cat.accentBg} p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.55)] ${cat.accentBorder}`}
    >
      {/* Category Header */}
      <div className="mb-3.5 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
          <span className="text-xl select-none">{cat.emoji}</span>
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-100">{cat.label}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{cat.desc}</p>
        </div>
      </div>

      {/* Clean vertical skill list with icon inline */}
      <ul className="flex flex-col gap-3.5 pt-4 border-t border-white/[0.06]">
        {cat.skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-3.5 text-base font-medium text-slate-200 hover:text-white transition-colors py-1"
          >
            <img
              src={`https://skillicons.dev/icons?i=${skill.icon}`}
              alt={skill.name}
              className="h-8 w-8 rounded-lg shrink-0 object-contain"
              loading="lazy"
            />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-[#0d0d15] px-4 pt-10 pb-20 sm:px-6 lg:px-8 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Tech Stack"
          title="Skills & Technologies"
          subtitle="Continuously expanding across web, backend, and modern tooling."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
