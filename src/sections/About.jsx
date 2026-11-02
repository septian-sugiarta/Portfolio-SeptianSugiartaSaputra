import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About me"
          title="Building robust, practical digital products through clean code and scalable architecture."
          description="My academic background, BNSP System Analyst certification, and full-stack internship experience shape how I design and build modern software solutions."
        />
        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-lg leading-9 text-slate-600">
              I am an Information Systems graduate from Universitas Pembangunan Nasional “Veteran” Jakarta (GPA: 3.83/4.00) and a BNSP-Certified System Analyst with internship experience developing full-stack web applications. Skilled in React.js, Next.js, Express.js, and NestJS, with hands-on experience in building responsive user interfaces, designing RESTful APIs, and implementing relational databases.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Having contributed to enterprise platforms at PT Garuda Maintenance Facility AeroAsia, PT Sinergi Informatika Semen Indonesia, and KSM Android UPNVJ, I have proven experience working within cross-functional Agile teams to translate complex business requirements into clean, scalable software. I am actively seeking professional opportunities as a Junior Software Engineer or Web Developer to deliver robust and reliable web applications.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="grid gap-5">
            {[
              ["Education", 'Information Systems, UPNVJ (GPA: 3.83)'],
              ["Certification", "BNSP-Certified System Analyst"],
              ["Target Roles", "Junior Software Engineer / Web Developer"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200 hover:shadow-md">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
                  {label}
                </p>
                <p className="mt-3 text-xl font-bold leading-7 text-slate-900">{value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
