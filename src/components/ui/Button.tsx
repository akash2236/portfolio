import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  download,
  target,
  rel,
  icon,
  iconPosition = "right",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#4385FF] hover:bg-[#3273EC] text-white shadow-[0_0_20px_rgba(67,133,255,0.35)] hover:shadow-[0_0_30px_rgba(67,133,255,0.55)] border border-[#5A95FF]/40",
    secondary:
      "bg-[#141A25] hover:bg-[#1E2638] text-[#F5F7FC] border border-white/[0.1] hover:border-white/[0.2]",
    outline:
      "bg-transparent hover:bg-white/[0.05] text-[#F5F7FC] border border-white/[0.15] hover:border-[#4385FF]/50",
    ghost:
      "bg-transparent hover:bg-white/[0.06] text-[#A0A9B8] hover:text-[#F5F7FC]",
    cyan:
      "bg-[#39D9F2] hover:bg-[#2BC7E0] text-[#080A0F] font-semibold shadow-[0_0_20px_rgba(57,217,242,0.35)] hover:shadow-[0_0_30px_rgba(57,217,242,0.55)] border border-[#39D9F2]/40",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <Link
        href={href}
        download={download}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
