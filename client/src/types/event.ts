export type EventStatus = "upcoming" | "previous";

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  category: string;
  image: string;
  status: EventStatus;
  registrationUrl?: string;
  highlightsUrl?: string;
}