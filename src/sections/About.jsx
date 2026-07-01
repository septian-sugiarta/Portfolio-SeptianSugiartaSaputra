import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About me"
          title="Building practical digital products through code and design."
          description="My academic background and project experience have shaped the way I approach interface design, system development, and collaborative work."
        />
        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-lg leading-9 text-slate-600">
              I am an eighth-semester Information Systems student at Universitas Pembangunan Nasional “Veteran” Jakarta with a strong interest in website development and UI/UX design. These fields allow me to combine structured problem-solving with a careful understanding of how people use digital products.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Over the past year, I have worked as a Front-End Developer through student organization activities, personal projects, and academic assignments. Each experience has strengthened my technical foundation, design judgment, and ability to work responsibly with others. I continue to seek professional and organizational opportunities where I can learn, contribute, and develop my capabilities further.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="grid gap-5">
            {[
              ["Education", 'Information Systems, UPN "Veteran" Jakarta'],
              ["Previous School", "SMA Negeri 1 Jakarta"],
              ["Current Focus", "Web Development & UI/UX Design"],
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




