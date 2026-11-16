import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "cyan" | "violet" | "outline" | "success" | "warning";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
  dot = false,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-white/[0.06] text-[#F5F7FC] border-white/[0.08]",
    accent: "bg-[#4385FF]/10 text-[#4385FF] border-[#4385FF]/30",
    cyan: "bg-[#39D9F2]/10 text-[#39D9F2] border-[#39D9F2]/30",
    violet: "bg-[#9067FF]/10 text-[#9067FF] border-[#9067FF]/30",
    outline: "bg-transparent text-[#A0A9B8] border-white/[0.12]",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  };

  const dotColors = {
    default: "bg-white/60",
    accent: "bg-[#4385FF] shadow-[0_0_8px_#4385FF]",
    cyan: "bg-[#39D9F2] shadow-[0_0_8px_#39D9F2]",
    violet: "bg-[#9067FF] shadow-[0_0_8px_#9067FF]",
    outline: "bg-[#A0A9B8]",
    success: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
    warning: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono rounded-full border transition-colors font-medium tracking-wide",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full inline-block animate-pulse", dotColors[variant])} />}
      {children}
    </span>
  );
}
