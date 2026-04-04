import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiReact, SiLaravel } from 'react-icons/si';
import { FiFolder } from 'react-icons/fi';
import { profile } from '../constant/image';
import Ballpit from './Ballpit';

const ROLES = ['Full Stack Developer', 'Open Source Contributor', 'Web Developer', 'UI & UX', 'Problem Solving'];

function useTyping(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = words[wordIdx];
    if (!deleting && charIdx <= current.length) {
      timeout.current = setTimeout(() => setCharIdx(i => i + 1), speed);
    } else if (!deleting && charIdx > current.length) {
      timeout.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout.current = setTimeout(() => setCharIdx(i => i - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout.current);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const FloatingBadge = ({ icon, label, className }) => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    className={`absolute glass rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-semibold shadow-lg z-20 ${className}`}
  >
    {icon}
    <span>{label}</span>
  </motion.div>
);

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="min-h-screen flex items-center section-pad px-6 md:px-12 relative overflow-hidden">

      {/* Ballpit background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} className="pointer-events-none">
        <Ballpit count={90} gravity={0.18} friction={0.9975} wallBounce={0.88} followCursor={false} />
      </div>

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(7,30,7,0.55)' }} />

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">

        {/* ── LEFT ── */}
        <div className="flex-1 flex flex-col gap-5">

          <motion.p {...fadeUp(0.2)} className="text-[#a8d878] text-lg font-semibold tracking-wide flex items-center gap-1">
            {typed}<span className="inline-block w-0.5 h-5 ml-1 bg-[#a8d878] align-middle animate-caret-blink" />
          </motion.p>

          <motion.h1 {...fadeUp(0.3)} className="text-5xl md:text-7xl font-extrabold leading-tight glow-text">
            <span className="gradient-text">Hamza</span>
            <br />
            <span className="text-white">Abouelwahab</span>
          </motion.h1>

          <motion.p {...fadeUp(0.4)} className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
            I'm a passionate Web Developer focused on building clean, efficient, and user-friendly web applications.
            I enjoy turning ideas into real digital solutions and continuously improving my technical skills.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mt-2">
            <a href="#project"
              className="px-7 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:shadow-[0_0_24px_#47702355]"
              style={{ background: 'linear-gradient(135deg, #477023, #2D531A)' }}>
              View My Work
            </a>
            <a href="#contact" 
              className="px-7 py-3 rounded-full font-semibold text-sm text-[#a8d878] btn-outline-glow">
              Contact Me
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="flex items-center  gap-5 mt-2">
            {[
              { icon: <FaGithub size={20} />, href: 'https://github.com/Hamza-Abouelwahab', label: 'GitHub' },
              { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/hamza-abouelwahab-87767a349/', label: 'LinkedIn' },
              { icon: <HiOutlineMail size={22} />, href: 'mailto:hamzaabouelwahab04@email.com', label: 'Email' },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="social-icon text-gray-400 border-2 hover:text-[#a8d878] p-2 glass rounded-xl">
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="flex-1 flex justify-center items-center relative"
        >
          <FloatingBadge icon={<SiReact className="text-[#7ec5f7]" size={16} />} label="React" className="top-4 -left-4 md:top-8 md:-left-8" />
          <FloatingBadge icon={<SiLaravel className="text-red-400" size={16} />} label="Laravel" className="top-4 -right-4 md:top-8 md:-right-8" />
          <FloatingBadge icon={<FiFolder className="text-[#477023]" size={16} />} label="3+ Projects" className="-bottom-2 left-1/2 -translate-x-1/2" />

          <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border border-dashed border-[#47702330] animate-spin-slow" />
          <div className="absolute w-64 h-64 md:w-[340px] md:h-[340px] rounded-full border border-[#2D531A30] animate-spin-reverse" />

          <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full blur-3xl" style={{ background: 'rgba(71,112,35,0.1)' }} />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <div className="rotating-border p-0.75 rounded-full shadow-[0_0_50px_#47702333]">
              <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden bg-[#071E07]">
                <img src={profile} alt="Hamza Abouelwahab" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs"
      >
        <span>scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, #47702388, transparent)' }} />
      </motion.div>
    </section>
  );
}
