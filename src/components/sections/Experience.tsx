"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase, Calendar, CheckCircle2, Building, Terminal } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Track Record"
          title="Engineering"
          highlightedTitle="Experience."
          description="Practical industry experience developing live features, maintaining backend services, and participating in production pull request workflows."
        />

        <div className="max-w-4xl">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative bg-[#10141D] border border-white/[0.08] hover:border-[#4385FF]/40 rounded-xl p-6 sm:p-8 glass-card transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-[#4385FF]/10 text-[#4385FF]">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-[#39D9F2] flex items-center gap-1.5 pl-8 sm:pl-0">
                    <Building className="w-3.5 h-3.5 hidden sm:inline" />
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-[#A0A9B8]">
                  <span className="flex items-center gap-1 bg-[#141A25] border border-white/[0.06] px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-[#4385FF]" />
                    {exp.duration} ({exp.type})
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-6 space-y-3">
                <p className="font-mono text-xs uppercase tracking-wider text-[#A0A9B8]">
                  Core Contributions & Responsibilities:
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F7FC]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#4385FF] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-2 flex-wrap">
                <span className="font-mono text-[11px] text-[#A0A9B8]">Tools:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-mono rounded bg-white/[0.04] text-[#39D9F2] border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
