import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { profile } from "@/data/profile";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akash-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vemulapalli Akash | AI/ML Engineer & Full Stack Developer",
  description:
    "Portfolio of Vemulapalli Akash — AI/ML Engineer and Full Stack Developer building intelligent applications, explainable machine learning systems and secure software architectures.",
  keywords: [
    "Vemulapalli Akash",
    "Akash",
    "AI/ML Engineer",
    "Full Stack Developer",
    "Security-Focused Backend Developer",
    "SRKR Engineering College",
    "Explainable AI",
    "FHIR R4",
    "FastAPI",
    "Next.js",
    "PyTorch",
    "Cybersecurity",
    "Prajwalan 2026",
  ],
  authors: [{ name: "Vemulapalli Akash", url: siteUrl }],
  creator: "Vemulapalli Akash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Vemulapalli Akash | AI/ML Engineer & Full Stack Developer",
    description:
      "Engineering Intelligence. Building Secure Digital Experiences. Explore AI/ML pipelines, XAI biometric spoof detection, and microservices.",
    siteName: "Vemulapalli Akash Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vemulapalli Akash | AI/ML Engineer & Full Stack Developer",
    description:
      "Engineering Intelligence. Building Secure Digital Experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: profile.name,
        givenName: profile.firstName,
        jobTitle: "AI/ML Engineer & Full Stack Developer",
        email: profile.email,
        telephone: profile.phone,
        url: siteUrl,
        sameAs: [profile.github, profile.linkedin],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "SRKR Engineering College, Bhimavaram",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bhimavaram",
          addressRegion: "Andhra Pradesh",
          addressCountry: "India",
        },
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Computer Vision",
          "Explainable AI",
          "Full Stack Web Development",
          "Cybersecurity",
          "Decentralized Systems",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Vemulapalli Akash Engineering Portfolio",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080A0F] text-[#F5F7FC] font-sans antialiased min-h-screen flex flex-col selection:bg-[#4385FF]/30 selection:text-[#39D9F2]">
        <ScrollProgress />
        <CustomCursor />
        <AnimatedBackground />
        <Navbar />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
