export interface Testimonial {
  id: number;
  name: string;
  role: string;
  event: string;
  feedback: string;
  image?: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}