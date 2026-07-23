import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
   { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#join" },
];

const MEETUP_URL = "https://www.meetup.com/aws-sbg-at-lahore-garrison-university/"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo-icon.png"
            alt="AWS Student Builder Group LGU"
            className="h-14 w-14 object-contain"
          />

          <div className="leading-tight">
            <h1 className="font-heading text-lg font-bold text-white">
              AWS <span className="text-green-400">SBG LGU</span>
            </h1>

            <p className="text-[11px] text-zinc-500">
              Lahore Garrison University
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-all duration-300 ease-out hover:text-green-300 hover:scale-115"
            >
              {link.label}
            </a>
          ))}

          <a
            href= {MEETUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-green-600 hover:scale-105"
          >
            Join Community
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="text-white transition hover:text-green-300 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/5 bg-zinc-950/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-zinc-300 transition hover:text-green-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#join"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex justify-center rounded-lg bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-600"
            >
              Join Community
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
