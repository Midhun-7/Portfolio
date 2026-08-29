import React from 'react';

const projects = [
  {
    title: 'Keeper App',
    description: 'A clean notes app for quick ideas, task tracking, and daily organization. Built with React and a Node/Express backend.',
    gradient: 'from-violet-400 to-indigo-500',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    projectUrl: '/project1',
    emoji: '📝',
  },
  {
    title: 'Box Office App',
    description: 'A movie discovery interface built for browsing trending titles, details, and ratings. Powered by a public movies API.',
    gradient: 'from-rose-400 to-pink-500',
    tags: ['React', 'REST API', 'CSS3'],
    projectUrl: '/project2',
    emoji: '🎬',
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#edf3f8] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Portfolio</p>
        </div>

        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-[2.4rem] font-black leading-none tracking-[-0.05em] text-slate-900 sm:text-[3rem]">
            Featured Projects
          </h2>
          <p className="text-slate-500 text-base max-w-sm">
            A selection of things I&apos;ve built. Each project reflects real problem-solving and attention to craft.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-6xl select-none">{project.emoji}</span>
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[1.4rem] font-black tracking-tight text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-base leading-7 text-slate-600 flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.projectUrl}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3b82f6] hover:text-[#2563eb] transition-colors group/link"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5"
                  >
                    <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
