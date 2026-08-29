import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Portfolio', to: 'portfolio' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#edf3f8]">
      <div className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6">
          <a href="#home" className="text-2xl font-black tracking-tight text-slate-900">
            MIDHUN
          </a>

          <div className="flex flex-1 items-center justify-start gap-4 overflow-hidden pt-1">
            <nav className="flex flex-wrap items-center gap-3 text-lg text-[#3b82f6]">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className="cursor-pointer text-base font-medium text-[#3b82f6] transition hover:text-[#2563eb]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <a href="#contact" className="text-base font-medium text-[#3b82f6]">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
