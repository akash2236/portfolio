import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ExternalLink, Layers, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusBadgeVariant = {
    COMPLETED: "success",
    "IN DEVELOPMENT": "accent",
    DESIGNING: "violet",
  } as const;

  return (
    <article className="group bg-[#10141D] border border-white/[0.08] hover:border-[#4385FF]/40 rounded-xl p-6 sm:p-7 glass-card glass-card-hover flex flex-col justify-between transition-all duration-300">
      <div className="space-y-5">
        {/* Top Meta Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Badge
            variant={statusBadgeVariant[project.status] || "default"}
            size="sm"
            dot
          >
            {project.status}
          </Badge>

          {project.highlightMetric && (
            <span className="font-mono text-[11px] text-[#39D9F2] bg-[#39D9F2]/10 border border-[#39D9F2]/20 px-2 py-0.5 rounded-full">
              {project.highlightMetric}
            </span>
          )}
        </div>

        {/* Title & Short Description */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif] group-hover:text-[#4385FF] transition-colors">
            <Link href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#A0A9B8] leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Key Engineering Contributions List (From Resume) */}
        <div className="space-y-2 pt-2 border-t border-white/[0.06]">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[#39D9F2]">
            Key Engineering Highlights:
          </p>
          <ul className="space-y-1.5 text-xs text-[#A0A9B8]">
            {project.contributions.slice(0, 3).map((contrib, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4385FF] shrink-0 mt-0.5" />
                <span className="line-clamp-2">{contrib}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-[#A0A9B8] border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4385FF] hover:text-[#39D9F2] transition-colors group/link"
        >
          <span>View Full Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>

        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#A0A9B8] hover:text-[#F5F7FC] transition-colors"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          ) : (
            <span
              className="text-[10px] font-mono text-[#A0A9B8]/60 bg-white/[0.02] border border-white/[0.04] px-2 py-0.5 rounded"
              title="Repository kept private / proprietary"
            >
              Private Repo
            </span>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#4385FF]/10 hover:bg-[#4385FF]/20 text-[#4385FF] transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
