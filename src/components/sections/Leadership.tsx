"use client";

import React from "react";
import { leadershipRoles } from "@/data/leadership";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Users, Calendar, CheckCircle2, Award, Sparkles } from "lucide-react";

export function Leadership() {
  return (
    <section id="leadership" className="py-20 sm:py-28 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Leadership & Initiative"
          title="Organizational"
          highlightedTitle="Leadership & Impact."
          description="Directing engineering teams, orchestrating high-attendance campus conferences, and mentoring student startups on technology budgeting."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipRoles.map((role, idx) => (
            <div
              key={idx}
              className="bg-[#10141D] border border-white/[0.08] hover:border-[#4385FF]/40 rounded-xl p-6 sm:p-7 glass-card glass-card-hover flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-[#39D9F2] bg-[#39D9F2]/10 border border-[#39D9F2]/20 px-2 py-0.5 rounded">
                    {role.badge || "Leadership"}
                  </span>
                  <span className="font-mono text-xs text-[#A0A9B8]">
                    {role.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#4385FF] mt-1">
                    {role.organization}
                  </p>
                </div>

                <p className="text-xs text-[#A0A9B8] leading-relaxed">
                  {role.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#A0A9B8]">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#F5F7FC]/90">
                    {role.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#39D9F2] shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
