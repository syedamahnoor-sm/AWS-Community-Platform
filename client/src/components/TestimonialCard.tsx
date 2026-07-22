import { Quote } from "lucide-react";
import type { Testimonial } from "../types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/50">
      <Quote
        size={34}
        strokeWidth={1.5}
        className="text-green-500/70"
        aria-hidden="true"
      />

      <blockquote className="mt-6 flex-1 text-base leading-7 text-zinc-300">
        “{testimonial.feedback}”
      </blockquote>

      <div className="mt-8 border-t border-zinc-800 pt-5">
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-12 w-12 rounded-full border border-zinc-700 object-cover"
          />

          <div>
            <h3 className="font-heading font-semibold text-white">
              {testimonial.name}
            </h3>

            <p className="mt-0.5 text-sm text-zinc-500">
              {testimonial.role}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm font-medium text-green-400">
          {testimonial.event}
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;