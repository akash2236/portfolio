"use client";

import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Hero3DCard } from "@/components/ui/Hero3DCard";
import {
  ArrowDown,
  ArrowRight,
  Download,
  FileText,
  MapPin,
  Shield,
  Brain,
  Code,
  Terminal,
  Sparkles,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Availability Pill & Location */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="success" size="md" dot>
                {profile.availability.label}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#A0A9B8]">
                <MapPin className="w-3.5 h-3.5 text-[#4385FF]" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Intro & Name */}
            <div className="space-y-2">
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#39D9F2] uppercase">
                {profile.subheadline}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7FC] font-['Space_Grotesk',sans-serif] leading-[1.1]">
                Vemulapalli <span className="gradient-text">Akash</span>
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#A0A9B8] tracking-wide pt-1">
                AI/ML Engineer <span className="text-[#4385FF]">•</span> Full Stack Developer <span className="text-[#9067FF]">•</span> Security-Focused Backend Developer
              </p>
            </div>

            {/* Statement & Description */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-lg sm:text-xl font-medium text-[#F5F7FC] leading-snug">
                &ldquo;{profile.statement}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#A0A9B8] leading-relaxed">
                {profile.description}
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Button href="#projects" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Explore My Work
              </Button>

              <Button
                href={profile.resumePath}
                download="Vemulapalli_Akash_Resume.pdf"
                variant="outline"
                size="lg"
                icon={<Download className="w-4 h-4 text-[#39D9F2]" />}
                iconPosition="left"
              >
                Download Resume
              </Button>

              <Button href="#contact" variant="ghost" size="lg">
                Let&apos;s Connect
              </Button>
            </div>
          </div>

          {/* Interactive 3D Holographic Card with Profile Portrait (Right 5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <Hero3DCard />
          </div>
        </div>

        {/* Compact Professional Highlights Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08]">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#A0A9B8] mb-4 text-center sm:text-left">
            Verified Credentials & Engineering Highlights
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {profile.highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#10141D]/80 border border-white/[0.06] hover:border-[#4385FF]/30 rounded-xl p-4 transition-all duration-200 glass-card"
              >
                <p className="font-mono text-xs text-[#39D9F2] font-semibold">
                  {item.label}
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#F5F7FC] mt-1 font-['Space_Grotesk',sans-serif]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
