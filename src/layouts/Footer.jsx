import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-8 bg-white text-slate-600 text-xs sm:text-sm">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row text-center sm:text-left">
        <div>
          <p className="font-bold text-slate-900">Septian Sugiarta Saputra</p>
          <p className="text-xs text-slate-400 mt-0.5">
            Junior Software Engineer · Information Systems Graduate (UPNVJ)
          </p>
        </div>

        <div className="flex items-center gap-4 text-base text-slate-400">
          <a
            href="mailto:septiansugiarta3@gmail.com"
            aria-label="Email"
            className="hover:text-indigo-600 transition"
          >
            <HiOutlineMail />
          </a>
          <a
            href="https://wa.me/6281574364200"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hover:text-indigo-600 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/septiansugiartasaputra/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/septian-sugiarta"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-600 transition"
          >
            <FaGithub />
          </a>
        </div>

        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
