import { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Projects & Case Studies | Vemulapalli Akash",
  description:
    "In-depth architectural case studies of AI/ML systems, explainable biometric spoof detection, healthcare microservices, and decentralized storage.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A0A9B8] hover:text-[#4385FF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <SectionHeading
          badge="Engineering Archive"
          title="All Projects &"
          highlightedTitle="System Case Studies."
          description="Detailed technical breakdown of production-style AI pipelines, biometric security models, and resilient distributed platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
