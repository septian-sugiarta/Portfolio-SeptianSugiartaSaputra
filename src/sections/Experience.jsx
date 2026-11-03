import { HiCheckCircle, HiOutlineBriefcase } from "react-icons/hi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { experiences } from "../data/experience.js";

const experienceTracks = [
  {
    key: "web",
    title: "Software & Web Development Track",
    description: "Enterprise internships and developer roles engineering scalable dashboards, microservices, and responsive user interfaces.",
  },
  {
    key: "uiux",
    title: "UI/UX & Prototyping Track",
    description: "Design system architecture, user flow mapping, and interactive high-fidelity prototypes for mobile and web applications.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-slate-200/60 bg-white">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Work Experience"
          title="Practical engineering impact across industry & agile teams."
          description="Demonstrated track record across enterprise internships, cross-functional sprints, and full-stack software development projects."
        />

        <div className="mx-auto max-w-4xl space-y-16">
          {experienceTracks.map((track) => {
            const trackExperiences = experiences.filter(
              (exp) => exp.group === track.key,
            );

            return (
              <div key={track.key}>
                {/* Track Header */}
                <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-slate-200 pb-3 gap-1">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                    <span className="grid size-8 place-items-center rounded-lg bg-indigo-50 text-indigo-600 text-sm">
                      <HiOutlineBriefcase />
                    </span>
                    <span>{track.title}</span>
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {trackExperiences.length} Roles
                  </span>
                </div>

                {/* Experience Cards Stack */}
                <div className="space-y-6">
                  {trackExperiences.map((exp, index) => (
                    <Reveal key={`${exp.type}-${exp.role}`} delay={index * 0.05}>
                      <article className="group relative rounded-3xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-8 transition duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5">
                        {/* Role & Timeline Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200/60 pb-4 mb-4">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                              {exp.type} {exp.location ? `· ${exp.location}` : ""}
                            </span>
                            <h4 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                              {exp.role}
                            </h4>
                          </div>

                          <span className="inline-flex items-center w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-2xs">
                            {exp.period}
                          </span>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {exp.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg border border-slate-200/70 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-3xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Quantified Bullet Points from CV */}
                        <ul className="space-y-3">
                          {exp.highlights.map((point) => (
                            <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                              <HiCheckCircle className="mt-1 shrink-0 text-indigo-600 text-lg" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
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
