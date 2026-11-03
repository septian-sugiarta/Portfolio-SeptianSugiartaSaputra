import { HiArrowRight } from "react-icons/hi";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { contactLinks } from "../data/contact.js";

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-stone-200/60 bg-[#fdfbf7]">
      <div className="section-shell">
        <div className="overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-stone-200/90 bg-white p-6 sm:p-12 shadow-sm">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's connect for opportunities & engineering discussions."
            description="Actively seeking opportunities as a Junior Software Engineer or Web Developer to deliver impactful digital products and drive technical innovation. Reach out directly through any of the channels below."
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Reveal key={link.label} delay={index * 0.04}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring group flex min-h-24 items-center justify-between gap-4 rounded-2xl border border-stone-200/80 bg-stone-50/60 p-4 sm:p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-white hover:shadow-lg hover:shadow-amber-500/5"
                  >
                    <div className="flex min-w-0 items-center gap-3.5">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-amber-50 text-xl text-amber-700 transition group-hover:bg-amber-500 group-hover:text-stone-950 shadow-2xs">
                        <Icon />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-stone-400">{link.label}</p>
                        <p className="mt-0.5 truncate text-sm font-bold text-stone-900 group-hover:text-amber-700 transition">{link.value}</p>
                      </div>
                    </div>
                    <HiArrowRight className="shrink-0 text-lg text-stone-400 transition group-hover:translate-x-1 group-hover:text-amber-600" />
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
