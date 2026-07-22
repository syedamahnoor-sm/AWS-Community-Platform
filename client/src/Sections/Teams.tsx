import TeamCard from "../components/TeamCard";
import { teamMembers } from "../data/team";

const Team = () => {
  return (
    <section
      id="team"
      className="relative overflow-hidden border-t border-white/5 px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[48px_48px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
            Meet the Team
          </span>

          <h2 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
            The people building the community.
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Meet the team working behind the scenes to create meaningful cloud
            learning, networking, and community experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;