import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useState, type ComponentProps } from "react";

interface FeedbackFormData {
  name: string;
  role: string;
  event: string;
  feedback: string;
  consent: boolean;
}

const initialFormData: FeedbackFormData = {
  name: "",
  role: "",
  event: "",
  feedback: "",
  consent: false,
};

type FormSubmitHandler = NonNullable<ComponentProps<"form">["onSubmit"]>;

const FeedbackForm = () => {
  const [formData, setFormData] = useState<FeedbackFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const handleSubmit: FormSubmitHandler = async (event) => {
    event.preventDefault();

    setStatusMessage("");
    setHasSubmitted(false);

    if (!formData.consent) {
      setStatusMessage(
        "Please provide consent before submitting your feedback.",
      );
      return;
    }
    try {
      setIsSubmitting(true);

      const response = await fetch(`${apiUrl}/testimonials`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit feedback.");
      }

      setHasSubmitted(true);
      setStatusMessage(
        "Thank you! Your feedback has been submitted for review.",
      );
      setFormData(initialFormData);
    } catch {
      setStatusMessage(
        "Something went wrong while submitting your feedback. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        {/* Form introduction */}
        <div className="border-b border-zinc-800 bg-zinc-900/60 p-7 sm:p-8 lg:border-b-0 lg:border-r">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-green-500">
            Share Your Experience
          </span>

          <h3 className="mt-4 font-heading text-3xl font-bold text-white">
            Help us improve future community experiences.
          </h3>

          <p className="mt-4 leading-7 text-zinc-400">
            Attended one of our events or workshops? Share what you learned and
            how the experience helped you.
          </p>

          <div className="mt-7 rounded-xl border border-green-500/20 bg-green-500/5 p-4">
            <p className="text-sm leading-6 text-zinc-300">
              Submitted feedback is reviewed by the community team before being
              displayed publicly.
            </p>
          </div>
        </div>

        {/* Feedback form */}
        <form onSubmit={handleSubmit} className="p-7 sm:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="feedback-name"
                className="text-sm font-medium text-zinc-300"
              >
                Full name
              </label>

              <input
                id="feedback-name"
                type="text"
                value={formData.name}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                required
                placeholder="Enter your name"
                className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="feedback-role"
                className="text-sm font-medium text-zinc-300"
              >
                Role or university
              </label>

              <input
                id="feedback-role"
                type="text"
                value={formData.role}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    role: event.target.value,
                  }))
                }
                required
                placeholder="e.g. Software Engineering Student"
                className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-500"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="feedback-event"
              className="text-sm font-medium text-zinc-300"
            >
              Event attended
            </label>

            <input
              id="feedback-event"
              type="text"
              value={formData.event}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  event: event.target.value,
                }))
              }
              required
              placeholder="e.g. AWS Cloud Quest Level 3"
              className="mt-2 w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-500"
            />
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between gap-4">
              <label
                htmlFor="feedback-message"
                className="text-sm font-medium text-zinc-300"
              >
                Your feedback
              </label>

              <span className="text-xs text-zinc-600">
                {formData.feedback.length}/500
              </span>
            </div>

            <textarea
              id="feedback-message"
              value={formData.feedback}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  feedback: event.target.value,
                }))
              }
              required
              maxLength={500}
              rows={5}
              placeholder="Tell us about your experience..."
              className="mt-2 w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-green-500"
            />
          </div>

          <label className="mt-5 flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  consent: event.target.checked,
                }))
              }
              className="mt-1 h-4 w-4 accent-green-500"
            />

            <span className="text-sm leading-6 text-zinc-400">
              I allow AWS Student Builder Group LGU to review and display this
              feedback publicly with my name and role.
            </span>
          </label>

          {statusMessage && (
            <div
              role="status"
              aria-live="polite"
              className={`mt-5 flex items-start gap-3 rounded-lg border p-4 text-sm ${
                hasSubmitted
                  ? "border-green-500/30 bg-green-500/5 text-green-300"
                  : "border-zinc-700 bg-zinc-900 text-zinc-300"
              }`}
            >
              {hasSubmitted && (
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-green-500"
                />
              )}

              <span>{statusMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle size={18} className="animate-spin" />
                Submitting
              </>
            ) : (
              <>
                Submit Feedback
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
