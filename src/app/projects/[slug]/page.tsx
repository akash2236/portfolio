import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Shield,
  Cpu,
  Clock,
  Activity,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Vemulapalli Akash",
    };
  }

  return {
    title: `${project.title} | Case Study — Vemulapalli Akash`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Technical Architecture`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;
  const relatedProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const statusVariant = {
    COMPLETED: "success",
    "IN DEVELOPMENT": "accent",
    DESIGNING: "violet",
  } as const;

  return (
    <div className="pt-28 pb-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A0A9B8] hover:text-[#4385FF] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects Overview</span>
          </Link>

          <Badge variant={statusVariant[project.status] || "default"} size="sm" dot>
            {project.status}
          </Badge>
        </div>

        {/* Hero Header for Case Study */}
        <div className="space-y-4 border-b border-white/[0.08] pb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[#39D9F2] bg-[#39D9F2]/10 border border-[#39D9F2]/20 px-2.5 py-0.5 rounded-full">
              {project.category}
            </span>
            {project.highlightMetric && (
              <span className="font-mono text-xs text-[#4385FF] bg-[#4385FF]/10 border border-[#4385FF]/20 px-2.5 py-0.5 rounded-full">
                {project.highlightMetric}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7FC] font-['Space_Grotesk',sans-serif] tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#A0A9B8] leading-relaxed max-w-3xl">
            {project.subtitle}
          </p>

          {/* Quick Meta Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.04] text-[#F5F7FC] border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-[#F5F7FC] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-[#A0A9B8]/70 bg-white/[0.02] border border-white/[0.06] px-2.5 py-1 rounded">
                  Private Repository
                </span>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#4385FF] hover:bg-[#3273EC] text-xs font-mono text-white transition-colors shadow-[0_0_15px_rgba(67,133,255,0.3)]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Problem vs Approach Two-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#10141D] border border-white/[0.08] rounded-xl p-6 sm:p-7 glass-card space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span>THE ENGINEERING CHALLENGE</span>
            </div>
            <h2 className="text-lg font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
              Problem Statement
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A9B8] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="bg-[#10141D] border border-white/[0.08] rounded-xl p-6 sm:p-7 glass-card space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#39D9F2]">
              <span className="w-2 h-2 rounded-full bg-[#39D9F2]" />
              <span>THE ARCHITECTURAL SOLUTION</span>
            </div>
            <h2 className="text-lg font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
              Engineering Approach
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A9B8] leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#4385FF]" />
            <h2 className="text-lg sm:text-xl font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
              System Architecture & Pipeline Flow
            </h2>
          </div>

          <ArchitectureDiagram
            steps={project.architecture}
            title={`${project.title} — Deep Architecture`}
            projectSlug={project.slug}
          />
        </div>

        {/* Key Engineering Contributions */}
        <div className="bg-[#10141D] border border-white/[0.08] rounded-xl p-6 sm:p-8 glass-card space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono text-[#4385FF]">
            <Cpu className="w-4 h-4" />
            <span>VERIFIED CONTRIBUTIONS</span>
          </div>
          <h2 className="text-xl font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
            What I Engineered & Implemented
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {project.contributions.map((contrib, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F7FC]/90">
                <CheckCircle2 className="w-4 h-4 text-[#4385FF] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{contrib}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Outcomes & Safety Guarantees */}
        {project.outcomes && (
          <div className="bg-[#10141D] border border-white/[0.08] rounded-xl p-6 sm:p-8 glass-card space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <Shield className="w-4 h-4" />
              <span>OUTCOMES & RELIABILITY MEASURES</span>
            </div>
            <h2 className="text-xl font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
              Results & Architectural Guarantees
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#141A25]/60 border border-white/[0.06] text-xs text-[#A0A9B8] leading-relaxed"
                >
                  <p className="font-mono text-[#39D9F2] mb-1">0{idx + 1}.</p>
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next & Previous Project Navigation */}
        <div className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-4 rounded-xl bg-[#10141D] border border-white/[0.08] hover:border-[#4385FF]/40 text-left transition-colors group glass-card"
            >
              <span className="text-[11px] font-mono text-[#A0A9B8] flex items-center gap-1 group-hover:text-[#4385FF]">
                <ArrowLeft className="w-3.5 h-3.5" /> Previous Case Study
              </span>
              <p className="text-sm font-bold text-[#F5F7FC] mt-1 font-['Space_Grotesk',sans-serif]">
                {prevProject.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-4 rounded-xl bg-[#10141D] border border-white/[0.08] hover:border-[#4385FF]/40 text-right transition-colors group glass-card sm:ml-auto w-full"
            >
              <span className="text-[11px] font-mono text-[#A0A9B8] flex items-center justify-end gap-1 group-hover:text-[#4385FF]">
                Next Case Study <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <p className="text-sm font-bold text-[#F5F7FC] mt-1 font-['Space_Grotesk',sans-serif]">
                {nextProject.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="pt-8 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#A0A9B8]">
              Related Architecture Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/projects/${rel.slug}`}
                  className="p-4 rounded-lg bg-[#141A25]/60 hover:bg-[#141A25] border border-white/[0.06] hover:border-[#4385FF]/40 transition-colors flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-mono text-[#39D9F2]">{rel.category}</p>
                    <p className="text-sm font-bold text-[#F5F7FC] mt-0.5">{rel.title}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A0A9B8]" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
