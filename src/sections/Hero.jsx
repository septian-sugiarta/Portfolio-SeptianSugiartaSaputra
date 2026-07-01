import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Button from "../components/Button.jsx";
import ChromaKeyImage from "../components/ChromaKeyImage.jsx";

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center min-h-[460px]"
    >
      {/* Background Shape - solid Indigo arch from the waist down */}
      <div className="absolute bottom-6 w-64 h-[310px] bg-indigo-600 rounded-t-[110px] shadow-xl shadow-indigo-600/10" />

      {/* Frame container for portrait, allowing head/shoulders to pop out */}
      <div className="relative w-64 h-[380px] overflow-hidden flex items-end justify-center">
        <ChromaKeyImage
          src="/assets/septian-profile.jpeg"
          alt="Septian Sugiarta Saputra"
          className="w-full h-auto object-cover object-bottom"
        />
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 sm:pt-36">
      <div className="section-shell relative grid min-h-[calc(100vh-9rem)] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-indigo-600">
            Septian Sugiarta Saputra
          </p>
          <h1 className="max-w-5xl text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Web Developer <span className="text-indigo-600 block">and UI/UX Designer</span>
          </h1>

          {/* IT Mono Typing Line */}
          <div className="mt-4 font-mono text-sm flex items-center gap-2 flex-wrap">
            <span className="text-slate-400">const</span>
            <span className="text-slate-800 font-semibold">roles</span>
            <span className="text-indigo-500">=</span>
            <span className="text-slate-400">[</span>
            <span className="typing-container text-indigo-600 font-bold px-1 bg-indigo-50 rounded border border-indigo-100">
              "Developer", "Designer", "Problem-Solver"
            </span>
            <span className="text-slate-400">];</span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Eighth-semester Information Systems student with experience in front-end development, interface design, and the implementation of web-based systems.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects">
              View Projects <HiArrowRight />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["UPNVJ", "Information Systems"],
              ["GMF AeroAsia", "Internship"],
              ["PT SISI", "Internship"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-lg font-black text-slate-900">{value}</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  );
}

export default Hero;



