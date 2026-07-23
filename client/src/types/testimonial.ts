export type TestimonialStatus = "pending" | "approved" | "rejected";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  event: string;
  feedback: string;
  image?: string;
  status: TestimonialStatus;
  createdAt: string;
  updatedAt?: string;
}