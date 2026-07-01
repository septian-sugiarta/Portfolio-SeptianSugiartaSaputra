import { motion } from "framer-motion";

function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-[#ffffff]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative grid place-items-center">
        <motion.div
          className="absolute size-28 rounded-full border border-indigo-600/30"
          animate={{ scale: [0.82, 1.08, 0.82], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-2xl font-black text-white shadow-2xl shadow-indigo-500/20"
          initial={{ rotate: -8, opacity: 0, y: 8 }}
          animate={{ rotate: 0, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          SS
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SplashScreen;
