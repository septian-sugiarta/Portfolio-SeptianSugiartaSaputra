import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { skillGroups } from "../data/skills.js";

function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-slate-200/60 bg-white">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technical Capabilities"
          title="Core stack, frameworks, and engineering tools."
          description="Technical proficiencies and tools honed through academic excellence, BNSP certification, and hands-on enterprise software development."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.05}
              className="group rounded-3xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:bg-white hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {group.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-3xs transition duration-200 group-hover:border-indigo-200"
                    >
                      <Icon className="text-base text-indigo-600 shrink-0" />
                      <span>{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
