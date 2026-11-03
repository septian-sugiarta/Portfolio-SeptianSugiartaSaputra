import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineBadgeCheck } from "react-icons/hi";
import { SiNestjs, SiNextdotjs, SiReact } from "react-icons/si";
import Button from "../components/Button.jsx";

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center py-4"
    >
      {/* Subtle warm ambient halo */}
      <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-tr from-amber-500/10 via-orange-400/5 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      {/* Main Studio Portrait Frame */}
      <div className="relative w-full max-w-[310px] sm:max-w-[360px] aspect-[3/4] rounded-[2.4rem] border border-stone-200/90 bg-white p-2.5 sm:p-3 shadow-xl shadow-stone-900/5 flex flex-col justify-end overflow-hidden group">
        {/* Crisp HD Studio Portrait */}
        <div className="relative z-10 w-full h-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.1rem] bg-stone-100 flex items-center justify-center">
          <img
            src="/assets/septian-profile-hd.jpg"
            alt="Septian Sugiarta Saputra"
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
            loading="eager"
          />
          {/* Subtle soft vignette at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-950/20 to-transparent pointer-events-none" />
        </div>

        {/* Floating Chip 1: BNSP Verified (Bottom-Left) */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-5 left-4 sm:left-5 z-20 flex items-center gap-2 rounded-xl sm:rounded-2xl border border-stone-200/90 bg-white/95 px-3 py-2 shadow-lg shadow-stone-900/10 backdrop-blur-md"
        >
          <span className="grid size-7 sm:size-8 place-items-center rounded-lg sm:rounded-xl bg-amber-50 text-amber-700">
            <HiOutlineBadgeCheck className="text-lg sm:text-xl" />
          </span>
          <div className="text-left">
            <p className="text-[10px] sm:text-xs font-black text-stone-900 leading-tight">BNSP Certified</p>
            <p className="text-[9px] sm:text-[10px] font-bold text-stone-500">System Analyst</p>
          </div>
        </motion.div>

        {/* Floating Chip 2: Tech Stack (Top-Right) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-5 right-4 sm:right-5 z-20 flex items-center gap-1.5 rounded-xl border border-stone-200/90 bg-white/95 px-2.5 py-1.5 shadow-md shadow-stone-900/5 backdrop-blur-md"
        >
          <span className="text-[10px] font-bold text-stone-600 mr-0.5 hidden sm:inline">Stack:</span>
          <SiReact className="text-xs text-sky-600" title="React.js" />
          <SiNextdotjs className="text-xs text-stone-950" title="Next.js" />
          <SiNestjs className="text-xs text-red-600" title="NestJS" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] pt-28 sm:pt-36 pb-16 flex items-center bg-[#fdfbf7]">
      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left"
        >
          {/* Real-world status pill - Human Craft & Professional */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/80 px-3.5 py-1.5 text-xs font-semibold text-amber-900 shadow-2xs mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span>Available for Junior Software Engineer / Web Developer roles</span>
          </div>

          <h1 className="max-w-3xl text-3xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.12] tracking-tight text-stone-900">
            Junior Software Engineer <span className="text-amber-700 block sm:inline">& Web Developer</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed sm:leading-8 text-stone-600">
            Information Systems graduate from UPN Veteran Jakarta (GPA: 3.83/4.00) specializing in Full-Stack Web Development, with hands-on experience building responsive user interfaces (React.js, Next.js) and architecting scalable backend APIs (Express.js, NestJS).
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Button href="#projects" className="w-full sm:w-auto justify-center">
              View Featured Projects <HiArrowRight className="ml-1" />
            </Button>
            <Button href="#contact" variant="secondary" className="w-full sm:w-auto justify-center">
              Contact Me
            </Button>
          </div>

          {/* Quick Credibility Stats */}
          <div className="mt-10 grid w-full max-w-xl grid-cols-3 gap-2.5 sm:gap-4 border-t border-stone-200/80 pt-6">
            {[
              ["3.83 / 4.00", "UPNVJ GPA"],
              ["GMF AeroAsia", "Full-Stack Intern"],
              ["BNSP Certified", "System Analyst"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl sm:rounded-2xl border border-stone-200/80 bg-white p-3 sm:p-4 shadow-2xs">
                <p className="text-sm sm:text-base md:text-lg font-black text-stone-900 truncate">{value}</p>
                <p className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-stone-400 truncate">
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
