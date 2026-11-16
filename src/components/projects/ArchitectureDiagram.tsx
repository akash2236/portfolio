"use client";

import React, { useState } from "react";
import { ArchitectureStep } from "@/types";
import { ArrowRight, CheckCircle2, ChevronRight, Layers } from "lucide-react";

interface ArchitectureDiagramProps {
  steps: ArchitectureStep[];
  title?: string;
  projectSlug?: string;
}

export function ArchitectureDiagram({
  steps,
  title = "System Architecture & Execution Pipeline",
}: ArchitectureDiagramProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <div className="w-full bg-[#10141D]/90 border border-white/[0.08] rounded-xl p-5 sm:p-7 glass-card space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-[#4385FF]/10 text-[#4385FF]">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
              {title}
            </h3>
            <p className="text-xs text-[#A0A9B8]">
              Click any step to inspect the underlying component logic
            </p>
          </div>
        </div>
        <span className="font-mono text-xs text-[#39D9F2] bg-[#39D9F2]/10 border border-[#39D9F2]/20 px-2.5 py-1 rounded-md self-start sm:self-auto">
          Step {activeStepIndex + 1} of {steps.length}
        </span>
      </div>

      {/* Horizontal Step Pipeline Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {steps.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          return (
            <button
              key={idx}
              onClick={() => setActiveStepIndex(idx)}
              className={`flex items-center gap-2 p-3 rounded-lg border text-left transition-all cursor-pointer ${
                isActive
                  ? "bg-[#4385FF]/15 border-[#4385FF] text-[#F5F7FC] shadow-[0_0_15px_rgba(67,133,255,0.25)]"
                  : "bg-[#141A25]/60 border-white/[0.06] text-[#A0A9B8] hover:border-white/[0.15] hover:text-[#F5F7FC]"
              }`}
            >
              <span
                className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${
                  isActive ? "bg-[#4385FF] text-white" : "bg-white/[0.08] text-[#A0A9B8]"
                }`}
              >
                {step.step}
              </span>
              <span className="text-xs font-medium truncate">{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Deep-Dive Inspector Box */}
      <div className="bg-[#141A25]/90 border border-white/[0.08] rounded-lg p-5 space-y-4 animate-in fade-in duration-200">
        <div className="flex items-center gap-2 text-xs font-mono text-[#4385FF]">
          <span>PHASE {activeStep.step}</span>
          <span>•</span>
          <span className="text-[#39D9F2] uppercase">{activeStep.title}</span>
        </div>

        <p className="text-sm text-[#F5F7FC] leading-relaxed">
          {activeStep.description}
        </p>

        {activeStep.details && activeStep.details.length > 0 && (
          <div className="pt-2 border-t border-white/[0.06] space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-[#A0A9B8]">
              Implementation Specifications:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeStep.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2 text-xs text-[#A0A9B8]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Next/Prev Navigation inside diagram */}
      <div className="flex items-center justify-between text-xs pt-1">
        <button
          onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
          disabled={activeStepIndex === 0}
          className="text-[#A0A9B8] hover:text-[#4385FF] disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          ← Previous Phase
        </button>
        <button
          onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
          disabled={activeStepIndex === steps.length - 1}
          className="text-[#A0A9B8] hover:text-[#4385FF] disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          Next Phase →
        </button>
      </div>
    </div>
  );
}
