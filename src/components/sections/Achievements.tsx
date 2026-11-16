"use client";

import React, { useState } from "react";
import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Trophy, Award, CheckCircle2, Sparkles, Shield, BookmarkCheck } from "lucide-react";

export function Achievements() {
  const [filterType, setFilterType] = useState<string>("ALL");

  const highlightAward = achievements.find((a) => a.highlight && a.type === "AWARD");
  const otherAchievements = achievements.filter((a) => a.id !== highlightAward?.id);

  const displayedList = otherAchievements.filter((item) => {
    if (filterType === "ALL") return true;
    return item.type === filterType;
  });

  return (
    <section id="achievements" className="py-20 sm:py-28 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Honors & Credentials"
          title="Verified"
          highlightedTitle="Achievements & Certifications."
          description="Competitive national hackathon placements, specialized technical bootcamps, and verified professional qualifications."
        />

        {/* Featured Hackathon Award Hero Card */}
        {highlightAward && (
          <div className="relative mb-12 bg-gradient-to-r from-[#10141D] via-[#141A25] to-[#10141D] border-2 border-[#4385FF]/40 rounded-2xl p-6 sm:p-10 shadow-[0_0_50px_rgba(67,133,255,0.18)] glass-card overflow-hidden">
            {/* Ambient Accent Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#4385FF]/15 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-400" />
                    {highlightAward.badgeText}
                  </span>
                  <span className="font-mono text-xs text-[#39D9F2] bg-[#39D9F2]/10 border border-[#39D9F2]/20 px-2.5 py-1 rounded-full">
                    {highlightAward.year}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
                  {highlightAward.title}
                </h3>

                <p className="text-sm font-semibold text-[#39D9F2]">
                  {highlightAward.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#A0A9B8] leading-relaxed max-w-2xl">
                  {highlightAward.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#080A0F] border border-white/20 flex flex-col items-center justify-center p-4 text-center shadow-2xl">
                  <Trophy className="w-10 h-10 text-amber-400 mb-1" />
                  <span className="font-['Space_Grotesk',sans-serif] font-black text-2xl text-amber-300">
                    2ND
                  </span>
                  <span className="text-[10px] font-mono text-[#A0A9B8] uppercase tracking-wider">
                    100+ TEAMS
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setFilterType("ALL")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              filterType === "ALL"
                ? "bg-[#4385FF] text-white shadow-[0_0_12px_rgba(67,133,255,0.4)]"
                : "bg-[#141A25] text-[#A0A9B8] hover:text-[#F5F7FC] border border-white/[0.06]"
            }`}
          >
            All Credentials
          </button>
          <button
            onClick={() => setFilterType("AWARD")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              filterType === "AWARD"
                ? "bg-[#4385FF] text-white shadow-[0_0_12px_rgba(67,133,255,0.4)]"
                : "bg-[#141A25] text-[#A0A9B8] hover:text-[#F5F7FC] border border-white/[0.06]"
            }`}
          >
            Hackathons & Awards
          </button>
          <button
            onClick={() => setFilterType("CERTIFICATION")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              filterType === "CERTIFICATION"
                ? "bg-[#4385FF] text-white shadow-[0_0_12px_rgba(67,133,255,0.4)]"
                : "bg-[#141A25] text-[#A0A9B8] hover:text-[#F5F7FC] border border-white/[0.06]"
            }`}
          >
            Bootcamps & Specializations
          </button>
          <button
            onClick={() => setFilterType("QUALIFICATION")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
              filterType === "QUALIFICATION"
                ? "bg-[#4385FF] text-white shadow-[0_0_12px_rgba(67,133,255,0.4)]"
                : "bg-[#141A25] text-[#A0A9B8] hover:text-[#F5F7FC] border border-white/[0.06]"
            }`}
          >
            Examinations
          </button>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedList.map((item) => (
            <div
              key={item.id}
              className="bg-[#10141D] border border-white/[0.08] hover:border-[#4385FF]/30 rounded-xl p-6 glass-card flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-[11px] text-[#39D9F2] bg-[#39D9F2]/10 border border-[#39D9F2]/20 px-2 py-0.5 rounded">
                    {item.badgeText || item.type}
                  </span>
                  <span className="font-mono text-xs text-[#A0A9B8]">
                    {item.year}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-[#4385FF] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#A0A9B8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#A0A9B8]">
                <span>Issuer: {item.issuer}</span>
                <BookmarkCheck className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
