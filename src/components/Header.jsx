import { useState } from "react";
import NavbarSide from "./NavbarSide";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Tryhackme", href: "#tryhackme" },
    { name: "CTF-writeups", href: "#ctf" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 bg-[#111827]/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-5">
        <nav className="flex items-center justify-between py-4">
          <a href="#home">
            <div className="brand flex items-center gap-2">
              <img src="/favicon.svg" alt="" className="w-9 h-9 rounded-xl" />
              <strong className="text-white">Ajay</strong>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="links flex gap-6 text-gray-400">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-400 hover:text-white transition-colors"
                  whileHover="hover"
                  initial="initial"
                >
                  {link.name}
                  <motion.span
                    className="absolute -left-1 -bottom-1 block h-[2px] w-[115%] bg-cyan-600"
                    variants={{
                      hover: { scaleX: 1 },
                      initial: { scaleX: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 40 }}
                    style={{ originX: -0.1 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              {isOpen ? (
                <></>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown */}
      </div>
      {isOpen && <NavbarSide links={links} setIsOpen={setIsOpen} />}
    </header>
  );
}
