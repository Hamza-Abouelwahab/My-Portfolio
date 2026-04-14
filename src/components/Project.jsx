import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import QribLik from '../assets/QribLik.png';
import { fashe, yummy } from '../constant/image';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const PROJECTS = [
  {
    title: 'QribLik',
    image: QribLik,
    description: 'A location-based social platform connecting neighbors through posts, activities, and services. Features an interactive map displaying nearby users within a defined geographic area.',
    tags: ['React', 'TailwindCSS', 'API'],
    github: 'https://github.com/Anwaroxxx/QribLik',
    live: 'https://qrib-lik.vercel.app/',
  },
  {
    title: 'Website E-commerce',
    image: fashe,
    description: 'Modern responsive fashion e-commerce with product categories, featured items, banners, and a smooth shopping experience.',
    tags: ['React', 'Framer Motion', 'TailwindCSS'],
    github: 'https://github.com/Hamza-Abouelwahab/HamzaAbouelwahab-Final-project-react.git',
    live: 'https://hamza-abouelwahab-final-project-rea.vercel.app',
  },
  {
    title: 'Yummy Food',
    image: yummy,
    description: 'Developed a responsive restaurant landing page website with menu filtering, carousels, reservation modal, testimonials, events, chefs, and contact sections using HTML, CSS, and JavaScript.',
    tags: ['HTML5', 'Bootstrap' ,'Sass'],
    github: 'https://github.com/Hamza-Abouelwahab/ProjectFinal-dom-.git',
    live: 'https://project-final-naljtel8p-hamzaabouelwahab04-7887s-projects.vercel.app/',
  },
];

export default function Project() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="project" className="section-pad px-6 md:px-12 relative overflow-hidden">
      <div className="circuit-bg" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-20 flex flex-col items-center text-center">
          <p className="text-[#a8d878] text-sm tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <div className="accent-line" />
        </motion.div>

        {/* Project rows */}
        <div className="flex flex-col gap-12 md:gap-16">
          {PROJECTS.map(({ title, image, description, tags, github, live }, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={title}
                {...fadeUp(0.15 * (i + 1))}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 border-[#47702220] transition-all duration-500 py-10 lg:py-0"
              >
                {/* Hover bg sweep */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: 'rgba(13,51,14,0.25)' }}
                />

                {/* ── Image side ── */}
                <div className={`relative overflow-hidden rounded-2xl ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative h-52 sm:h-64 md:h-80 overflow-hidden rounded-2xl">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Green tint overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'rgba(71,112,35,0.15)' }}
                    />
                    {/* Corner links */}
                    <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <a href={github} target="_blank" rel="noreferrer"
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white backdrop-blur-md border border-white/20 hover:border-[#a8d878] hover:text-[#a8d878] transition-all duration-200"
                        style={{ background: 'rgba(7,30,7,0.7)' }}>
                        <FiGithub size={15} />
                      </a>
                      <a href={live} target="_blank" rel="noreferrer"
                        className="w-9 h-9 rounded-full flex items-center justify-center text-[#071E07] transition-all duration-200"
                        style={{ background: 'linear-gradient(135deg, #a8d878, #477023)' }}>
                        <FiExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* ── Content side ── */}
                <div className={`flex flex-col justify-center gap-4 lg:gap-5 px-0 lg:px-12 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>

                  {/* Index + title */}
                  <div className="flex items-start gap-4">
                    <span className="text-4xl md:text-5xl font-extrabold leading-none select-none"
                      style={{ WebkitTextStroke: '1px rgba(71,112,35,0.3)', color: 'transparent' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-1 pt-1">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#a8d878] transition-colors duration-300 leading-tight">
                        {title}
                      </h3>
                      {/* Animated underline */}
                      <div className="h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #477023, #a8d878)' }} />
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <span key={tag}
                        className="text-xs px-3 py-1.5 rounded-full font-medium text-[#a8d878] border border-[#47702230] transition-all duration-200 group-hover:border-[#47702250]"
                        style={{ background: 'rgba(45,83,26,0.15)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA links */}
                  <div className="flex items-center gap-4 pt-2">
                    <a href={live} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-[#071E07] transition-all duration-300 hover:shadow-[0_0_20px_#47702355] hover:scale-[1.03]"
                      style={{ background: 'linear-gradient(135deg, #a8d878, #477023)' }}>
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                    <a href={github} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#a8d878] transition-colors duration-200">
                      <FiGithub size={14} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div {...fadeUp(0.5)} className="mt-16 flex justify-center">
          <a href="https://github.com/Hamza-Abouelwahab" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#a8d878] btn-outline-glow">
            <FiGithub size={15} /> View GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}
