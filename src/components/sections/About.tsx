"use client";

import React, { useState } from "react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, Award, Compass, ShieldCheck, CheckCircle2, Calendar, MapPin } from "lucide-react";

const timelineEvents = [
  {
    year: "2021",
    title: "Secondary School Honors (10th)",
    institution: "Tirumala High School",
    score: "98%",
    description: "Graduated top of class with foundational distinction in science and mathematics.",
  },
  {
    year: "2021 – 2023",
    title: "Higher Secondary Certificate (12th)",
    institution: "Tirumala Junior Kalasala",
    score: "82%",
    description: "Deepened quantitative foundations in Mathematics, Physics, and analytical logic.",
  },
  {
    year: "2023 – 2027",
    title: "B.Tech in Computer Science & Engineering",
    institution: "SRKR Engineering College, Bhimavaram",
    score: "CGPA: 7.2 / 10",
    description: "Specializing in AI/ML systems, distributed architectures, cybersecurity protocols, and full-stack engineering.",
  },
  {
    year: "2024 – Present",
    title: "Technical Team Lead & Organizer",
    institution: "TEDxSRKR & Event Organizing Cell",
    score: "Campus Leadership",
    description: "Leading software development and deployment for collegiate events and tech symposiums with 500+ attendees.",
  },
  {
    year: "2026",
    title: "PRAJWALAN 2026 Runner-Up & Production Intern",
    institution: "SRKR Engineering College & Stikbook Pvt Ltd",
    score: "2nd Prize / 100+ Teams",
    description: "Secured 2nd place in national hackathon and completed 3-month Java Full Stack internship building live production services.",
  },
];

export function About() {
  const [activeEduTab, setActiveEduTab] = useState(0);

  return (
    <section id="about" className="py-20 sm:py-28 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background & Journey"
          title="Beyond"
          highlightedTitle="Writing Code."
          description="A final-year engineering student blending artificial intelligence, resilient backend architectures, and production-grade software delivery."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Biography & Philosophy Left Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#10141D] border border-white/[0.08] rounded-xl p-6 sm:p-8 glass-card space-y-5">
              <h3 className="text-xl font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif] flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-[#4385FF]" />
                Engineering Philosophy & Core Focus
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#A0A9B8] leading-relaxed">
                <p>
                  I am a final-year Computer Science and Engineering student at <strong className="text-[#F5F7FC]">SRKR Engineering College</strong>. My work focuses on building production-style AI applications, intelligent agent workflows, explainable deep learning systems, and secure full-stack platforms.
                </p>
                <p>
                  I enjoy understanding complex problems, designing scalable architectures, and transforming technical ideas into useful applications.
                </p>
                <p>
                  My engineering approach combines AI innovation with security, reliability, and practical software development. I treat security not as an afterthought, but as an architectural prerequisite: utilizing JWT authentication, AES-256 encryption, role-based access control, audit logging, and zero-trust storage principles.
                </p>
              </div>

              {/* Core Pillars Mini-Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.06]">
                <div className="p-3 rounded-lg bg-[#141A25]/60 border border-white/[0.06]">
                  <p className="font-mono text-xs text-[#39D9F2] font-semibold">01. AI / ML</p>
                  <p className="text-xs text-[#F5F7FC] mt-1">Grounded, Explainable, Confident Pipelines</p>
                </div>
                <div className="p-3 rounded-lg bg-[#141A25]/60 border border-white/[0.06]">
                  <p className="font-mono text-xs text-[#4385FF] font-semibold">02. Security</p>
                  <p className="text-xs text-[#F5F7FC] mt-1">Zero-Trust, RBAC & End-to-End Encryption</p>
                </div>
                <div className="p-3 rounded-lg bg-[#141A25]/60 border border-white/[0.06]">
                  <p className="font-mono text-xs text-[#9067FF] font-semibold">03. Systems</p>
                  <p className="text-xs text-[#F5F7FC] mt-1">Microservices, WebRTC & DHT Protocols</p>
                </div>
              </div>
            </div>

            {/* Technical Interests Chips */}
            <div className="bg-[#10141D] border border-white/[0.08] rounded-xl p-6 glass-card space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#39D9F2]">
                Key Engineering Domains & Focus Areas:
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-[#F5F7FC]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4385FF]" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Journey Right Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="bg-[#10141D] border border-white/[0.08] rounded-xl p-6 glass-card space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#39D9F2]" />
                  <h3 className="text-base font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
                    Academic History
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#A0A9B8]">Verified</span>
              </div>

              {/* Education Tabs */}
              <div className="flex gap-1.5 bg-[#080A0F] p-1 rounded-lg border border-white/[0.06]">
                {profile.education.map((edu, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveEduTab(idx)}
                    className={`flex-1 text-xs py-1.5 px-2 rounded-md font-mono transition-all cursor-pointer ${
                      activeEduTab === idx
                        ? "bg-[#4385FF] text-white font-semibold shadow-[0_0_10px_rgba(67,133,255,0.4)]"
                        : "text-[#A0A9B8] hover:text-[#F5F7FC]"
                    }`}
                  >
                    {idx === 0 ? "B.Tech" : idx === 1 ? "12th" : "10th"}
                  </button>
                ))}
              </div>

              {/* Active Education Detail Box */}
              <div className="space-y-3 pt-1 animate-in fade-in duration-200">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#F5F7FC]">
                    {profile.education[activeEduTab].degree}
                  </h4>
                  <p className="text-xs text-[#39D9F2] mt-0.5">
                    {profile.education[activeEduTab].institution}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#A0A9B8] pt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#4385FF]" />
                    {profile.education[activeEduTab].duration}
                  </span>
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {profile.education[activeEduTab].score}
                  </span>
                </div>

                <p className="text-xs text-[#A0A9B8] pt-2 border-t border-white/[0.06] leading-relaxed">
                  {profile.education[activeEduTab].details}
                </p>
              </div>
            </div>

            {/* Interactive Timeline Journey */}
            <div className="bg-[#10141D] border border-white/[0.08] rounded-xl p-6 glass-card space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#A0A9B8]">
                Technical Milestones:
              </h3>

              <div className="relative pl-5 space-y-4 border-l border-white/[0.1]">
                {timelineEvents.map((event, idx) => (
                  <div key={idx} className="relative group">
                    {/* Bullet node */}
                    <div className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-[#4385FF] border-2 border-[#080A0F] group-hover:scale-125 group-hover:bg-[#39D9F2] transition-transform" />
                    
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-[#39D9F2] font-semibold">{event.year}</span>
                        <span className="text-[10px] font-mono text-emerald-400">{event.score}</span>
                      </div>
                      <p className="text-xs font-medium text-[#F5F7FC] mt-0.5">
                        {event.title}
                      </p>
                      <p className="text-[11px] text-[#A0A9B8] mt-0.5 leading-snug">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
