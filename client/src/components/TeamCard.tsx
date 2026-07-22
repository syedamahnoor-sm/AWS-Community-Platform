import { FaGithub, FaLinkedin } from "react-icons/fa6";
import type { TeamMember } from "../types/team";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-green-500/50">
      <div className="aspect-square overflow-hidden bg-zinc-900">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>

      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold text-white">
          {member.name}
        </h3>

        <p className="mt-1 text-sm text-green-400">{member.role}</p>

        <div className="mt-5 flex items-center gap-3">
          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} LinkedIn`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-green-500 hover:text-green-400"
            >
              <FaLinkedin size={18} />
            </a>
          )}

          {member.githubUrl && (
            <a
              href={member.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} GitHub`}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-green-500 hover:text-green-400"
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default TeamCard;