import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineExternalLink,
  HiOutlineEye,
  HiOutlineX,
} from "react-icons/hi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/projects.js";

const projectFilters = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Full-Stack Web" },
  { key: "uiux", label: "UI/UX & Prototyping" },
];

function ProjectCard({ project, onOpenGallery }) {
  const hasLiveDemo = project.liveUrl && project.liveUrl !== "#";
  const hasMockups = Boolean(project.mockups && project.mockups.length > 0);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/5 ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div>
        {/* Project Thumbnail */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 mb-5">
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : project.cardLogo ? (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-indigo-50/70 to-slate-100 p-6 text-center select-none">
              <span className="text-xl sm:text-2xl font-black text-indigo-700 tracking-wider">
                {project.cardLogo.title}
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                {project.cardLogo.subtitle}
              </span>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400 text-xs font-semibold">
              Preview Available Soon
            </div>
          )}

          {/* Category Tag Overlay */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="rounded-full border border-white/80 bg-white/95 px-3 py-1 text-[11px] font-bold text-slate-800 shadow-xs backdrop-blur-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Header & Meta */}
        <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-1">
          <span className="font-semibold text-indigo-600">{project.label}</span>
          <span className="font-mono text-[11px] text-slate-400">0{project.metric}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition">
          {project.title}
        </h3>
        {project.subtitle ? (
          <p className="text-xs font-bold text-slate-500 mt-0.5">{project.subtitle}</p>
        ) : null}

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-100">
        {hasLiveDemo ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-indigo-700 focus-ring"
          >
            <span>Live Demo</span>
            <HiOutlineExternalLink className="text-sm" />
          </a>
        ) : null}

        {hasMockups ? (
          <button
            type="button"
            onClick={() => onOpenGallery(project)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-2xs transition hover:border-slate-300 hover:bg-slate-50 focus-ring cursor-pointer"
          >
            <HiOutlineEye className="text-sm text-indigo-600" />
            <span>View Screens ({project.mockups.length})</span>
          </button>
        ) : null}
      </div>
    </motion.article>
  );
}

function MockupModal({ project, activeIndex, onClose, onNext, onPrevious, onSelectIndex }) {
  if (!project || !project.mockups?.[activeIndex]) return null;
  const activeMockup = project.mockups[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 grid place-items-center bg-slate-900/60 p-3 sm:p-6 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative flex flex-col w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
          initial={{ y: 20, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 20, scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5 bg-slate-50/70">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                {project.title}
              </p>
              <h4 className="text-base font-bold text-slate-900">{activeMockup.title}</h4>
            </div>
            <button
              type="button"
              aria-label="Close modal"
              onClick={onClose}
              className="grid size-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-2xs hover:bg-slate-100 transition cursor-pointer"
            >
              <HiOutlineX className="text-lg" />
            </button>
          </div>

          {/* Main Visual Display Area */}
          <div className="relative flex-1 overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-slate-100/50 min-h-[300px]">
            {project.isDesktop ? (
              <div className="relative w-full max-w-2xl rounded-xl border border-slate-300 bg-slate-900 p-2 shadow-xl">
                <div className="overflow-hidden rounded-lg bg-white">
                  <motion.img
                    key={activeMockup.image}
                    src={activeMockup.image}
                    alt={activeMockup.title}
                    className="h-auto max-h-[52vh] w-full object-cover object-top"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>
            ) : (
              <div className="relative max-h-[54vh] aspect-[9/19] rounded-[2rem] border-4 border-slate-800 bg-slate-900 p-1.5 shadow-xl">
                <div className="h-full w-full overflow-hidden rounded-[1.6rem] bg-white">
                  <motion.img
                    key={activeMockup.image}
                    src={activeMockup.image}
                    alt={activeMockup.title}
                    className="h-full w-full object-cover object-top"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls & Thumbnail Ribbon */}
          <div className="border-t border-slate-100 p-4 bg-white flex flex-col gap-3">
            {/* Horizontal Thumbnail Strip */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {project.mockups.map((mockup, idx) => (
                <button
                  key={mockup.image}
                  type="button"
                  onClick={() => onSelectIndex(idx)}
                  className={`relative shrink-0 w-14 h-14 rounded-xl border overflow-hidden transition cursor-pointer ${
                    idx === activeIndex
                      ? "border-indigo-600 ring-2 ring-indigo-500/30"
                      : "border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={mockup.image}
                    alt={mockup.title}
                    className="h-full w-full object-cover object-top"
                  />
                </button>
              ))}
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={onPrevious}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              >
                <HiChevronLeft /> Prev
              </button>
              <span className="text-xs font-bold text-slate-500">
                {activeIndex + 1} / {project.mockups.length}
              </span>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 transition cursor-pointer"
              >
                Next <HiChevronRight />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeGallery, setActiveGallery] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.group === activeFilter);

  const openGallery = (project) => {
    setActiveGallery(project);
    setModalIndex(0);
  };

  const closeGallery = () => setActiveGallery(null);

  const nextModal = () => {
    if (!activeGallery?.mockups?.length) return;
    setModalIndex((curr) => (curr + 1) % activeGallery.mockups.length);
  };

  const prevModal = () => {
    if (!activeGallery?.mockups?.length) return;
    setModalIndex((curr) =>
      curr === 0 ? activeGallery.mockups.length - 1 : curr - 1,
    );
  };

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-slate-200/60 bg-slate-50/50">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio Showcase"
          title="Featured web applications and interactive prototypes."
          description="A selection of full-stack systems and structured design systems built to solve real operational problems with clean code and high reliability."
        />

        {/* Filter Navigation */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {projectFilters.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`relative rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                  activeFilter === tab.key
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900 bg-white border border-slate-200/80"
                }`}
              >
                {activeFilter === tab.key && (
                  <motion.span
                    layoutId="projectFilterActive"
                    className="absolute inset-0 rounded-full bg-indigo-600"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Responsive Open Project Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenGallery={openGallery}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Interface Preview */}
      <MockupModal
        project={activeGallery}
        activeIndex={modalIndex}
        onClose={closeGallery}
        onNext={nextModal}
        onPrevious={prevModal}
        onSelectIndex={setModalIndex}
      />
    </section>
  );
}

export default Projects;
