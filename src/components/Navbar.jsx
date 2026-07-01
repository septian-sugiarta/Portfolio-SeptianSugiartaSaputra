import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { navigationItems } from "../data/navigation.js";
import { useActiveSection } from "../hooks/useActiveSection.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = useMemo(() => navigationItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = isScrolled
    ? "border-slate-200 bg-white/85 shadow-lg shadow-slate-100/50"
    : "border-slate-100 bg-white/40";

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav
        className={`section-shell flex h-16 items-center justify-between rounded-full border px-4 backdrop-blur-2xl transition duration-300 ${navClass}`}
      >
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid size-9 place-items-center rounded-full border border-indigo-200 bg-indigo-600 text-[11px] font-black text-white shadow-lg shadow-indigo-500/10">
            SS
          </span>
          <span className="hidden text-sm font-bold tracking-wide text-slate-800 sm:inline">
            Portfolio Website
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeSection === item.id
                  ? "bg-indigo-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="focus-ring hidden rounded-full border border-indigo-600/30 bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700 transition hover:border-indigo-600/60 hover:bg-indigo-100/80 md:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring grid size-10 place-items-center rounded-full border border-slate-200 bg-slate-100/55 text-xl text-slate-700 lg:hidden"
        >
          {isOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="section-shell mt-3 overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-2 shadow-2xl shadow-slate-200/50 backdrop-blur-2xl lg:hidden"
          >
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`focus-ring flex rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  activeSection === item.id
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
