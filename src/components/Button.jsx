function Button({ href, children, variant = "primary", className = "" }) {
  const variants = {
    primary:
      "border-transparent bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 hover:-translate-y-0.5 hover:bg-indigo-700",
    secondary:
      "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50",
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
