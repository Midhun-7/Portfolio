import React from 'react';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Node.js',
  'Express.js',
  'EJS',
  'MySQL',
  'MongoDB',
  'Python',
  'C++',
];

function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-600">About</p>
      </div>

      <h2 className="mb-8 text-[2.6rem] font-black leading-none tracking-[-0.05em] text-slate-900 sm:text-[3.3rem]">
        Core Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-base font-medium text-slate-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
