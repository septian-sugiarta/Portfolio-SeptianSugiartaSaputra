import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { skillGroups } from "../data/skills.js";

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills developed through study and practice."
          description="The following capabilities have been developed through academic work, organizational responsibilities, internships, and independent projects."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.04}
              className={`group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md ${
                index === 0 ? "xl:col-span-2" : ""
              }`}
            >
              <h3 className="text-xl font-bold text-slate-900">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition group-hover:border-indigo-200"
                    >
                      <Icon className="text-base text-indigo-600" />
                      {skill.name}
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



