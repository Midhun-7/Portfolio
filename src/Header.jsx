import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'Work', to: 'work' },
  { label: 'Skills', to: 'skills' },
  { label: 'Contact', to: 'contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-[15px] font-bold text-slate-200 hover:text-blue-400 transition-colors"
          >
            <span className="text-blue-400 mr-0.5">&gt;</span>
            {' '}midhun.dev
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={600}
                offset={-64}
                spy
                activeClass="!text-white !bg-white/[0.08]"
                className="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-64}
            className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-all shadow-glow-sm"
          >
            Hire Me
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
