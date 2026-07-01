import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.a
          href="#home"
          aria-label="Scroll to top"
          className="focus-ring fixed bottom-5 right-5 z-30 grid size-12 place-items-center rounded-full border border-white/12 bg-white/10 text-lg text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-orange-300/50 hover:bg-orange-300/15"
          initial={{ opacity: 0, y: 18, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.9 }}
        >
          <HiArrowUp />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}

export default ScrollToTop;
