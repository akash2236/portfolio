import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "default" | "accent" | "cyan" | "violet";
  title: string;
  highlightedTitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "accent",
  title,
  highlightedTitle,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const badgeColors = {
    default: "text-[#F5F7FC] border-white/10 bg-white/5",
    accent: "text-[#4385FF] border-[#4385FF]/30 bg-[#4385FF]/10",
    cyan: "text-[#39D9F2] border-[#39D9F2]/30 bg-[#39D9F2]/10",
    violet: "text-[#9067FF] border-[#9067FF]/30 bg-[#9067FF]/10",
  };

  return (
    <div
      className={cn(
        "space-y-3 mb-12 sm:mb-16",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {badge && (
        <div className={cn("inline-flex items-center gap-2", align === "center" && "justify-center")}>
          <span
            className={cn(
              "font-mono text-[11px] uppercase tracking-widest px-3 py-1 rounded-full border",
              badgeColors[badgeVariant]
            )}
          >
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
        {title}{" "}
        {highlightedTitle && (
          <span className="gradient-text">{highlightedTitle}</span>
        )}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[#A0A9B8] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
