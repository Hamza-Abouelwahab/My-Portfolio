import { motion } from 'framer-motion';
import { FiCode, FiServer } from 'react-icons/fi';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const Highlight = ({ children }) => (
  <span className="text-[#a8d878] font-semibold">{children}</span>
);

const CodeMockup = () => (
  <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_#47702315] bg-[#0b230b] w-full max-w-sm">
    <div className="flex items-center gap-2 px-4 py-3 bg-[#0D330E] border-b border-[#47702320]">
      <span className="w-3 h-3 rounded-full bg-red-500/70" />
      <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
      <span className="w-3 h-3 rounded-full bg-[#477023]/70" />
      <span className="ml-3 text-xs text-gray-500 font-mono">about.js</span>
    </div>
    <div className="p-5 font-mono text-xs leading-7 text-gray-400">
      <p><span className="text-[#a8d878]">const</span> <span className="text-[#c8e8a0]">developer</span> = {'{'}</p>
      <p className="pl-4"><span className="text-[#477023]">name</span>: <span className="text-yellow-300/80">"Hamza Abouelwahab"</span>,</p>
      <p className="pl-4"><span className="text-[#477023]">role</span>: <span className="text-yellow-300/80">"Full Stack Dev"</span>,</p>
      <p className="pl-4"><span className="text-[#477023]">stack</span>: [</p>
      <p className="pl-8"><span className="text-yellow-300/80">"React"</span>, <span className="text-yellow-300/80">"Laravel"</span>,</p>
      <p className="pl-8"><span className="text-yellow-300/80">"JavaScript"</span>,</p>
      <p className="pl-4">],</p>
      <p className="pl-4"><span className="text-[#477023]">passion</span>: <span className="text-yellow-300/80">"Clean Code"</span>,</p>
      <p className="pl-4"><span className="text-[#477023]">available</span>: <span className="text-[#a8d878]">true</span>,</p>
      <p>{'}'}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <section id="about" className="section-pad section-alt px-6 md:px-12 relative overflow-hidden">
      <div className="circuit-bg" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div {...fadeUp(0)} className="mb-16 flex flex-col items-center text-center">
          <p className="text-[#a8d878] text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="accent-line" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div {...fadeUp(0.2)} className="flex-1 flex justify-center">
            <CodeMockup />
          </motion.div>

          <motion.div {...fadeUp(0.35)} className="flex-1 flex flex-col gap-6">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              I am a motivated and detail-oriented Web Developer with strong experience in{' '}
              <Highlight>JavaScript</Highlight>, <Highlight>React</Highlight>, and <Highlight>Laravel</Highlight>.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              I focus on building dynamic front-end interfaces with <Highlight>React</Highlight> and developing
              secure, scalable back-end systems using <Highlight>Laravel</Highlight>.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              I am passionate about writing clean code, solving complex problems, and continuously improving my
              technical skills. My goal is to grow as a full-stack developer and contribute to innovative and
              impactful projects.
            </p>

            <div className="flex gap-4 mt-4 flex-wrap">
              <div className="relative group flex-1 min-w-[160px] rounded-2xl p-px overflow-hidden" style={{ background: 'linear-gradient(135deg, #47702240, #2D531A20)' }}>
                <div className="rounded-2xl px-6 py-5 flex items-center gap-4 h-full transition-all duration-300" style={{ background: 'rgba(7,30,7,0.85)' }}>
                  <div className="p-3 rounded-xl text-[#a8d878] transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(45,83,26,0.3)' }}>
                    <FiCode size={22} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">Front-End</p>
                    <p className="text-gray-500 text-xs mt-0.5">React · JS · CSS</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(90deg, #477023, #a8d878)' }} />
              </div>
              <div className="relative group flex-1 min-w-[160px] rounded-2xl p-px overflow-hidden" style={{ background: 'linear-gradient(135deg, #47702240, #2D531A20)' }}>
                <div className="rounded-2xl px-6 py-5 flex items-center gap-4 h-full transition-all duration-300" style={{ background: 'rgba(7,30,7,0.85)' }}>
                  <div className="p-3 rounded-xl text-[#c8e8a0] transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(45,83,26,0.3)' }}>
                    <FiServer size={22} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">Back-End</p>
                    <p className="text-gray-500 text-xs mt-0.5">Laravel · PHP · MySQL</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(90deg, #477023, #a8d878)' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
