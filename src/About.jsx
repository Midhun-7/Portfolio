import React from 'react';

const skills = [
  { name: 'HTML5', color: 'bg-orange-50 text-orange-700 border-orange-200' },
  { name: 'CSS3', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { name: 'JavaScript', color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
  { name: 'React.js', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  { name: 'Node.js', color: 'bg-green-50 text-green-700 border-green-200' },
  { name: 'Express.js', color: 'bg-slate-100 text-slate-700 border-slate-200' },
  { name: 'EJS', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { name: 'MySQL', color: 'bg-sky-50 text-sky-700 border-sky-200' },
  { name: 'MongoDB', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { name: 'Python', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { name: 'C++', color: 'bg-rose-50 text-rose-700 border-rose-200' },
];

function About() {
  return (
    <section id="about" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">About</p>
        </div>

        <h2 className="mb-6 text-[2.4rem] font-black leading-none tracking-[-0.05em] text-slate-900 sm:text-[3rem]">
          About Me
        </h2>

        <p className="mb-12 max-w-3xl text-[1.1rem] leading-8 text-slate-600">
          I&apos;m a passionate full-stack developer with a love for building clean, scalable web applications.
          I thrive on solving complex problems and turning ideas into polished digital experiences.
          Whether it&apos;s a sleek front-end interface or a robust back-end API, I care deeply about every detail.
        </p>

        <h3 className="mb-5 text-lg font-bold text-slate-900">Core Skills</h3>

        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`rounded-lg border px-3.5 py-2 text-sm font-semibold transition-all hover:scale-105 hover:shadow-sm cursor-default ${skill.color}`}
            >
              {skill.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
