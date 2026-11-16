"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Sparkles } from "lucide-react";

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "ai-ml", label: "AI/ML", tag: "AI/ML" },
  { id: "full-stack", label: "Full Stack", tag: "Full Stack" },
  { id: "security", label: "Cybersecurity", tag: "Cybersecurity" },
  { id: "distributed", label: "Distributed Systems", tag: "Distributed Systems" },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return projects;
    const tabObj = filterTabs.find((t) => t.id === activeTab);
    if (!tabObj?.tag) return projects;

    return projects.filter(
      (p) => p.category === tabObj.tag || p.categoryTags.includes(tabObj.tag)
    );
  }, [activeTab]);

  return (
    <section id="projects" className="py-20 sm:py-28 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Featured Case Studies"
            title="Production-Style"
            highlightedTitle="Systems & Engineering."
            description="Explore four substantive software systems spanning AI-driven clinical automation, explainable biometric spoof detection, healthcare microservices, and decentralized storage."
            className="mb-0"
          />

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#39D9F2] hover:text-[#4385FF] transition-colors self-start md:self-end"
          >
            <span>View All Deep-Dive Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#4385FF] text-white shadow-[0_0_15px_rgba(67,133,255,0.4)]"
                    : "bg-[#141A25] text-[#A0A9B8] hover:text-[#F5F7FC] border border-white/[0.06]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
