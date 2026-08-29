import React from 'react';

const projects = [
  {
    title: 'Keeper App',
    description: 'A clean notes app for quick ideas, task tracking, and daily organization.',
    imageUrl: 'project1.jpg',
    projectUrl: '/project1',
  },
  {
    title: 'Box Office App',
    description: 'A movie discovery interface built for browsing trending titles and details.',
    imageUrl: 'project2.jpg',
    projectUrl: '/project2',
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-600">Portfolio</p>
      </div>

      <h2 className="mb-8 text-[2.6rem] font-black leading-none tracking-[-0.05em] text-slate-900 sm:text-[3.3rem]">
        Featured Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-lg border border-slate-300 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md border border-slate-300 bg-slate-100" />
              <div>
                <h3 className="text-[1.75rem] font-black leading-none tracking-[-0.04em] text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">{project.description}</p>
              </div>
            </div>

            <a href={project.projectUrl} className="text-lg font-medium text-[#3b82f6] underline underline-offset-4">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
