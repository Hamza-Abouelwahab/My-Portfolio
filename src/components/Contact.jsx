import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiSend, FiArrowUpRight } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

//  EmailJS config
const EJS_SERVICE  = 'service_0ls7feq';   
const EJS_TEMPLATE = 'template_zu0g7za';  
const EJS_PUBLIC   = '1jijDXTcveGBivSZU';   


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const SOCIALS = [
  { icon: <FaGithub size={18} />, label: 'GitHub', href: 'https://github.com/Hamza-Abouelwahab', value: 'Hamza-Abouelwahab' },
  { icon: <FaLinkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hamza-abouelwahab-87767a349/', value: 'hamza-abouelwahab' },
  { icon: <HiOutlineMail size={18} />, label: 'Email', href: 'mailto:hamzaabouelwahab04@email.com', value: 'hamzaabouelwahab04@email.com' },
];

const FloatingInput = ({ label, type = 'text', name, value, onChange, required, textarea }) => {
  const base = "peer w-full bg-transparent border-b border-[#47702340] pt-5 pb-2 text-sm text-gray-200 placeholder-transparent focus:outline-none focus:border-[#a8d878] transition-colors duration-300";
  const labelClass = "absolute left-0 top-5 text-xs text-gray-500 transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#a8d878] peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs";

  return (
    <div className="relative w-full">
      {textarea ? (
        <textarea rows={4} name={name} placeholder={label} value={value} onChange={onChange} required={required} className={`${base} resize-none`} />
      ) : (
        <input type={type} name={name} placeholder={label} value={value} onChange={onChange} required={required} className={base} />
      )}
      <label className={labelClass}>{label}</label>
      <div className="absolute bottom-0 left-0 w-0 h-px bg-[#a8d878] transition-all duration-300 peer-focus:w-full" />
    </div>
  );
};

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(EJS_SERVICE, EJS_TEMPLATE, formRef.current, EJS_PUBLIC);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <>
      <section id="contact" className="relative overflow-hidden">
        <div className="circuit-bg" />

        {/* ── Top CTA banner ── */}
        <div className="relative z-10 border-t border-b border-[#47702220] py-20 px-6 md:px-12 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(71,112,35,0.12) 0%, transparent 70%)' }} />
          <motion.p {...fadeUp(0)} className="text-[#a8d878] text-sm tracking-widest uppercase mb-4">Get in touch</motion.p>
          <motion.h2 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Let's Build<br />
            <span className="gradient-text">Something Great</span>
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Open to new opportunities, collaborations, or just a good conversation. Drop me a message and I'll get back to you.
          </motion.p>
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left — socials */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-2 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Connect with me</p>
              {SOCIALS.map(({ icon, label, href, value }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="group flex items-center justify-between px-5 py-4 rounded-2xl border border-[#47702220] hover:border-[#47702260] hover:bg-[#0D330E] transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-[#477023] group-hover:text-[#a8d878] transition-colors duration-200">{icon}</span>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">{value}</p>
                    </div>
                  </div>
                  <FiArrowUpRight size={16} className="text-gray-600 group-hover:text-[#a8d878] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#47702230]" style={{ background: 'rgba(13,51,14,0.4)' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8d878] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#a8d878]" />
              </span>
              <p className="text-sm text-gray-300">Available for freelance & full-time roles</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div {...fadeUp(0.3)} className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FloatingInput label="Your Name" name="from_name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                <FloatingInput label="Your Email" name="from_email" type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
              </div>
              <FloatingInput label="Your Message" name="message" textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required />

              <div className="flex items-center justify-between pt-2 border-t border-[#47702220]">
                <p className="text-xs text-gray-600">
                  {status === 'error' ? <span className="text-red-400">Something went wrong. Try again.</span> : "I'll reply within 24 hours."}
                </p>
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:shadow-[0_0_30px_#47702355] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #477023, #2D531A)' }}
                >
                  {status === 'sending' && <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>}
                  {status === 'sent'    && <><span>✓</span> Sent!</>}
                  {status === 'error'   && <><span>✗</span> Failed</>}
                  {status === 'idle'    && <><FiSend size={15} /> Send Message</>}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-[#47702215] px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} <span className="text-[#a8d878]">Hamza Abouelwahab</span>. All rights reserved.</p>
          <p>Built with <span className="text-[#a8d878]">React</span> & <span className="text-[#a8d878]">TailwindCSS</span></p>
        </div>
      </footer>
    </>
  );
}
