import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import {
  HiChevronLeft,
  HiChevronRight,
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

function ProjectThumbnail({ accent, title, metric, label, coverImage, cardLogo, objectPosition = "object-center" }) {
  if (coverImage) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-stone-800/80 bg-stone-900/60">
        <img
          src={coverImage}
          alt={`${title} preview`}
          className={`h-full w-full object-cover ${objectPosition} transition duration-500 group-hover:scale-105`}
        />
      </div>
    );
  }

  if (cardLogo) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-stone-800/80 bg-gradient-to-b from-stone-900 to-stone-950 flex flex-col items-center justify-center p-6 text-center select-none shadow-inner">
        {/* Subtle warm amber ambient glow */}
        <div className="absolute inset-0 bg-amber-500/5 blur-xl animate-pulse" />
        
        {/* Text Logo Wrapper */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <h4 className="text-2xl sm:text-3xl font-black tracking-wider bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent uppercase">
            {cardLogo.title}
          </h4>
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-stone-400">
            {cardLogo.subtitle}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-stone-800 bg-stone-900">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-20`} />
      <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-xl border border-stone-700/60 bg-stone-900/80 p-2.5 backdrop-blur-sm">
        <span className="size-2 rounded-full bg-amber-400" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
          Curated Showcase
        </span>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-stone-800 bg-stone-900/90 p-3 shadow-md">
        <span className="text-xs font-bold text-stone-200">{title}</span>
        <span className="text-sm font-mono font-bold text-amber-400">{metric}</span>
      </div>
    </div>
  );
}

function MockupModal({ project, activeIndex, onClose, onNext, onPrevious, onSelectIndex }) {
  if (!project || !project.mockups?.[activeIndex]) return null;
  const activeMockup = project.mockups[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 grid place-items-center bg-stone-950/80 px-3 sm:px-6 py-4 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-stone-800 bg-stone-950 shadow-2xl lg:grid-cols-[0.95fr_1.05fr]"
          initial={{ y: 20, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 20, scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <button
            type="button"
            aria-label="Close mockup preview"
            onClick={onClose}
            className="focus-ring absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-stone-700/80 bg-stone-900 text-stone-300 shadow-md transition hover:bg-stone-800 hover:text-white cursor-pointer"
          >
            <HiOutlineX className="text-lg" />
          </button>

          {/* Interactive Screen Display */}
          <div className="relative flex items-center justify-center overflow-hidden bg-stone-900/70 border-b lg:border-b-0 lg:border-r border-stone-800 p-4 sm:p-6 min-h-[320px]">
            <div className="relative z-[1] flex w-full max-h-[60vh] items-center justify-center">
              {project.isDesktop ? (
                <div className="relative mx-auto w-full max-w-xl aspect-[16/10] flex flex-col justify-center">
                  <div className="relative w-full aspect-[16/9] rounded-xl bg-stone-950 p-2 shadow-2xl border border-stone-700">
                    <div className="h-full w-full overflow-hidden rounded-lg bg-black">
                      <motion.img
                        key={activeMockup.image}
                        src={activeMockup.image}
                        alt={`${project.title} ${activeMockup.title} mockup`}
                        className="h-full w-full object-cover object-top"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </div>
                  <div className="relative h-2.5 w-[106%] -left-[3%] bg-stone-800 rounded-b-lg border-t border-stone-700 shadow-md" />
                  <div className="relative mx-auto h-1 w-16 bg-stone-700 rounded-b-sm" />
                </div>
              ) : (
                <div className="relative mx-auto max-h-[55vh] aspect-[9/19.5]">
                  <div className="relative h-full rounded-[2rem] bg-stone-900 p-2.5 shadow-2xl border-2 border-stone-700">
                    <div className="h-full overflow-hidden rounded-[1.6rem] bg-white">
                      <motion.img
                        key={activeMockup.image}
                        src={activeMockup.image}
                        alt={`${project.title} ${activeMockup.title} mockup`}
                        className="h-full w-full object-cover object-center"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Modal Sidebar Information & Thumbnail Gallery */}
          <div className="flex flex-col justify-between gap-6 p-5 sm:p-8 bg-stone-950 text-stone-100">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
                {project.title} · Screen Preview
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black text-white">{activeMockup.title}</h3>

              <div className="mt-6 grid max-h-[260px] grid-cols-3 gap-2 overflow-y-auto pr-1 sm:grid-cols-4 scrollbar-none">
                {project.mockups.map((mockup, index) => (
                  <button
                    key={mockup.image}
                    type="button"
                    onClick={() => onSelectIndex(index)}
                    className={`focus-ring overflow-hidden rounded-xl border p-1 transition cursor-pointer ${
                      index === activeIndex
                        ? "border-amber-400 bg-amber-400/10 ring-1 ring-amber-400/40"
                        : "border-stone-800 bg-stone-900/60 hover:border-stone-700"
                    }`}
                  >
                    <img
                      src={mockup.image}
                      alt={`${mockup.title} thumbnail`}
                      className="h-16 w-full rounded-lg object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-stone-800">
              <button
                type="button"
                onClick={onPrevious}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-stone-700 bg-stone-900 px-4 py-2.5 text-xs font-bold text-stone-300 hover:border-amber-400 hover:text-white transition cursor-pointer"
              >
                <HiChevronLeft /> Prev
              </button>
              <span className="rounded-full border border-stone-800 bg-stone-900/80 px-4 py-2 text-xs font-mono font-bold text-amber-400">
                {activeIndex + 1} / {project.mockups.length}
              </span>
              <button
                type="button"
                onClick={onNext}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-xs font-bold text-stone-950 hover:from-amber-400 hover:to-amber-500 transition shadow-md shadow-amber-500/20 cursor-pointer"
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
  const [activeGallery, setActiveGallery] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [projectIndex, setProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.group === activeFilter),
    [activeFilter],
  );

  const safeProjectIndex = filteredProjects.length
    ? Math.min(projectIndex, filteredProjects.length - 1)
    : 0;
  const activeProject = filteredProjects[safeProjectIndex];

  useEffect(() => {
    setProjectIndex(0);
  }, [activeFilter]);

  useEffect(() => {
    if (projectIndex >= filteredProjects.length) {
      setProjectIndex(0);
    }
  }, [filteredProjects.length, projectIndex]);

  useEffect(() => {
    if (isPaused || filteredProjects.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setProjectIndex((current) => (current + 1) % filteredProjects.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [filteredProjects.length, isPaused]);

  const openGallery = (project) => {
    setActiveGallery(project);
    setModalIndex(0);
  };

  const closeGallery = () => setActiveGallery(null);

  const showPrevious = () => {
    if (!activeGallery?.mockups?.length) return;
    setModalIndex((current) =>
      current === 0 ? activeGallery.mockups.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    if (!activeGallery?.mockups?.length) return;
    setModalIndex((current) =>
      current === activeGallery.mockups.length - 1 ? 0 : current + 1,
    );
  };

  const showPreviousProject = () => {
    if (!filteredProjects.length) return;
    setProjectIndex((current) => {
      const normalizedIndex = Math.min(current, filteredProjects.length - 1);
      return normalizedIndex === 0 ? filteredProjects.length - 1 : normalizedIndex - 1;
    });
  };

  const showNextProject = () => {
    if (!filteredProjects.length) return;
    setProjectIndex((current) => (current + 1) % filteredProjects.length);
  };

  if (!activeProject) {
    return null;
  }

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#fdfbf7]">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Curated Portfolio"
          title="Selected engineering & design showcase."
          description="Interactive showcase of full-stack web applications, database architectures, and structured design systems built to solve real-world problems."
        />

        <Reveal>
          {/* Main Craft Studio Container: Warm Deep Obsidian & Raw Umber */}
          <div
            className="overflow-hidden rounded-[2.2rem] sm:rounded-[2.6rem] border border-stone-800/90 bg-[#161514] shadow-2xl shadow-stone-900/40"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Navigation & Filter Bar */}
            <div className="flex flex-col gap-4 border-b border-stone-800/90 px-5 sm:px-8 py-4 sm:flex-row sm:items-center sm:justify-between bg-stone-950/70">
              <div className="flex items-center gap-2.5 font-mono text-xs text-amber-400">
                <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="tracking-wider uppercase font-bold text-stone-300">
                  Curated Catalog <span className="text-stone-500 hidden sm:inline">· 2024–2026</span>
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter projects">
                {projectFilters.map((filter) => (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    aria-pressed={activeFilter === filter.key}
                    className={`focus-ring rounded-full px-3.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                      activeFilter === filter.key
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-md shadow-amber-500/20"
                        : "bg-stone-900/90 text-stone-400 hover:bg-stone-800 hover:text-stone-200 border border-stone-800"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Split Showcase Layout: Left Spotlight & Right Queue */}
            <div className="grid lg:grid-cols-[1.08fr_0.72fr]">
              {/* Left Spotlight Pane */}
              <div className="relative min-h-[580px] sm:min-h-[640px] overflow-hidden bg-stone-900/90 p-5 sm:p-8 flex flex-col justify-between">
                <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.accent} opacity-20 pointer-events-none`} />

                <AnimatePresence mode="wait">
                  <motion.article
                    key={`${activeFilter}-${activeProject.title}`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative z-10 flex h-full flex-col justify-between"
                  >
                    <div>
                      {/* Project Visual Frame */}
                      <ProjectThumbnail
                        accent={activeProject.accent}
                        title={activeProject.title}
                        metric={activeProject.metric}
                        label={activeProject.label}
                        coverImage={activeProject.coverImage}
                        cardLogo={activeProject.cardLogo}
                        objectPosition={activeProject.objectPosition || "object-center"}
                      />

                      {/* Project Meta & Content */}
                      <div className="mt-6">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-amber-400">
                            PROJECT [{activeProject.metric}]
                          </span>
                          <span className="h-px flex-1 bg-stone-800" />
                          <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                            {activeProject.category}
                          </span>
                        </div>

                        <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                          {activeProject.title}
                        </h3>
                        {activeProject.subtitle ? (
                          <p className="mt-1 text-xs font-bold text-amber-400/90 font-mono">
                            {activeProject.subtitle}
                          </p>
                        ) : null}

                        <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-stone-300">
                          {activeProject.description}
                        </p>

                        {/* Tech Stack Chips */}
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {activeProject.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg border border-stone-700/80 bg-stone-950/80 px-2.5 py-1 text-[11px] font-semibold text-stone-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-7 pt-4 border-t border-stone-800/80">
                      {activeProject.mockups ? (
                        <button
                          type="button"
                          onClick={() => openGallery(activeProject)}
                          className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-xs sm:text-sm font-bold text-stone-950 transition hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 cursor-pointer"
                        >
                          <span>Explore Interface</span>
                          <HiArrowTopRightOnSquare className="text-base" />
                        </button>
                      ) : (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-xs sm:text-sm font-bold text-stone-950 transition hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20"
                        >
                          <span>Open Live Demo</span>
                          <HiArrowTopRightOnSquare className="text-base" />
                        </a>
                      )}
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>

              {/* Right Queue Sidebar */}
              <aside
                className="flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800/90 bg-[#121110] p-5 sm:p-7"
                aria-label="Project catalog list"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                    <p className="font-mono text-xs uppercase tracking-widest text-stone-400">
                      Catalog Queue
                    </p>
                    <span className="font-mono text-[11px] text-amber-400 font-bold flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-amber-400" /> ACTIVE
                    </span>
                  </div>

                  {/* List of queue items */}
                  <div className="mt-4 grid gap-2">
                    {filteredProjects.map((project, index) => (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => setProjectIndex(index)}
                        aria-current={index === safeProjectIndex ? "true" : undefined}
                        className={`focus-ring group/item flex items-center gap-3.5 rounded-2xl border p-3.5 text-left transition cursor-pointer ${
                          index === safeProjectIndex
                            ? "border-amber-500/60 bg-amber-500/10 shadow-inner"
                            : "border-stone-800/80 bg-stone-900/40 hover:border-stone-700 hover:bg-stone-900/80"
                        }`}
                      >
                        <span
                          className={`font-mono text-xs font-bold ${
                            index === safeProjectIndex ? "text-amber-400" : "text-stone-500"
                          }`}
                        >
                          0{index + 1}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className={`block truncate text-sm font-bold ${
                              index === safeProjectIndex ? "text-white" : "text-stone-300"
                            }`}
                          >
                            {project.title}
                          </span>
                          <span className="mt-0.5 block truncate text-[11px] text-stone-400">
                            {project.label}
                          </span>
                        </span>
                        <HiArrowTopRightOnSquare
                          className={`shrink-0 text-sm transition ${
                            index === safeProjectIndex
                              ? "text-amber-400"
                              : "text-stone-600 group-hover/item:text-stone-400"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Progress Indicator & Steppers */}
                <div className="mt-8 pt-4 border-t border-stone-800">
                  <div className="mb-4 h-1 overflow-hidden rounded-full bg-stone-800">
                    <motion.div
                      key={`${activeFilter}-${safeProjectIndex}-${isPaused}`}
                      className="h-full origin-left bg-gradient-to-r from-amber-500 to-orange-400"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isPaused ? 0 : 1 }}
                      transition={{ duration: isPaused ? 0 : 5.5, ease: "linear" }}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={showPreviousProject}
                      aria-label="Previous project"
                      className="focus-ring grid size-10 place-items-center rounded-full border border-stone-700 bg-stone-900 text-stone-300 transition hover:border-amber-400 hover:text-amber-300 cursor-pointer"
                    >
                      <HiChevronLeft className="text-lg" />
                    </button>
                    <p className="font-mono text-xs text-stone-400 font-bold">
                      {String(safeProjectIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
                    </p>
                    <button
                      type="button"
                      onClick={showNextProject}
                      aria-label="Next project"
                      className="focus-ring grid size-10 place-items-center rounded-full border border-stone-700 bg-stone-900 text-stone-300 transition hover:border-amber-400 hover:text-amber-300 cursor-pointer"
                    >
                      <HiChevronRight className="text-lg" />
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </Reveal>
      </div>

      <MockupModal
        project={activeGallery}
        activeIndex={modalIndex}
        onClose={closeGallery}
        onNext={showNext}
        onPrevious={showPrevious}
        onSelectIndex={setModalIndex}
      />
    </section>
  );
}

export default Projects;
