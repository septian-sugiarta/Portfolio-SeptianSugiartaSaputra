import { HiArrowRight } from "react-icons/hi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { contactLinks } from "../data/contact.js";

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="section-shell">
        <div className="glass-panel overflow-hidden rounded-[2.2rem] p-6 sm:p-10">
          <SectionHeading
            eyebrow="Contact"
            title="Open to professional opportunities and collaboration."
            description="Actively seeking professional opportunities as a Junior Software Engineer or Web Developer. Reach out for career opportunities, technical discussions, or collaborations."
            align="center"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Reveal key={link.label} delay={index * 0.04}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring group flex min-h-28 items-center justify-between gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50/30 hover:shadow-md"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-indigo-50 text-2xl text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white shadow-sm">
                        <Icon />
                      </span>
                      <div className="min-w-0">
                        <p className="font-black text-slate-900">{link.label}</p>
                        <p className="mt-1 truncate text-sm text-slate-600">{link.value}</p>
                      </div>
                    </div>
                    <HiArrowRight className="shrink-0 text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-indigo-600" />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
