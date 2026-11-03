import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 border-t border-stone-200/60 bg-[#faf8f5]">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Professional Background"
          title="Building clean, reliable software backed by structured system analysis."
          description="A strong foundation in computer science and information systems, combined with hands-on enterprise internship experience and industry-standard BNSP certification."
        />
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] items-start">
          <Reveal className="rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-9 shadow-sm">
            <h3 className="text-xl font-black text-stone-900 mb-4">Summary & Engineering Philosophy</h3>
            <p className="text-base sm:text-lg leading-relaxed sm:leading-8 text-stone-600">
              Information Systems graduate specializing in Full-Stack Web Development, with hands-on experience building scalable web applications and enterprise dashboards. Skilled in developing responsive front-end interfaces (React.js, Next.js) and architecting robust back-end systems (Express.js, NestJS, RESTful APIs).
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed sm:leading-8 text-stone-600">
              Adept at collaborating within cross-functional Agile teams to translate complex business requirements into clean, efficient, and reliable software. Actively seeking opportunities as a Junior Software Engineer or Web Developer to deliver impactful digital products and drive technical innovation.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="grid gap-4">
            {[
              ["Education", 'S1 Sistem Informasi, UPNVJ', "GPA: 3.83 / 4.00 (Sep 2022 - Sep 2026)"],
              ["Certification", "System Analyst - BNSP", "Badan Nasional Sertifikasi Profesi (Feb 2026)"],
              ["Location", "Jakarta Pusat, Indonesia", "Open for on-site & hybrid opportunities"],
              ["Target Roles", "Junior Software Engineer", "Web Developer · Full-Stack Developer"],
            ].map(([label, title, subtitle]) => (
              <div key={label} className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-2xs transition hover:border-amber-400 hover:shadow-md">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  {label}
                </p>
                <p className="mt-1.5 text-base sm:text-lg font-bold text-stone-900">{title}</p>
                <p className="mt-0.5 text-xs text-stone-500 font-medium">{subtitle}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
