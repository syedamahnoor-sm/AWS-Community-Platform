import {
  Award,
  BookOpen,
  CloudCog,
  Mic2,
  Network,
  UsersRound,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-16 md:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-130 w-130 -translate-x-1/2 rounded-full bg-green-500/5 blur-[150px]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[48px_48px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left content */}
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex items-center rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
            AWS Student Builder Group LGU
          </span>

          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build. Learn.
            <span className="block bg-linear-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              Connect.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Empowering students and cloud enthusiasts through hands-on AWS
            workshops, community events, technical sessions, and meaningful
            connections.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#events"
              className="inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition duration-300 hover:bg-green-600 hover:scale-105"
            >
              Explore Events
            </a>

            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/50 px-6 py-3 font-semibold text-white transition duration-300 hover:border-green-400 hover:bg-zinc-900 hover:scale-105"
            >
              Join the Community
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden min-h-130 items-center justify-center lg:flex">
          {/* Soft background glow */}
          <div className="absolute h-90 w-90 rounded-full bg-green-500/5 blur-[110px]" />

          <div className="relative h-125 w-full max-w-142.5">
            {/* Network lines and moving particles */}
            <svg
              viewBox="0 0 570 500"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="networkGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#15803d" stopOpacity="0.22" />
                  <stop offset="50%" stopColor="#22c55e" stopOpacity="0.58" />
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0.22" />
                </linearGradient>

                <filter id="particleGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Lines from the centre to each node */}
              <g
                fill="none"
                stroke="url(#networkGradient)"
                strokeWidth="1.25"
                strokeLinecap="round"
              >
                <path id="path-workshops" d="M285 250 L150 100" />
                <path id="path-speakers" d="M285 250 L420 95" />
                <path id="path-certifications" d="M285 250 L500 245" />
                <path id="path-networking" d="M285 250 L415 405" />
                <path id="path-learning" d="M285 250 L155 410" />
                <path id="path-community" d="M285 250 L70 250" />

                {/* Subtle outer connections */}
                <path d="M150 100 L420 95" opacity="0.3" />
                <path d="M420 95 L500 245" opacity="0.3" />
                <path d="M500 245 L415 405" opacity="0.3" />
                <path d="M415 405 L155 410" opacity="0.3" />
                <path d="M155 410 L70 250" opacity="0.3" />
                <path d="M70 250 L150 100" opacity="0.3" />
              </g>

              {/* Moving data particles */}
              <g filter="url(#particleGlow)">
                <circle r="3.5" fill="#4ade80">
                  <animateMotion
                    dur="5s"
                    repeatCount="indefinite"
                    path="M285 250 L150 100"
                  />
                </circle>

                <circle r="3" fill="#22c55e">
                  <animateMotion
                    dur="6s"
                    begin="1.5s"
                    repeatCount="indefinite"
                    path="M285 250 L500 245"
                  />
                </circle>

                <circle r="3.5" fill="#16a34a">
                  <animateMotion
                    dur="5.5s"
                    begin="0.75s"
                    repeatCount="indefinite"
                    path="M285 250 L415 405"
                  />
                </circle>
              </g>

              {/* Subtle centre rings */}
              <circle
                cx="285"
                cy="250"
                r="104"
                fill="none"
               stroke="#22c55e"
                strokeWidth="1"
                strokeOpacity="0.11"
              />

              <circle
                cx="285"
                cy="250"
                r="124"
                fill="none"
                stroke="#22c55e"
                strokeWidth="1"
                strokeOpacity="0.07"
              />
            </svg>

            {/* Centre AWS node */}
            <div className="aws-center-pulse absolute left-1/2 top-1/2 z-10 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-green-500/40 bg-zinc-950/90 shadow-[0_0_45px_rgba(34,197,94,0.14)] backdrop-blur-xl">
              <CloudCog
                size={28}
                strokeWidth={1.7}
                className="mb-2 text-green-300"
              />

              <span className="font-heading text-4xl font-bold tracking-tight text-white">
                AWS
              </span>

              <span className="mt-1 text-xs font-semibold uppercase tracking-[0.32em] text-green-300">
                SBG LGU
              </span>
            </div>

            {/* Workshops */}
            <div className="network-node absolute left-[18%] top-[10%]">
              <BookOpen className="network-icon" />
              <span>Workshops</span>
            </div>

            {/* Speakers */}
            <div className="network-node absolute right-[17%] top-[9%]">
              <Mic2 className="network-icon" />
              <span>Speakers</span>
            </div>

            {/* Certifications */}
            <div className="network-node absolute right-[1%] top-[40%]">
              <Award className="network-icon" />
              <span>Certifications</span>
            </div>

            {/* Networking */}
            <div className="network-node absolute bottom-[6%] right-[18%]">
              <Network className="network-icon" />
              <span>Networking</span>
            </div>

            {/* Learning */}
            <div className="network-node absolute bottom-[5%] left-[19%]">
              <CloudCog className="network-icon" />
              <span>Cloud Learning</span>
            </div>

            {/* Community */}
            <div className="network-node absolute left-[-1%] top-[41%]">
              <UsersRound className="network-icon" />
              <span>Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
