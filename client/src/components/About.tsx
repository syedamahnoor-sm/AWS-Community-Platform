import {
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  CodeXml,
  ShieldCheck,
  Users,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const aboutFeatures = [
  {
    title: "Cloud Learning",
    description:
      "Explore AWS fundamentals, cloud architecture, and modern technologies through practical sessions.",
    icon: Cloud,
  },
  {
    title: "Hands-on Projects",
    description:
      "Work on real-world AWS projects that turn theoretical knowledge into practical experience.",
    icon: CodeXml,
  },
  {
    title: "AI & Security",
    description:
      "Discover how cloud technologies support artificial intelligence, cybersecurity, and innovation.",
    icon: BrainCircuit,
  },
  {
    title: "Community",
    description:
      "Connect with fellow students, mentors, speakers, and professionals who share an interest in cloud computing.",
    icon: Users,
  },
  {
    title: "Business Impact",
    description:
      "Understand how cloud technologies accelerate businesses, analytics, and digital transformation.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Industry Skills",
    description:
      "Develop technical and business expertise that prepares you for in-demand cloud career opportunities.",
    icon: ShieldCheck,
  },
];

const About = () => {
  return (
    <SectionWrapper>
    <section
      id="about"
      className="relative overflow-hidden border-t border-zinc-900 bg-black px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">
            About the Community
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
            Empowering the Next Generation of{" "}
            <span className="text-green-400">Cloud Builders</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            AWS Student Builder Group at Lahore Garrison University is a
            student-led and student-driven community focused on helping
            students explore cloud computing through AWS technologies.
          </p>

          <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-lg">
            Through workshops, technical sessions, community events, and
            hands-on projects, we help students build practical skills in
            cloud computing, artificial intelligence, security, business
            analytics, and digital transformation.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aboutFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-green-500/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10 text-green-400 transition group-hover:bg-green-500 group-hover:text-black">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 font-heading text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-green-500/20 bg-green-500/5 px-8 py-10 text-center sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Our Mission
          </p>

          <h3 className="mx-auto mt-4 max-w-4xl font-heading text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
            To create an inclusive learning community where students can
            explore AWS technologies, develop practical skills, and prepare
            for careers in cloud computing.
          </h3>
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
};

export default About;