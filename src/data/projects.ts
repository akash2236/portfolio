import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ai-prior-auth",
    slug: "ai-prior-auth",
    title: "AI Prior Authorization Assistant",
    subtitle: "Healthcare workflow automation converting FHIR R4 patient records into validated authorization requests in 30–60s.",
    category: "AI/ML",
    categoryTags: ["AI/ML", "Healthcare Automation", "LLM Agents", "FastAPI"],
    status: "COMPLETED",
    shortDescription:
      "End-to-end AI pipeline extracting patient EHR data via FHIR R4 to draft prior authorization forms with multi-step LLM validation, confidence scoring, and human-in-the-loop oversight.",
    description:
      "An intelligent healthcare administration pipeline engineered to accelerate prior authorization workflows. The system parses complex FHIR R4 clinical documents, invokes specialized LLM agents for clinical evidence synthesis and form population, evaluates decision confidence, and applies a strict threshold to route edge cases to human clinical reviewers.",
    problem:
      "Manual prior authorization in healthcare takes days or weeks, causing clinical treatment delays, massive administrative overhead, and frequent claim rejections due to missed clinical criteria or mismatched EHR documentation.",
    approach:
      "Architected a secure, HIPAA-aligned automated workflow integrating FastAPI micro-services, Groq and GPT-4 clinical extraction prompts, and an automated confidence evaluation engine. Every decision includes full audit logging and provenance tracing.",
    highlightMetric: "30-60s Turnaround",
    architecture: [
      {
        step: "01",
        title: "FHIR R4 Data Extraction",
        description: "Ingests structured clinical bundles, parses patient observations, diagnostic reports, and medical histories via standardized FHIR R4 protocols.",
        details: ["Extracts ICD-10, CPT, and RxNorm codes", "Normalizes patient demographic & insurance records", "Validates schema compliance"]
      },
      {
        step: "02",
        title: "LLM Draft Generation",
        description: "Executes specialized prompt pipelines via GPT-4 and Groq to synthesize medical necessity rationales and pre-fill insurer authorization forms.",
        details: ["Matches clinical documentation to policy criteria", "Generates justification summaries", "Highlights requisite diagnostic attachments"]
      },
      {
        step: "03",
        title: "Confidence Evaluation",
        description: "Evaluates LLM response coherence, clinical alignment, and factual grounding against source medical notes.",
        details: ["Calculates composite confidence scores", "Enforces strict validation rules", "Flags ambiguous or missing prerequisites"]
      },
      {
        step: "04",
        title: "Automated Routing Decision",
        description: "Applies a strict 80% confidence threshold. Submissions exceeding 80% proceed to automated drafting; lower-confidence results route to human staff review.",
        details: ["Automatic approval routing for high-confidence records", "Human-in-the-loop triaging for edge cases", "Staff review workbench with highlighted evidence"]
      },
      {
        step: "05",
        title: "Audit Trail & Secure Export",
        description: "Maintains an immutable audit log of all system decisions, generating HIPAA-compliant encrypted PDF packages and JSON payloads for electronic health record submission.",
        details: ["JWT-authenticated API access", "Comprehensive audit trails with timestamps and model versions", "Standardized PDF & JSON bundle exports"]
      }
    ],
    flowDiagram: [
      "FHIR R4 Data Extraction",
      "LLM Draft Generation",
      "Confidence Evaluation",
      "Automatic Approval / Human Review (80% Threshold)",
      "Audit Trail & Export"
    ],
    techStack: ["Python", "FastAPI", "GPT-4", "Groq", "FHIR R4", "JWT", "Pydantic", "Docker"],
    contributions: [
      "Built an end-to-end AI pipeline that generates HIPAA-compliant prior authorization forms directly from patient FHIR R4 data in 30–60 seconds.",
      "Designed a multi-step agent workflow: FHIR extraction, LLM drafting, and confidence evaluation.",
      "Implemented a strict 80% confidence threshold: auto-approves results above 80% and routes lower-confidence edge cases to human clinical review.",
      "Delivered an administrative staff dashboard with an immutable audit trail and PDF/JSON export capabilities.",
      "Secured API endpoints using robust JWT token authentication and role-based permissions."
    ],
    outcomes: [
      "Reduced form preparation from manual hours to 30–60 seconds",
      "Eliminated hallucination risks through structured clinical verification and human fallback",
      "Enforced responsible AI principles and patient data privacy throughout the pipeline"
    ],
    githubUrl: null,
    demoUrl: null,
    featured: true,
    order: 1
  },
  {
    id: "fingerprint-spoof-detection",
    slug: "fingerprint-spoof-detection",
    title: "Multimodal Explainable AI Fingerprint Spoofing Detection",
    subtitle: "Biometric presentation attack detection combining dual-branch deep networks with handcrafted frequency-domain features and transparent XAI.",
    category: "AI/ML",
    categoryTags: ["AI/ML", "Computer Vision", "Cybersecurity", "Explainable AI"],
    status: "COMPLETED",
    shortDescription:
      "Biometric Presentation Attack Detection (PAD) system integrating deep convolutional networks with 2D FFT, Gabor filters, and LBP features, backed by Mahalanobis OOD detection, MC Dropout uncertainty, and Grad-CAM++.",
    description:
      "A biometric security system engineered to defend authentication pipelines against physical presentation attacks (gelatin, silicone, latex, 3D printed molds). By combining deep visual representations with handcrafted mathematical texture features and full explainability suites, the model detects novel attacks while giving forensic investigators inspectable rationale.",
    problem:
      "Standard fingerprint sensors and black-box neural networks are vulnerable to sophisticated spoofing artifacts and fail unpredictably when encountering novel attack materials not seen during training.",
    approach:
      "Engineered a dual-branch architecture pairing a deep CNN for spatial feature discovery with a handcrafted feature extraction pipeline (2D FFT, Gabor filter banks, minutiae analysis, ridge coherence, LBP). Integrated Mahalanobis distance for out-of-distribution (OOD) attack detection and Monte Carlo Dropout for uncertainty calibration.",
    highlightMetric: "8-Tab Analytics Suite",
    architecture: [
      {
        step: "01",
        title: "Fingerprint Input & Quality Check",
        description: "Captures raw biometric scans and performs initial quality assessment and resolution verification.",
        details: ["Image contrast assessment", "Dynamic range normalization", "Artifact filtering"]
      },
      {
        step: "02",
        title: "Preprocessing Pipeline",
        description: "Normalizes ridge orientation, crops regions of interest, and enhances ridge-valley valley contrast.",
        details: ["Histogram equalization", "Ridge orientation estimation", "Background segmentation"]
      },
      {
        step: "03",
        title: "Handcrafted Feature Extraction",
        description: "Extracts deterministic mathematical descriptors capturing frequency and spatial micro-textures.",
        details: ["2D Fast Fourier Transform (FFT) frequency spectrum", "Multi-orientation Gabor filter banks", "Minutiae extraction & ridge coherence", "Local Binary Patterns (LBP)"]
      },
      {
        step: "04",
        title: "Dual-Branch Deep Learning Model",
        description: "Processes normalized raw images through a deep CNN while simultaneously projecting handcrafted feature vectors into a fused dense representation.",
        details: ["Dual-branch feature fusion", "Feature map concatenation", "Dropout regularization"]
      },
      {
        step: "05",
        title: "Classification & Calibration",
        description: "Performs binary presentation attack detection (Live vs. Spoof) calibrated with temperature scaling.",
        details: ["Probability calibration", "Optimal operating point selection", "Threshold tuning"]
      },
      {
        step: "06",
        title: "Uncertainty & OOD Detection",
        description: "Assesses model confidence using Monte Carlo Dropout variance and calculates Mahalanobis distance in latent space to catch unseen materials.",
        details: ["Monte Carlo Dropout epistemic uncertainty", "Mahalanobis distance Out-of-Distribution detection", "Rejection mechanism for unknown attack types"]
      },
      {
        step: "07",
        title: "Explainability Suite (XAI)",
        description: "Generates multi-method visual explanations detailing why a sample was flagged as spoof or authentic.",
        details: ["Grad-CAM++ activation heatmaps", "Integrated Gradients pixel attribution", "Kernel SHAP feature importance analysis"]
      },
      {
        step: "08",
        title: "Forensic Results Dashboard",
        description: "Visualizes findings across an 8-tab diagnostic dashboard compliant with international biometric standards.",
        details: ["ISO/IEC 30107-3 metric reporting (APCER, BPCER, ACER)", "Interactive attribution maps", "REST API integration for authentication pipelines"]
      }
    ],
    flowDiagram: [
      "Fingerprint Input",
      "Image Preprocessing",
      "Feature Extraction (2D FFT, Gabor, Minutiae, LBP)",
      "Dual-Branch Model",
      "Classification",
      "Uncertainty & OOD Checks",
      "Explainability (Grad-CAM++, SHAP)",
      "Result Dashboard"
    ],
    techStack: ["Python", "PyTorch", "OpenCV", "Flask", "Scikit-Learn", "NumPy", "Matplotlib"],
    contributions: [
      "Built a biometric Presentation Attack Detection system combining a dual-branch deep learning model with 2D FFT, Gabor filters, minutiae, ridge coherence and LBP features.",
      "Added Mahalanobis distance OOD detection to intercept unseen counterfeit materials.",
      "Implemented Monte Carlo Dropout uncertainty estimation and temperature scaling for calibrated predictions.",
      "Generated transparent visual explanations via Grad-CAM++, Integrated Gradients, and Kernel SHAP.",
      "Exposed low-latency REST APIs and an 8-tab analytics dashboard reporting ISO/IEC 30107-3 biometric presentation attack metrics."
    ],
    outcomes: [
      "Transparent forensic explanations for high-security biometric checkpoints",
      "Reliable detection of out-of-distribution attacks via Mahalanobis distance scoring",
      "Full compliance with ISO/IEC 30107-3 presentation attack detection reporting protocols"
    ],
    githubUrl: null,
    demoUrl: null,
    featured: true,
    order: 2
  },
  {
    id: "onehealth-platform",
    slug: "onehealth-platform",
    title: "OneHealth: Unified Healthcare Platform",
    subtitle: "Microservices-based telehealth ecosystem featuring end-to-end encrypted consultations, instant SOS geolocation, and digital pharmacy.",
    category: "Full Stack",
    categoryTags: ["Full Stack", "Healthcare Technology", "FastAPI", "Microservices", "Cybersecurity"],
    status: "IN DEVELOPMENT",
    shortDescription:
      "Privacy-conscious digital healthcare platform composed of 9 independent FastAPI microservices with JWT auth, AES-256 encryption, RBAC, WebRTC teleconsultations, and emergency SOS with live tracking.",
    description:
      "A comprehensive, privacy-first healthcare platform connecting patients, doctors, and healthcare institutions. Engineered with a modular microservices architecture, OneHealth isolates patient records with AES-256 encryption and enforces granular role-based access control across medical record storage, real-time WebRTC teleconsultations, e-prescriptions, and life-saving emergency SOS broadcasts.",
    problem:
      "Fragmented digital health services force patients and providers into disjointed tools for scheduling, records, video consultations, and prescriptions, frequently compromising sensitive PHI and lacking emergency responsiveness.",
    approach:
      "Decomposed the system into 9 loosely coupled, independent FastAPI microservices communicating over secured internal protocols, backed by MongoDB for clinical notes and PostgreSQL for transactional financial operations. Presented at the AI Powered Solution Expo, SRKR.",
    highlightMetric: "9 FastAPI Microservices",
    architecture: [
      {
        step: "01",
        title: "Client Layer (Patient & Provider)",
        description: "Responsive Flutter cross-platform applications and web portals tailored with dedicated user workflows.",
        details: ["Patient mobile app", "Doctor clinical workstation", "Pharmacy fulfillment portal"]
      },
      {
        step: "02",
        title: "Security & API Gateway",
        description: "Unified reverse proxy handling TLS termination, rate limiting, and JWT validation.",
        details: ["Role-Based Access Control (RBAC) enforcement", "AES-256 envelope encryption for PHI data", "Tamper-evident audit logging"]
      },
      {
        step: "03",
        title: "9 Independent FastAPI Microservices",
        description: "Domain-isolated services running independently for resilience and fault isolation.",
        details: [
          "Auth & Identity Service (JWT, OAuth2)",
          "Patient Profile & Medical History Service",
          "Doctor Scheduling & Appointment Service",
          "Teleconsultation Service (WebRTC signaling)",
          "E-Prescription & Diagnostics Service",
          "Medicine Ordering & Pharmacy Service",
          "Payment Processing Service (Razorpay)",
          "Emergency SOS & Geolocation Service",
          "Notification & Audit Logging Service"
        ]
      },
      {
        step: "04",
        title: "Data Persistence & Cloud Storage",
        description: "Polyglot database strategy combining relational transactional consistency with document flexibility.",
        details: ["PostgreSQL for ACID appointment & payment ledger", "MongoDB for flexible clinical history schemas", "AWS S3 & Firebase for encrypted file storage"]
      },
      {
        step: "05",
        title: "Emergency SOS & Live Geolocation",
        description: "Real-time emergency broadcast subsystem dispatching coordinates to first responders and emergency contacts.",
        details: ["Low-latency WebSockets", "Live GPS coordinate broadcasting", "Automated SMS & push dispatch"]
      }
    ],
    flowDiagram: [
      "Flutter Client (Patient/Doctor)",
      "API Gateway (JWT & RBAC)",
      "9 FastAPI Microservices",
      "WebRTC Telehealth & Realtime SOS",
      "AES-256 Encrypted Storage (AWS/Firebase)",
      "Audit Trail & Ledger (PostgreSQL/Mongo)"
    ],
    techStack: ["Flutter", "FastAPI", "MongoDB", "PostgreSQL", "Groq AI", "WebRTC", "Razorpay", "AWS", "Firebase"],
    contributions: [
      "Architected 9 independent FastAPI microservices secured with JWT authentication, AES-256 encryption, and granular role-based access control.",
      "Integrated immutable audit logging for all health record access and modifications.",
      "Implemented cloud storage workflows on AWS and Firebase with end-to-end payload encryption.",
      "Engineered real-time WebRTC teleconsultation signaling and peer connection infrastructure.",
      "Built digital prescription generation, pharmacy medicine ordering, and emergency SOS with live location broadcasting.",
      "Presented system design and prototype at the AI Powered Solution Expo, SRKR."
    ],
    outcomes: [
      "Presented at the AI Powered Solution Expo at SRKR Engineering College",
      "Zero single-point-of-failure modular microservices design",
      "Robust data protection aligning with strict healthcare privacy standards"
    ],
    githubUrl: null,
    demoUrl: null,
    featured: true,
    order: 3
  },
  {
    id: "d-cloud-storage",
    slug: "d-cloud-storage",
    title: "D-Cloud: Decentralized Storage System",
    subtitle: "Agent-centric peer-to-peer storage protocol utilizing Distributed Hash Tables, Reed-Solomon erasure coding, and Ed25519 zero-trust encryption.",
    category: "Distributed Systems",
    categoryTags: ["Distributed Systems", "Rust", "Cybersecurity", "Holochain"],
    status: "DESIGNING",
    shortDescription:
      "Agent-centric decentralized storage architecture on a Distributed Hash Table (DHT) using Reed-Solomon erasure coding and Ed25519 zero-trust encryption to ensure data survivability when >40% of nodes fail.",
    description:
      "A peer-to-peer, agent-centric storage network architected in Rust and TypeScript. Designed to replace centralized cloud storage monopolies, D-Cloud encrypts user data on the client side with Ed25519 cryptography, splits it into redundant mathematical shards via Reed-Solomon erasure coding, and distributes shards across a decentralized network where no single node ever holds a decryptable file.",
    problem:
      "Centralized cloud storage platforms present single points of failure, vulnerable targets for data breaches, and invasive terms of service where hosting providers maintain theoretical access to stored user information.",
    approach:
      "Designing an agent-centric storage architecture leveraging Holochain and a Distributed Hash Table (DHT). Client-side encryption ensures zero-trust security, while forward error correction (Reed-Solomon erasure coding) maintains data reconstruction capability even in harsh adversarial environments where over 40% of storage nodes fail or go offline.",
    highlightMetric: "40%+ Node Failure Fault Tolerance Target",
    architecture: [
      {
        step: "01",
        title: "User Data Ingestion",
        description: "Receives raw file stream locally inside the user's client sandbox without remote exposure.",
        details: ["Client-side stream buffer", "Metadata hashing via BLAKE3", "File chunking"]
      },
      {
        step: "02",
        title: "Ed25519 Zero-Trust Client Encryption",
        description: "Encrypts data chunks with private keys managed strictly on the client device before network transmission.",
        details: ["Ed25519 cryptographic keypairs", "Zero-knowledge encryption layer", "No remote key retention"]
      },
      {
        step: "03",
        title: "Reed-Solomon Erasure Coding",
        description: "Splits encrypted payloads into K data shards and M parity shards, providing mathematical reconstruction guarantees.",
        details: ["Resilient against >40% node failure", "Configurable redundancy factor", "Forward error correction"]
      },
      {
        step: "04",
        title: "Distributed Hash Table (DHT) Distribution",
        description: "Distributes mathematical shards across agent-centric DHT nodes based on deterministic peer routing.",
        details: ["Holochain agent-centric DHT", "Geographic peer distribution", "Storage proof verification"]
      },
      {
        step: "05",
        title: "Decentralized Reconstruction & Verification",
        description: "Retrieves any valid threshold of shards from active nodes to reconstitute and decrypt the original file seamlessly.",
        details: ["Concurrent shard retrieval", "Integrity validation against original hash", "Local decryption without intermediate trust"]
      }
    ],
    flowDiagram: [
      "User Data",
      "Ed25519 Client Encryption",
      "Reed-Solomon Erasure Coding",
      "Distributed DHT Nodes",
      "Fault-Tolerant Data Reconstruction"
    ],
    techStack: ["Rust", "TypeScript", "React.js", "Holochain", "DHT", "Ed25519", "Reed-Solomon"],
    contributions: [
      "Designing an agent-centric storage system on a DHT utilizing Reed-Solomon erasure coding so data stays available even if more than 40% of nodes fail.",
      "Implementing Ed25519 zero-trust encryption so no single storage node can view a user's complete data.",
      "Architecting peer discovery, shard routing, and mathematical reconstruction algorithms.",
      "Designing a high-performance Rust core paired with a clean TypeScript / React.js explorer dashboard."
    ],
    outcomes: [
      "Zero-trust architectural design with no centralized key authority",
      "High availability resilience targeting over 40% Byzantine node outage",
      "Complete agent sovereignty and data portability"
    ],
    githubUrl: null,
    demoUrl: null,
    featured: false,
    order: 4
  }
];
