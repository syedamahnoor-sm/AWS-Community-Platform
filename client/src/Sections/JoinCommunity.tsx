import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  UsersRound,
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import SectionWrapper from "../components/SectionWrapper";

const communityBenefits = [
  "Hands-on AWS workshops",
  "Community events and meetups",
  "Networking with cloud enthusiasts",
  "Industry-led technical sessions",
];

const JoinCommunity = () => {
  return (
    <SectionWrapper>
    <section
      id="join"
      className="relative overflow-hidden border-t border-white/5 px-6 py-24"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[48px_48px]" />

      {/* Subtle green glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/90">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Main CTA */}
            <div className="p-8 sm:p-10 lg:p-14">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
                Join the Community
              </span>

              <h2 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
                Ready to start your cloud journey?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                Become part of AWS Student Builder Group LGU and connect with
                students, developers, cloud enthusiasts, and industry
                professionals through practical learning experiences.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {communityBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-green-500"
                    />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.meetup.com/aws-sbg-at-lahore-garrison-university/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
                >
                  Join on Meetup
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Community status panel */}
            <aside className="border-t border-zinc-800 bg-black/40 p-8 sm:p-10 lg:border-l lg:border-t-0">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-zinc-500">Community Status</p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
                      <span className="font-heading font-semibold text-white">
                        Open for new members
                      </span>
                    </div>
                  </div>

                  <UsersRound size={28} className="text-green-500" />
                </div>

                <div className="mt-7 space-y-4 border-t border-zinc-800 pt-6">
                  <div className="flex items-start gap-3">
                    <CalendarDays
                      size={18}
                      className="mt-0.5 shrink-0 text-green-500"
                    />

                    <div>
                      <p className="font-medium text-white">
                        Community Activities
                      </p>

                      <p className="mt-1 text-sm leading-6 text-zinc-500">
                        Workshops, meetups, technical sessions, and collaborative
                        learning opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact links */}
              <div id="contact" className="mt-6">
                <p className="text-sm font-medium text-zinc-400">
                  Connect with the community
                </p>

                <div className="mt-4 grid gap-3">
                  <a
                    href="mailto:awssbglgu@gmail.com"
                    className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 transition hover:border-green-500/50 hover:text-green-400"
                  >
                    <Mail size={18} />
                    awssbglgu@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/company/aws-sbg-lgu/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 transition hover:border-green-500/50 hover:text-green-400"
                  >
                    <FaLinkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
};

export default JoinCommunity;