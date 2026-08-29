import React from 'react';

function Home() {
  return (
    <section id="home" className="bg-[#edf3f8] px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-4 text-[1.05rem] font-medium text-[#3b82f6]">Full-Stack Developer</div>

        <h1 className="max-w-[1300px] text-[3rem] font-black leading-[0.98] tracking-[-0.06em] text-slate-900 sm:text-[4rem] lg:text-[5rem]">
          Building useful products with clean code and thoughtful design.
        </h1>

        <p className="mt-6 max-w-[1300px] text-[1.05rem] leading-8 text-slate-700 sm:text-[1.4rem]">
          I&apos;m Midhun Muraleedharan, a MERN stack developer focused on building elegant,
          feature-rich applications that feel effortless to use.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-5 text-lg">
          <a href="#portfolio" className="text-[#3b82f6] underline decoration-[#3b82f6] underline-offset-4">
            View Projects
          </a>
          <a href="#contact" className="text-[#3b82f6] underline decoration-[#3b82f6] underline-offset-4">
            Contact Me
          </a>
        </div>

        <div className="mt-12 rounded-lg border border-slate-300 bg-transparent p-4 opacity-90">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Profile</div>
              <div className="mt-3 h-3 w-20 rounded-full bg-slate-200" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Available</div>
              <div className="mt-3 h-3 w-24 rounded-full bg-slate-200" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Focus</div>
              <div className="mt-3 h-3 w-24 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
