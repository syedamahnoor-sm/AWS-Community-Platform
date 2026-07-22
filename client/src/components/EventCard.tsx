import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Images,
  MapPin,
} from "lucide-react";
import type { Event } from "../types/event";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const isUpcoming = event.status === "upcoming";

  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-green-500/50">
      <div className="relative h-56 overflow-hidden bg-zinc-900">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full border border-green-500/30 bg-black/75 px-3 py-1 text-xs font-semibold text-green-400 backdrop-blur-md">
          {event.category}
        </span>

        {!isUpcoming && (
          <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/75 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md">
            Previous Event
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-heading text-2xl font-semibold text-white">
          {event.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-zinc-400">
          {event.description}
        </p>

        <div className="mt-6 space-y-3 text-sm text-zinc-400">
          <div className="flex items-center gap-3">
            <CalendarDays size={17} className="text-green-500" />
            <span>{event.date}</span>
          </div>

          {event.time && (
            <div className="flex items-center gap-3">
              <Clock size={17} className="text-green-500" />
              <span>{event.time}</span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <MapPin size={17} className="text-green-500" />
            <span>{event.location}</span>
          </div>
        </div>

        {isUpcoming ? (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400"
          >
            Join Event
            <ArrowUpRight size={18} />
          </a>
        ) : (
          <a
            href={event.highlightsUrl}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-3 font-semibold text-white transition hover:border-green-500 hover:text-green-400"
          >
            View Highlights
            <Images size={18} />
          </a>
        )}
      </div>
    </article>
  );
};

export default EventCard;