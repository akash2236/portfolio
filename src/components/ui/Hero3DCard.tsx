"use client";

import React, { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { Trophy, Shield, Brain, Sparkles, Terminal, Code2 } from "lucide-react";

export function Hero3DCard() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-12deg to +12deg)
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-[4/5] sm:aspect-square flex items-center justify-center"
      style={{ perspective: "1200px" }}
    >
      {/* Background Orbital Rings (Cybernetic 3D feel) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        {/* Ring 1 - Outer clockwise */}
        <div
          className="w-[115%] h-[115%] rounded-full border border-[#4385FF]/20 animate-spin opacity-60"
          style={{ animationDuration: "25s" }}
        />
        {/* Ring 2 - Middle dashed counter-clockwise */}
        <div
          className="w-[98%] h-[98%] rounded-full border border-dashed border-[#9067FF]/25 animate-spin opacity-70"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        />
        {/* Ring 3 - Inner cyan glowing pulse */}
        <div className="w-[85%] h-[85%] rounded-full border border-[#39D9F2]/20 animate-pulse" />
      </div>

      {/* Main 3D Interactive Tilting Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-full rounded-3xl p-5 sm:p-6 bg-[#10141D]/90 border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer select-none transition-transform ease-out duration-200"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${
            isHovered ? 1.02 : 1
          }, ${isHovered ? 1.02 : 1}, 1)`,
        }}
      >
        {/* Dynamic Specular Glare Overlay */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.2) 0%, rgba(67,133,255,0.1) 40%, transparent 70%)`,
            opacity: glare.opacity,
          }}
        />

        {/* Ambient Corner Glows */}
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#4385FF]/25 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#9067FF]/25 rounded-full blur-[60px] pointer-events-none" />

        {/* Card Header Strip */}
        <div
          className="flex items-center justify-between pb-3 border-b border-white/[0.08] relative z-20"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-[#F5F7FC] font-semibold tracking-wider">
              VEMULAPALLI AKASH
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#39D9F2] bg-[#39D9F2]/10 border border-[#39D9F2]/30 px-2 py-0.5 rounded-full">
            AI/ML & FULL STACK
          </span>
        </div>

        {/* Center: Akash's Profile Image with Holographic Animated Border */}
        <div
          className="relative my-4 w-full h-[68%] rounded-2xl overflow-hidden border-2 border-white/10 group shadow-2xl flex items-center justify-center bg-[#080A0F]"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Animated Conic Gradient Glow behind image */}
          <div
            className="absolute -inset-1 bg-gradient-to-r from-[#4385FF] via-[#9067FF] to-[#39D9F2] rounded-2xl opacity-40 blur-md group-hover:opacity-75 transition-opacity duration-500 animate-pulse"
          />

          {/* Actual User Profile Image */}
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <Image
              src="/profile.jpeg"
              alt="Vemulapalli Akash — AI/ML Engineer & Full Stack Developer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle high-tech gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F]/80 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* 3D Floating Pop-Out Badge 1: Top Left Trophy */}
          <div
            className="absolute top-3 left-3 bg-[#080A0F]/90 backdrop-blur-md border border-amber-500/40 rounded-lg px-2.5 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center gap-1.5 transition-transform duration-300"
            style={{ transform: "translateZ(45px)" }}
          >
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] font-mono font-bold text-amber-300">
              PRAJWALAN &apos;26 2ND
            </span>
          </div>

          {/* 3D Floating Pop-Out Badge 2: Bottom Right Security Tag */}
          <div
            className="absolute bottom-3 right-3 bg-[#080A0F]/90 backdrop-blur-md border border-[#39D9F2]/40 rounded-lg px-2.5 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.6)] flex items-center gap-1.5 transition-transform duration-300"
            style={{ transform: "translateZ(45px)" }}
          >
            <Shield className="w-3.5 h-3.5 text-[#39D9F2]" />
            <span className="text-[10px] font-mono font-bold text-[#39D9F2]">
              ZERO-TRUST ARCH
            </span>
          </div>
        </div>

        {/* Card Footer: Live Capabilities Bar */}
        <div
          className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#A0A9B8]"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="flex items-center gap-2">
            <Brain className="w-3.5 h-3.5 text-[#4385FF]" />
            <span>PyTorch • FastAPI • Next.js</span>
          </div>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available
          </span>
        </div>
      </div>
    </div>
  );
}
