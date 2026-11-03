function Button({ href, children, variant = "primary", className = "" }) {
  const variants = {
    primary:
      "border-stone-900 bg-stone-900 text-stone-50 shadow-md shadow-stone-900/15 hover:-translate-y-0.5 hover:bg-stone-800",
    secondary:
      "border-stone-300/90 bg-white text-stone-800 hover:-translate-y-0.5 hover:border-amber-600 hover:text-amber-700 hover:bg-stone-50/70",
  };

  return (
    <a
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-bold transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default Button;
