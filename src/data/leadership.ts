import { LeadershipRole } from "@/types";

export const leadershipRoles: LeadershipRole[] = [
  {
    title: "Technical Team Lead",
    organization: "TEDxSRKR",
    period: "2024 – Present",
    badge: "Leadership & DevOps",
    description: "Lead the technical development team for TEDxSRKR events and online platforms.",
    responsibilities: [
      "Lead the development team for the TEDxSRKR website: code reviews, architecture choices, and sprint planning.",
      "Managed Vercel deployment pipelines ensuring zero-downtime event ticketing and speaker schedule delivery.",
      "Coordinated audio-visual and live-streaming technical infrastructure for large-audience live event days."
    ]
  },
  {
    title: "Body Member",
    organization: "Event Organizing Cell (EOC), SRKR",
    period: "2024 – Present",
    badge: "Operations & Scale",
    description: "Participate in planning and orchestrating high-attendance institutional conferences and student forums.",
    responsibilities: [
      "Plans and runs major institutional events with 500+ attendees.",
      "Coordinates stage logistics, event communication channels, and technology setups.",
      "Facilitates smooth on-ground management during university technical symposiums."
    ]
  },
  {
    title: "Guest Mentor",
    organization: "BIZ VISION DEMO DAY 2026 (IIC 8.0)",
    period: "May 2026",
    badge: "Mentorship",
    description: "Invited speaker and technical mentor for student innovation teams.",
    responsibilities: [
      "Delivered a mentoring session on Cost Estimation & Budgeting for early-stage software and hardware products.",
      "Guided collegiate student startup teams on calculating cloud infrastructure costs, API token budgeting, and architecture sizing."
    ]
  }
];
