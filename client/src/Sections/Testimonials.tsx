import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/testimonials";
import FeedbackForm from "../components/FeedbackForm";
import SectionWrapper from "../components/SectionWrapper";

const Testimonials = () => {
  return (
    <SectionWrapper>
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-white/5 px-6 py-24"
    >
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[48px_48px]" />

      {/* Very subtle decorative glow */}
      <div className="pointer-events-none absolute -right-45 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-green-500/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
            Community Feedback
          </span>

          <h2 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
            What our community members say.
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Hear from participants who have attended our workshops, technical
            sessions, and community events.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-14">
          <FeedbackForm />
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
};

export default Testimonials;
