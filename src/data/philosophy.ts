import { PhilosophyPillar } from "@/types";

export const philosophyPillars: PhilosophyPillar[] = [
  {
    number: "01",
    title: "Intelligence",
    tagline: "Purposeful AI, Grounded in Real Problems",
    description:
      "Artificial intelligence is only as valuable as the real-world friction it eliminates. Rather than chasing superficial novelty, I design AI systems that automate mission-critical bottlenecks, respect domain constraints, and maintain deterministic reliability.",
    principles: [
      "Target high-friction domains (healthcare, biometrics, security)",
      "Strict grounding against source evidence to eliminate hallucinations",
      "Confidence evaluators with human-in-the-loop triaging",
      "Pragmatic model selection (combining fast inference with deep reasoning)"
    ],
    icon: "Brain"
  },
  {
    number: "02",
    title: "Security",
    tagline: "Security Designed in From Day Zero",
    description:
      "Security is not a final checklist or an afterthought; it is an architectural foundation. From zero-trust storage protocols and end-to-end encryption to granular RBAC and cryptographic signatures, software must be built to withstand adversarial reality.",
    principles: [
      "Zero-trust data partitioning and client-side encryption (Ed25519, AES-256)",
      "Tamper-evident, immutable audit logging for all sensitive state transitions",
      "Out-of-distribution detection to handle unknown attack vectors safely",
      "Defense-in-depth across API gateways, service meshes, and storage layers"
    ],
    icon: "Shield"
  },
  {
    number: "03",
    title: "Scalability",
    tagline: "Modular, Resilient & Decoupled Systems",
    description:
      "Scalability is achieved through clean separation of concerns and fault isolation. Decoupling services into independent, loosely coupled microservices allows systems to absorb load spikes, isolate partial failures, and evolve without disruptive rewrites.",
    principles: [
      "Domain-driven microservices with independent deployment lifecycles",
      "Stateless API design backed by polyglot persistence models",
      "Graceful degradation when upstream services or network peers degrade",
      "Erasure coding and distributed topology to prevent single points of failure"
    ],
    icon: "Boxes"
  },
  {
    number: "04",
    title: "Explainability",
    tagline: "Transparent, Accountable & Inspectable Models",
    description:
      "In critical domains like clinical healthcare and biometric authentication, black-box decisions are unacceptable. Deep learning systems must be inspectable, offering visual heatmaps, feature attribution, and calibrated uncertainty metrics.",
    principles: [
      "Multi-perspective attribution via Grad-CAM++, Integrated Gradients, and SHAP",
      "Calibrated uncertainty estimation (Monte Carlo Dropout, temperature scaling)",
      "Clear forensic explanations that non-technical practitioners can verify",
      "Compliance with international standards (such as ISO/IEC 30107-3)"
    ],
    icon: "Search"
  }
];
