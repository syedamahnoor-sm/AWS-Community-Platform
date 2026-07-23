import { ArrowUp, Mail, MapPin } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaMeetup,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#join" },
];

const communityLinks = [
  {
    label: "Join the Community",
    href: "#join",
  },
  {
    label: "Events",
    href: "#events",
  },
  {
    label: "Share Feedback",
    href: "#testimonials",
  },
  {
    label: "Meetup Community",
    href: "https://www.meetup.com/aws-sbg-at-lahore-garrison-university/",
    external: true,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black px-6">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[48px_48px]" />

      {/* Soft green glow */}
      <div className="pointer-events-none absolute -bottom-55 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.8fr_1fr] lg:py-20">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-4"
              aria-label="AWS Student Builder Group LGU home"
            >
              <img
                src="/logo-icon.png"
                alt=""
                className="h-12 w-12 object-contain"
              />

              <div>
                <p className="font-heading text-xl font-bold text-white">
                  AWS <span className="text-green-500">SBG LGU</span>
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Lahore Garrison University
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-400">
              A growing community of students, developers, and cloud
              enthusiasts learning, building, and connecting through AWS
              workshops, events, and technical experiences.
            </p>

            <div className="mt-6 flex items-start gap-3 text-sm text-zinc-500">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-green-500"
              />

              <span>
                Lahore Garrison University
                <br />
                Lahore, Pakistan
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="font-heading text-base font-semibold text-white">
              Quick Links
            </h2>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition hover:text-green-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h2 className="font-heading text-base font-semibold text-white">
              Community
            </h2>

            <ul className="mt-5 space-y-3">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="text-sm text-zinc-500 transition hover:text-green-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-heading text-base font-semibold text-white">
              Connect With Us
            </h2>

            <a
              href="mailto:awssbglgu@gmail.com"
              className="mt-5 flex items-center gap-3 text-sm text-zinc-500 transition hover:text-green-400"
            >
              <Mail size={18} />
              awssbglgu@gmail.com
            </a>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/aws-sbg-lgu/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 transition hover:-translate-y-1 hover:border-green-500 hover:text-green-400"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.meetup.com/aws-sbg-at-lahore-garrison-university/"
                target="_blank"
                rel="noreferrer"
                aria-label="Meetup"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 transition hover:-translate-y-1 hover:border-green-500 hover:text-green-400"
              >
                <FaMeetup size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-zinc-900 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} AWS Student Builder Group LGU. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <p className="text-xs text-zinc-700">
              Built for the cloud community.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-500 transition hover:border-green-500 hover:text-green-400"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;