"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Shield, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#080A0F] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#141A25] border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-[#4385FF]">
                VA
              </div>
              <span className="text-lg font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
                {profile.name}
              </span>
            </div>
            <p className="text-sm text-[#A0A9B8] max-w-md leading-relaxed">
              {profile.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#39D9F2]">
              <Shield className="w-3.5 h-3.5" />
              <span>Security-First Architecture • Responsible AI • Full Stack</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F5F7FC]">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-[#A0A9B8]">
              <li><Link href="/#about" className="hover:text-[#4385FF] transition-colors">About Me</Link></li>
              <li><Link href="/#skills" className="hover:text-[#4385FF] transition-colors">Technical Skills</Link></li>
              <li><Link href="/#projects" className="hover:text-[#4385FF] transition-colors">Featured Projects</Link></li>
              <li><Link href="/#experience" className="hover:text-[#4385FF] transition-colors">Experience</Link></li>
              <li><Link href="/#leadership" className="hover:text-[#4385FF] transition-colors">Leadership & Roles</Link></li>
              <li><Link href="/#achievements" className="hover:text-[#4385FF] transition-colors">Achievements</Link></li>
              <li><Link href="/#contact" className="hover:text-[#4385FF] transition-colors">Contact Form</Link></li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#F5F7FC]">
              Direct Contact
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-[#A0A9B8] hover:text-[#4385FF] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#4385FF]" />
                  <span>{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#A0A9B8] hover:text-[#4385FF] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#F5F7FC]" />
                  <span>github.com/akash2236</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#A0A9B8] hover:text-[#4385FF] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#39D9F2]" />
                  <span>linkedin.com/in/v-akash9371</span>
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Opportunities
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0A9B8]">
          <p>© {currentYear} Vemulapalli Akash. All verified portfolio information.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#A0A9B8] hover:text-[#4385FF] transition-colors group cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
