function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 bg-slate-50">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <p>&copy; {new Date().getFullYear()} Septian Sugiarta Saputra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
