import { useState } from "react";
import EventCard from "../components/EventCard";
import { previousEvents, upcomingEvents } from "../data/events";
import { CalendarDays } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

type EventTab = "upcoming" | "previous";

const Events = () => {
  const [activeTab, setActiveTab] = useState<EventTab>("upcoming");

  const displayedEvents =
    activeTab === "upcoming" ? upcomingEvents : previousEvents;

  const emptyState =
    activeTab === "upcoming"
      ? {
          title: "No Upcoming Events Yet",
          description:
            "We're planning our next community sessions. Stay connected and check back soon for exciting AWS workshops and meetups.",
        }
      : {
          title: "No Previous Events",
          description:
            "Our event archive will appear here once community events have been conducted.",
        };
  return (
    <SectionWrapper>
    <section
      id="events"
      className="relative overflow-hidden border-t border-white/5 px-6 py-24"
    >
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[48px_48px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
              Events
            </span>

            <h2 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
              Learn, build and grow with the community.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Discover upcoming opportunities to participate and explore the
              events that have shaped our growing cloud community.
            </p>
          </div>

          {/* Event tabs */}
          <div
            className="inline-flex w-fit rounded-xl border border-zinc-800 bg-zinc-950 p-1"
            role="tablist"
            aria-label="Event categories"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "upcoming"}
              onClick={() => setActiveTab("upcoming")}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                activeTab === "upcoming"
                  ? "bg-green-500 text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Upcoming
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "previous"}
              onClick={() => setActiveTab("previous")}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                activeTab === "previous"
                  ? "bg-green-500 text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Previous
            </button>
          </div>
        </div>

        <div
          key={activeTab}
          className="mt-14 animate-[event-fade_350ms_ease-out]"
        >
          {displayedEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/70 px-8 py-20 text-center">
              <CalendarDays
                size={42}
                className="mb-5 text-green-500 opacity-80"
              />

              <h3 className="font-heading text-2xl font-semibold text-white">
                 {emptyState.title}
              </h3>

              <p className="mt-3 max-w-md text-zinc-400 leading-7">
                {emptyState.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
};

export default Events;
