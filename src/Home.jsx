import React from 'react';
import { Link } from 'react-scroll';

function Home() {
  return (
    <section id="home" className="bg-[#edf3f8] px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">

        {/* Availability badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-emerald-700">Open to work</span>
        </div>

        {/* Role label */}
        <div className="mb-4 text-[1.05rem] font-semibold text-[#3b82f6] tracking-wide">
          Full-Stack Developer
        </div>

        {/* Hero heading */}
        <h1 className="max-w-[1100px] text-[2.8rem] font-black leading-[1.0] tracking-[-0.05em] text-slate-900 sm:text-[4rem] lg:text-[5.2rem]">
          Building useful products with clean code and thoughtful design.
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-[1.1rem] leading-8 text-slate-600 sm:text-[1.25rem]">
          I&apos;m <span className="font-semibold text-slate-900">Midhun Muraleedharan</span>, a MERN stack developer focused on building elegant,
          feature-rich applications that feel effortless to use.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-base font-semibold text-white hover:bg-slate-700 transition-colors"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:border-slate-400 transition-colors"
          >
            Contact Me
          </Link>
        </div>

        {/* Stats card */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
          <div className="grid gap-6 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="pb-4 sm:pb-0">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Profile</div>
              <div className="mt-2 text-lg font-bold text-slate-900">Midhun Muraleedharan</div>
              <div className="text-sm text-slate-500">MERN Stack Developer</div>
            </div>
            <div className="py-4 sm:py-0 sm:pl-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Availability</div>
              <div className="mt-2 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-lg font-bold text-slate-900">Open to Work</span>
              </div>
              <div className="text-sm text-slate-500">Full-time &amp; Freelance</div>
            </div>
            <div className="pt-4 sm:pt-0 sm:pl-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Focus</div>
              <div className="mt-2 text-lg font-bold text-slate-900">Web Applications</div>
              <div className="text-sm text-slate-500">React · Node.js · MongoDB</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
