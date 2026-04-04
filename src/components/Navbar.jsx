import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { logo } from '../constant/image';

const links = ['Home', 'About', 'Skills', 'Project', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'navbar-blur' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        <a href="#home" className="">
          <img  src={logo} alt="Logo" className="h-15" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-[#a8d878] transition-colors duration-200 relative group"
              >
                {l}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#477023] to-[#2D531A] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-[#a8d878] btn-outline-glow"
        >
          Hire Me
        </a>

        <button className="md:hidden text-gray-300 hover:text-[#a8d878]" onClick={() => setOpen(o => !o)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden navbar-blur px-6 pb-6 pt-2 flex flex-col gap-4"
          >
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-[#a8d878] text-sm py-1 border-b border-[#47702320]">
                {l}
              </a>
            ))}
            <a href="#contact" className="mt-2 text-center px-5 py-2 rounded-full text-sm font-semibold text-[#a8d878] btn-outline-glow">
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
