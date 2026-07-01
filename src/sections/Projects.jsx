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
  { key: "all", label: "All projects" },
  { key: "web", label: "Development" },
  { key: "uiux", label: "UI/UX Design" },
];

function ProjectThumbnail({ accent, title, metric, label, coverImage, cardLogo }) {
  if (coverImage) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-50">
        <img
          src={coverImage}
          alt={`${title} splash screen`}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  if (cardLogo) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-slate-200 bg-gradient-to-b from-indigo-50/50 to-slate-50 flex flex-col items-center justify-center p-6 text-center select-none shadow-sm">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-indigo-500/5 opacity-10 blur-xl animate-pulse" />
        
        {/* Text Logo Wrapper */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <h4 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-black tracking-wide bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent uppercase">
            {cardLogo.title}
          </h4>
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            {cardLogo.subtitle}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-50">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-10`} />
      <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 p-3 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-indigo-500" />
          <span className="h-2 w-24 rounded-full bg-slate-200" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          Project
        </span>
      </div>
      <div className="absolute bottom-5 left-5 right-5 grid gap-3 rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-md">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-black text-slate-800">{title}</span>
          <span className="text-lg font-black text-indigo-600">{metric}</span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>
      </div>
    </div>
  );
}

function MockupModal({ project, activeIndex, onClose, onNext, onPrevious, onSelectIndex }) {
  const activeMockup = project?.mockups?.[activeIndex];

  return (
    <AnimatePresence>
      {project && activeMockup ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-900/60 px-4 py-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative grid max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white shadow-2xl lg:grid-cols-[0.92fr_1.08fr]"
            initial={{ y: 24, scale: 0.97, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <button
              type="button"
              aria-label="Close mockup preview"
              onClick={onClose}
              className="focus-ring absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-slate-200 bg-white/90 text-xl text-slate-800 shadow-sm transition hover:bg-slate-100 cursor-pointer"
            >
              <HiOutlineX />
            </button>

            <div className="relative flex items-center justify-center overflow-hidden bg-slate-50 border-r border-slate-100 p-4 sm:p-6">
              <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              <div className="relative z-[1] flex w-full h-[72vh] items-center justify-center">
                {project.isDesktop ? (
                  <div className="relative mx-auto w-full max-w-2xl aspect-[16/10] flex flex-col justify-center">
                    {/* Laptop Screen Frame */}
                    <div className="relative w-full aspect-[16/9] rounded-2xl bg-zinc-900 p-2.5 shadow-xl border border-slate-200">
                      {/* Screen Inner */}
                      <div className="h-full w-full overflow-hidden rounded-lg bg-zinc-950">
                        <motion.img
                          key={activeMockup.image}
                          src={activeMockup.image}
                          alt={`${project.title} ${activeMockup.title} mockup`}
                          className="h-full w-full object-cover object-top"
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.24 }}
                        />
                      </div>
                    </div>
                    {/* Laptop Base (Silver/Slate Style) */}
                    <div className="relative h-3 w-[108%] -left-[4%] bg-gradient-to-b from-slate-200 to-slate-400 rounded-b-xl border-t border-slate-300 shadow-lg" />
                    <div className="relative mx-auto h-1.5 w-20 bg-slate-300 rounded-b-md" />
                  </div>
                ) : (
                  <div className="relative mx-auto h-full max-h-[680px] aspect-[9/19.5]">
                    {/* Phone Frame */}
                    <div className="relative h-full rounded-[2rem] bg-slate-900 p-3 shadow-xl border border-slate-200">
                      {/* Screen */}
                      <div className="h-full overflow-hidden rounded-[1.6rem] bg-white">
                        <motion.img
                          key={activeMockup.image}
                          src={activeMockup.image}
                          alt={`${project.title} ${activeMockup.title} mockup`}
                          className="h-full w-full object-cover object-center"
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.24 }}
                        />
                      </div>
                      {/* Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-slate-300"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
              <div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-600">
                    {project.title} Mockup
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-slate-900">{activeMockup.title}</h3>
                </div>

                <div className="mt-6 grid max-h-[320px] grid-cols-3 gap-2 overflow-y-auto pr-1 sm:grid-cols-4">
                  {project.mockups.map((mockup, index) => (
                    <button
                      key={mockup.image}
                      type="button"
                      onClick={() => onSelectIndex(index)}
                      className={`focus-ring overflow-hidden rounded-2xl border p-1 transition cursor-pointer ${
                        index === activeIndex
                          ? "border-indigo-600 bg-indigo-50/50"
                          : "border-slate-200 bg-slate-50 hover:border-indigo-600/50"
                      }`}
                    >
                      <img
                        src={mockup.image}
                        alt={`${mockup.title} thumbnail`}
                        className="h-20 w-full rounded-xl object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
                >
                  <HiChevronLeft /> Previous
                </button>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
                  {activeIndex + 1} / {project.mockups.length}
                </span>
                <button
                  type="button"
                  onClick={onNext}
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 shadow-md shadow-indigo-600/10 cursor-pointer"
                >
                  Next <HiChevronRight />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
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

  const activeProject = filteredProjects[projectIndex];

  useEffect(() => {
    setProjectIndex(0);
  }, [activeFilter]);

  useEffect(() => {
    if (isPaused || filteredProjects.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setProjectIndex((current) => (current + 1) % filteredProjects.length);
    }, 5200);

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
    setProjectIndex((current) =>
      current === 0 ? filteredProjects.length - 1 : current - 1,
    );
  };

  const showNextProject = () => {
    setProjectIndex((current) => (current + 1) % filteredProjects.length);
  };

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Selected projects"
          title="Selected work in development and interface design."
          description="A selection of web systems and interface concepts completed through academic work, organizational activities, and independent projects."
        />
        <Reveal>
          <div
            className="overflow-hidden rounded-[2.2rem] border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-300/40"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex flex-col gap-4 border-b border-slate-800 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                <span className="size-2.5 rounded-full bg-red-400" />
                <span className="size-2.5 rounded-full bg-amber-300" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 hidden sm:inline">portfolio://selected-work</span>
              </div>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
                {projectFilters.map((filter) => (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => setActiveFilter(filter.key)}
                    aria-pressed={activeFilter === filter.key}
                    className={`focus-ring rounded-full px-3 py-2 text-xs font-bold transition cursor-pointer ${
                      activeFilter === filter.key
                        ? "bg-indigo-500 text-white"
                        : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_0.72fr]">
              <div className="relative min-h-[660px] overflow-hidden bg-slate-900 p-4 sm:p-7 lg:min-h-[620px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.accent} opacity-15`} />
                <AnimatePresence mode="wait">
                  <motion.article
                    key={`${activeFilter}-${activeProject.title}`}
                    initial={{ opacity: 0, x: 48 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -48 }}
                    transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative z-[1] flex h-full flex-col"
                  >
                    <ProjectThumbnail
                      accent={activeProject.accent}
                      title={activeProject.title}
                      metric={activeProject.metric}
                      label={activeProject.label}
                      coverImage={activeProject.coverImage}
                      cardLogo={activeProject.cardLogo}
                    />
                    <div className="mt-7 flex flex-1 flex-col justify-between gap-7">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-indigo-300">PROJECT_{activeProject.metric}</span>
                          <span className="h-px flex-1 bg-slate-700" />
                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{activeProject.category}</span>
                        </div>
                        <h3 className="mt-4 text-3xl font-black text-white sm:text-4xl">{activeProject.title}</h3>
                        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{activeProject.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {activeProject.stack.map((tech) => (
                            <span key={tech} className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold text-slate-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        {activeProject.mockups ? (
                          <button type="button" onClick={() => openGallery(activeProject)} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-black text-white transition hover:bg-indigo-400 cursor-pointer">
                            View interface <HiArrowTopRightOnSquare />
                          </button>
                        ) : (
                          <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-black text-white transition hover:bg-indigo-400">
                            Open demo <HiArrowTopRightOnSquare />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>

              <aside className="flex flex-col justify-between border-t border-slate-800 bg-slate-950 p-5 sm:p-7 lg:border-l lg:border-t-0" aria-label="Project carousel controls">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Project queue</p>
                    <span className="font-mono text-xs text-emerald-400">● live</span>
                  </div>
                  <div className="mt-5 grid gap-2">
                    {filteredProjects.map((project, index) => (
                      <button
                        key={project.title}
                        type="button"
                        onClick={() => setProjectIndex(index)}
                        aria-current={index === projectIndex ? "true" : undefined}
                        className={`focus-ring group/item flex items-center gap-4 rounded-2xl border p-4 text-left transition cursor-pointer ${
                          index === projectIndex
                            ? "border-indigo-500/60 bg-indigo-500/10"
                            : "border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900"
                        }`}
                      >
                        <span className={`font-mono text-xs ${index === projectIndex ? "text-indigo-300" : "text-slate-600"}`}>0{index + 1}</span>
                        <span className="min-w-0 flex-1">
                          <span className={`block truncate text-sm font-bold ${index === projectIndex ? "text-white" : "text-slate-300"}`}>{project.title}</span>
                          <span className="mt-1 block text-xs text-slate-500">{project.label}</span>
                        </span>
                        <HiArrowTopRightOnSquare className={`shrink-0 ${index === projectIndex ? "text-indigo-300" : "text-slate-700"}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="mb-5 h-1 overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      key={`${activeFilter}-${projectIndex}-${isPaused}`}
                      className="h-full origin-left bg-indigo-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isPaused ? 0 : 1 }}
                      transition={{ duration: isPaused ? 0 : 5.2, ease: "linear" }}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <button type="button" onClick={showPreviousProject} aria-label="Previous project" className="focus-ring grid size-11 place-items-center rounded-full border border-slate-700 text-xl text-slate-300 transition hover:border-indigo-400 hover:text-white cursor-pointer">
                      <HiChevronLeft />
                    </button>
                    <p className="font-mono text-xs text-slate-500">
                      {String(projectIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
                    </p>
                    <button type="button" onClick={showNextProject} aria-label="Next project" className="focus-ring grid size-11 place-items-center rounded-full border border-slate-700 text-xl text-slate-300 transition hover:border-indigo-400 hover:text-white cursor-pointer">
                      <HiChevronRight />
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












