import Reveal from "./Reveal.jsx";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCentered = align === "center";

  return (
    <Reveal
      className={`mb-10 sm:mb-12 max-w-3xl ${
        isCentered ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-2 text-xs font-black uppercase tracking-wider text-amber-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-stone-900">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-stone-600">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export default SectionHeading;
