"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const posRef = useRef(pos);
  posRef.current = pos;

  useEffect(() => {
    // Only desktop with fine pointer
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          "button, a, input, textarea, select, [role='button'], [data-cursor='pointer']"
        );
        if (interactiveEl) {
          setIsHovered(true);
          if (interactiveEl.tagName === "A" || interactiveEl.closest("a")) {
            setHoverType("link");
          } else if (interactiveEl.tagName === "BUTTON" || interactiveEl.closest("button")) {
            setHoverType("button");
          } else {
            setHoverType("input");
          }
        } else {
          setIsHovered(false);
          setHoverType(null);
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
    };

    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth lerp follower loop
    let animId: number;
    let currentX = posRef.current.x;
    let currentY = posRef.current.y;

    const loop = () => {
      const targetX = posRef.current.x;
      const targetY = posRef.current.y;

      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      setFollowerPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  // Clean old ripples
  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Click Ripple Bursts */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="fixed rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 border-2 border-[#39D9F2] animate-ping opacity-75"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: "36px",
            height: "36px",
          }}
        />
      ))}

      {/* Main Core Dot (Fast, Direct) */}
      <div
        className="fixed w-3 h-3 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_12px_#39D9F2]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          background: isHovered
            ? "linear-gradient(135deg, #39D9F2, #4385FF)"
            : "radial-gradient(circle, #39D9F2 20%, #4385FF 100%)",
          transform: `translate(-50%, -50%) scale(${
            isClicking ? 0.6 : isHovered ? 1.4 : 1
          })`,
        }}
      />

      {/* Outer Smooth Follower Ring with Rotating Cybernetic Reticle */}
      <div
        className="fixed rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background-color] duration-200 ease-out flex items-center justify-center backdrop-blur-[1px]"
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          width: isHovered ? "56px" : isClicking ? "26px" : "36px",
          height: isHovered ? "56px" : isClicking ? "26px" : "36px",
          border: isHovered
            ? "1.5px solid rgba(57, 217, 242, 0.75)"
            : "1px solid rgba(67, 133, 255, 0.4)",
          backgroundColor: isHovered
            ? "rgba(67, 133, 255, 0.12)"
            : "rgba(67, 133, 255, 0.03)",
          boxShadow: isHovered
            ? "0 0 24px rgba(57, 217, 242, 0.35), inset 0 0 12px rgba(67, 133, 255, 0.2)"
            : "0 0 12px rgba(67, 133, 255, 0.15)",
        }}
      >
        {/* Rotating Outer Reticle Dashes when hovering */}
        {isHovered && (
          <div className="absolute inset-0 rounded-full border border-dashed border-[#9067FF]/60 animate-spin" style={{ animationDuration: "6s" }} />
        )}
      </div>
    </div>
  );
}
