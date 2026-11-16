"use client";

import React from "react";
import { philosophyPillars } from "@/data/philosophy";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Brain, Shield, Boxes, Search, CheckCircle2 } from "lucide-react";

const iconMap = {
  Brain: <Brain className="w-5 h-5 text-[#4385FF]" />,
  Shield: <Shield className="w-5 h-5 text-[#39D9F2]" />,
  Boxes: <Boxes className="w-5 h-5 text-[#9067FF]" />,
  Search: <Search className="w-5 h-5 text-emerald-400" />,
};

export function Philosophy() {
  return (
    <section className="py-20 sm:py-28 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Guiding Tenets"
          title="How I Think About"
          highlightedTitle="Engineering."
          description="Four non-negotiable architectural convictions shaping how I design, validate, and deploy intelligent software systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {philosophyPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#10141D] border border-white/[0.08] hover:border-[#4385FF]/40 rounded-xl p-6 sm:p-8 glass-card glass-card-hover flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#141A25] border border-white/10">
                      {iconMap[pillar.icon as keyof typeof iconMap] || <Brain className="w-5 h-5" />}
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#39D9F2]">Pillar {pillar.number}</span>
                      <h3 className="text-xl font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="font-mono text-xs font-semibold text-[#4385FF]">
                  &ldquo;{pillar.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#A0A9B8] leading-relaxed">
                  {pillar.description}
                </p>

                {/* Specific principles checklist */}
                <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#A0A9B8]">
                    Core Commitments:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#F5F7FC]/90">
                    {pillar.principles.map((principle, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#39D9F2] shrink-0 mt-0.5" />
                        <span className="leading-snug">{principle}</span>
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
