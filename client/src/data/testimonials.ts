import type { Testimonial } from "../types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Community Member",
    role: "Cloud Enthusiast",
    event: "AWS Cloud 101",
    feedback:
      "The session provided a clear introduction to AWS and helped me better understand the opportunities available in cloud computing.",
    image: "no_pfp.jpg",
    status: "approved",
    createdAt: "2026-07-10",
  },
  {
    id: "2",
    name: "Community Member",
    role: "Software Engineering Student",
    event: "AWS Cloud Quest Level 3",
    feedback:
      "The hands-on activities made the learning experience engaging and helped me understand how cloud services work in practical scenarios.",
    image: "no_pfp.jpg",
    status: "approved",
    createdAt: "2026-07-15",
  },
  {
    id: "3",
    name: "Community Member",
    role: "Aspiring Cloud Engineer",
    event: "AWS Cloud Quest Level 3",
    feedback:
      "It was a valuable opportunity to learn from industry professionals, connect with other students, and explore AWS technologies.",
    image: "no_pfp.jpg",
    status: "approved",
    createdAt: "2026-07-18",
  },
];
