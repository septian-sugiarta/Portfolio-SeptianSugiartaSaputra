import Reveal from "./Reveal.jsx";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCentered = align === "center";

  return (
    <Reveal
      className={`mx-auto mb-10 max-w-3xl ${isCentered ? "text-center" : "text-left"}`}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-indigo-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}

export default SectionHeading;
