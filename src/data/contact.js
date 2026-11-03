import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

export const contactLinks = [
  {
    label: "Email",
    value: "septiansugiarta3@gmail.com",
    href: "mailto:septiansugiarta3@gmail.com",
    icon: HiOutlineMail,
  },
  {
    label: "WhatsApp / Phone",
    value: "+62 815-7436-4200",
    href: "https://wa.me/6281574364200",
    icon: FaWhatsapp,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/septiansugiartasaputra",
    href: "https://www.linkedin.com/in/septiansugiartasaputra/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/septian-sugiarta",
    href: "https://github.com/septian-sugiarta",
    icon: FaGithub,
  },
  {
    label: "Location",
    value: "Jakarta Pusat, Indonesia",
    href: "https://maps.google.com/?q=Jakarta+Pusat",
    icon: HiOutlineLocationMarker,
  },
];
