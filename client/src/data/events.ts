import type { Event } from "../types/event";

export const upcomingEvents: Event[] = [
  //   {
  //     id: 2,
  //     title: "Build on AWS",
  //     description:
  //       "A hands-on session designed to help participants understand how modern applications are built and deployed using AWS.",
  //     date: "Coming Soon",
  //     time: "To Be Announced",
  //     location: "Lahore",
  //     category: "Hands-on Lab",
  //     image: "/events/build-on-aws.jpg",
  //     status: "upcoming",
  //     registrationUrl: "https://www.meetup.com/",
  //   },
  //   {
  //     id: 3,
  //     title: "AWS Community Meetup",
  //     description:
  //       "Connect with cloud enthusiasts, students, and industry professionals while learning from real AWS experiences.",
  //     date: "Coming Soon",
  //     time: "To Be Announced",
  //     location: "Lahore",
  //     category: "Community",
  //     image: "/events/aws-community-meetup.jpg",
  //     status: "upcoming",
  //     registrationUrl: "https://www.meetup.com/",
  //   },
];

export const previousEvents: Event[] = [
  {
    id: 2,
    title: "AWS 101 : Your First Step into Cloud",
    description:
      "A beginner-friendly AWS session designed to introduce cloud computing, explore career opportunities, and help students publish their projects online through a guided AWS Amplify deployment.",
    date: "21 June, 2026",
    time: "5:00 PM – 7:00 PM PKT",
    location: "Online via Google Meet",
    category: "Cloud Workshop",
    image: "/aws-101.png",
    status: "previous",
  },
  {
    id: 3,
    title: "Cloud Quest LvL3:The Definition.",
    description:
      "A hands-on cloud engineering event that transformed participants into live testers, demonstrating how AWS Auto Scaling and Load Balancing maintain application availability under high traffic conditions.",
    date: "11 July, 2026",
    time: "1:00 PM – 6:00 PM PKT",
    location: "Systems Ltd.",
    category: "Cloud Challenge",
    image: "/Cloud-Quest-Lvl3.png",
    status: "previous",
  },
];
