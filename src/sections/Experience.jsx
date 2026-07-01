import { HiCheckCircle } from "react-icons/hi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { experiences } from "../data/experience.js";

const experienceGroups = [
  {
    key: "web",
    title: "Web Developer Experience",
    description: "Experience in application development, ERP maintenance, and front-end implementation.",
  },
  {
    key: "uiux",
    title: "UI/UX Experience",
    description: "Independent product design work covering research direction, user flows, interface design, and prototyping.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Professional, organizational, and project experience."
          description="Responsibilities and lessons gained from internships, student organizations, academic work, and independent design projects."
          align="center"
        />
        <div className="mx-auto grid max-w-5xl gap-14">
          {experienceGroups.map((group) => {
            const groupedExperiences = experiences.filter(
              (experience) => experience.group === group.key,
            );

            return (
              <div key={group.key}>
                <div className="mb-7 grid gap-3 border-b border-slate-300 pb-5 md:grid-cols-[1fr_0.8fr] md:items-end">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-600">
                      {group.key === "web" ? "Development Track" : "Design Track"}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-slate-900">{group.title}</h3>
                  </div>
                  {group.description ? (
                    <p className="text-sm leading-7 text-slate-600 md:text-right">{group.description}</p>
                  ) : null}
                </div>
                <div className="grid gap-7">
                  {groupedExperiences.map((experience, index) => (
                    <Reveal key={`${experience.type}-${experience.role}`} delay={index * 0.06}>
                      <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-indigo-200 hover:shadow-lg hover:shadow-slate-200/60">
                        <div className="grid lg:grid-cols-[0.38fr_1fr]">
                          <div className="flex flex-col justify-between border-b border-slate-200 bg-slate-900 p-6 text-white sm:p-8 lg:border-b-0 lg:border-r">
                            <div>
                              <div className="flex items-center justify-between gap-4">
                                <span className="font-mono text-sm text-indigo-300">EXP_{String(index + 1).padStart(2, "0")}</span>
                                <span className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.6)]" />
                              </div>
                              <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Organization</p>
                              <p className="mt-3 text-lg font-bold leading-7 text-white">{experience.type}</p>
                            </div>
                            <span className="mt-8 w-fit rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-bold text-slate-300">
                              {experience.period}
                            </span>
                          </div>

                          <div className="p-6 sm:p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600">Role</p>
                            <h3 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl">{experience.role}</h3>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {experience.stack.map((tech) => (
                                <span key={tech} className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="mt-7 grid gap-4 border-t border-slate-200 pt-6">
                              {experience.highlights.map((highlight) => (
                                <div key={highlight} className="flex gap-3">
                                  <HiCheckCircle className="mt-1 shrink-0 text-xl text-indigo-600" />
                                  <p className="leading-7 text-slate-600">{highlight}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;





