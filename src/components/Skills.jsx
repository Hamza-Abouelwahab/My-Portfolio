import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaJs, FaReact, FaPhp, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiLaravel, SiMysql, SiJira } from 'react-icons/si';
import { VscTerminalBash } from 'react-icons/vsc';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const CARDS = [
  {
    emoji: '🎨',
    title: 'Frontend',
    skills: [
      { icon: <FaHtml5 className="text-orange-400/40 size-15 group-hover:text-orange-400 transition-colors duration-300" />, label: 'HTML' },
      { icon: <FaCss3Alt className="text-blue-400/40 group-hover:text-blue-400 transition-colors duration-300 size-15" />, label: 'CSS' },
      { icon: <FaSass className="text-pink-400/40 group-hover:text-pink-400 transition-colors duration-300 size-15" />, label: 'Sass' },
      { icon: <FaBootstrap className="text-purple-400/40 group-hover:text-purple-400 transition-colors duration-300 size-15" />, label: 'Bootstrap' },
      { icon: <FaJs className="text-yellow-400/40 group-hover:text-yellow-400 transition-colors duration-300 size-15" />, label: 'JavaScript' },
      { icon: <SiTailwindcss className="text-blue-400/40 group-hover:text-blue-400 transition-colors duration-300 size-15" />, label: 'TailwindCSS' },
      { icon: <FaReact className="text-blue-300/40 group-hover:text-blue-300 transition-colors duration-300 size-15" />, label: 'ReactJS' },
    ],
  },
  {
    emoji: '⚙️',
    title: 'Backend',
    skills: [
      { icon: <FaPhp className="text-purple-500/30 group-hover:text-purple-500/80 transition-colors duration-300 size-15" />, label: 'PHP' },
      { icon: <SiLaravel className="text-red-400/40 group-hover:text-red-400 transition-colors duration-300 size-15" />, label: 'Laravel' },
      { icon: <SiMysql className="text-blue-400/40 group-hover:text-blue-400 transition-colors duration-300 size-15" />, label: 'MySQL' },
    ],
  },
  {
    emoji: '🛠️',
    title: 'Tools',
    skills: [
      { icon: <SiJira className="text-blue-400/40 group-hover:text-blue-400 transition-colors duration-300 size-15" />, label: 'Jira' },
      { icon: <VscTerminalBash className="text-green-300/40 group-hover:text-green-300 transition-colors duration-300 size-15" />, label: 'Bash' },
      { icon: <FaGitAlt className="text-orange-400/40 group-hover:text-orange-400 transition-colors duration-300 size-15" />, label: 'Git' },
      { icon: <FaGithub className="text-gray-300/40 group-hover:text-gray-400 transition-colors duration-300 size-15" />, label: 'GitHub' },
      { icon: <FaFigma className="text-pink-400/40 group-hover:text-pink-400 transition-colors duration-300 size-15" />, label: 'Figma' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad px-7  md:px-12 relative overflow-hidden">
      <div className="circuit-bg" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div {...fadeUp(0)} className="mb-16 flex flex-col items-center text-center">
          <p className="text-[#a8d878] text-sm tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="accent-line" />
        </motion.div>

        <div className="flex flex-col gap-6">
          {CARDS.map(({ emoji, title, skills }, i) => (
            <motion.div
              key={title}
              {...fadeUp(0.15 * (i + 1))}
              className="skill-card p-5 md:p-7 flex flex-col gap-5"
            >
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-bold text-[#a8d878]">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-4 md:gap-8">
                {skills.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="skill-pill group flex flex-col items-center gap-2 md:gap-4 px-3 md:px-6 py-3 md:py-4 rounded-xl text-xs md:text-sm text-gray-300 cursor-default hover:text-[#a8d878]"
                  >
                    <span className="text-base transition-transform duration-500 group-hover:rotate-360 group-hover:duration-900 ">{icon}</span>
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}