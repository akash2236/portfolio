"use client";

import React, { useState, useMemo } from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import {
  Brain,
  Code,
  Shield,
  Server,
  Database,
  Terminal,
  Search,
  Sparkles,
  Layers,
  Cpu,
  Eye,
  Key,
  Lock,
  Boxes,
  Globe,
  Flame,
  Cloud,
  FileCode,
  Smartphone,
  Layout,
  Repeat,
  Send,
  Binary,
  Video,
  GitBranch,
  ShieldCheck,
  Zap,
  BarChart3,
  Activity,
  AlertTriangle,
  Fingerprint,
  FileText,
  Users,
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
  Brain: <Brain className="w-4 h-4" />,
  Eye: <Eye className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
  Network: <Boxes className="w-4 h-4" />,
  Search: <Search className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  BarChart3: <BarChart3 className="w-4 h-4" />,
  Activity: <Activity className="w-4 h-4" />,
  Layout: <Layout className="w-4 h-4" />,
  Server: <Server className="w-4 h-4" />,
  Smartphone: <Smartphone className="w-4 h-4" />,
  FileCode: <FileCode className="w-4 h-4" />,
  Palette: <Layers className="w-4 h-4" />,
  Key: <Key className="w-4 h-4" />,
  Lock: <Lock className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  Shield: <Shield className="w-4 h-4" />,
  Users: <Users className="w-4 h-4" />,
  FileText: <FileText className="w-4 h-4" />,
  AlertTriangle: <AlertTriangle className="w-4 h-4" />,
  Fingerprint: <Fingerprint className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Flame: <Flame className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  GitBranch: <GitBranch className="w-4 h-4" />,
  Send: <Send className="w-4 h-4" />,
  Repeat: <Repeat className="w-4 h-4" />,
  Boxes: <Boxes className="w-4 h-4" />,
  Video: <Video className="w-4 h-4" />,
  Binary: <Binary className="w-4 h-4" />,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        // Match category tab
        if (selectedCategory !== "all" && cat.id !== selectedCategory) {
          return null;
        }

        // Filter skills inside category by search
        const matchingSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );

        if (matchingSkills.length === 0) return null;

        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter(Boolean) as typeof skillCategories;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 sm:py-28 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Competencies"
          title="Engineered with"
          highlightedTitle="Precision Tools."
          description="Curated technical stack evaluated through production-style development, AI pipelines, and secure backend systems."
        />

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#4385FF] text-white shadow-[0_0_12px_rgba(67,133,255,0.4)]"
                  : "bg-[#141A25] text-[#A0A9B8] hover:text-[#F5F7FC] border border-white/[0.06]"
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#4385FF] text-white shadow-[0_0_12px_rgba(67,133,255,0.4)]"
                    : "bg-[#141A25] text-[#A0A9B8] hover:text-[#F5F7FC] border border-white/[0.06]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#A0A9B8] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full bg-[#141A25] border border-white/[0.08] focus:border-[#4385FF]/60 rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#F5F7FC] placeholder-[#A0A9B8]/60 focus:outline-none font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A0A9B8] hover:text-white"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#10141D] border border-white/[0.08] hover:border-[#4385FF]/30 rounded-xl p-6 glass-card flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <h3 className="text-base font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
                    {cat.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#39D9F2] bg-[#39D9F2]/10 px-2 py-0.5 rounded">
                    {cat.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-[#A0A9B8] leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 ${
                        skill.highlight
                          ? "bg-[#141A25] border-[#4385FF]/30 text-[#F5F7FC] hover:border-[#4385FF] hover:shadow-[0_0_12px_rgba(67,133,255,0.25)]"
                          : "bg-white/[0.03] border-white/[0.06] text-[#A0A9B8] hover:text-[#F5F7FC] hover:border-white/[0.15]"
                      }`}
                    >
                      <span className="text-[#4385FF] group-hover:scale-110 transition-transform">
                        {iconMap[skill.icon] || <Code className="w-3.5 h-3.5" />}
                      </span>
                      <span>{skill.name}</span>
                      <span className="text-[9px] opacity-60 ml-0.5">
                        [{skill.level}]
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-[#10141D] border border-white/[0.08] rounded-xl p-8 glass-card">
            <p className="text-sm text-[#A0A9B8]">
              No technologies match &ldquo;{searchQuery}&rdquo;. Try clearing your search query.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-3 text-xs font-mono text-[#4385FF] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
