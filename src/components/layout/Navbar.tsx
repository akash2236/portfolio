"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Terminal, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { TerminalModal } from "@/components/ui/TerminalModal";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Leadership", href: "/#leadership" },
  { name: "Achievements", href: "/#achievements" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section on homepage
      if (pathname === "/") {
        const sections = ["about", "skills", "projects", "experience", "leadership", "achievements", "contact"];
        let current = "";
        for (const s of sections) {
          const el = document.getElementById(s);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom >= 200) {
              current = s;
              break;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080A0F]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Monogram Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Vemulapalli Akash Portfolio Home"
            >
              <div className="w-10 h-10 rounded-lg bg-[#141A25] border border-white/10 group-hover:border-[#4385FF]/50 flex items-center justify-center transition-all duration-200 shadow-[0_0_15px_rgba(67,133,255,0.15)] group-hover:shadow-[0_0_20px_rgba(67,133,255,0.35)]">
                <span className="font-mono font-bold text-sm text-[#F5F7FC] group-hover:text-[#4385FF] transition-colors">
                  VA
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-[#F5F7FC] font-['Space_Grotesk',sans-serif] group-hover:text-[#4385FF] transition-colors">
                  Vemulapalli Akash
                </span>
                <span className="text-[10px] font-mono text-[#A0A9B8] tracking-wider uppercase">
                  AI/ML & Full Stack
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#10141D]/70 border border-white/[0.08] rounded-full px-3 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("/#", "");
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-[#4385FF] text-white shadow-[0_0_12px_rgba(67,133,255,0.5)] font-semibold"
                        : "text-[#A0A9B8] hover:text-[#F5F7FC] hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Terminal CLI Toggle */}
              <button
                onClick={() => setIsTerminalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141A25] hover:bg-[#1C2536] border border-white/10 text-xs font-mono text-[#A0A9B8] hover:text-[#39D9F2] transition-colors cursor-pointer"
                title="Open Interactive Terminal"
              >
                <Terminal className="w-3.5 h-3.5 text-[#39D9F2]" />
                <span className="hidden lg:inline">CLI</span>
              </button>

              {/* Resume Download CTA */}
              <a
                href={profile.resumePath}
                download="Vemulapalli_Akash_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#4385FF] hover:bg-[#3273EC] text-white text-xs font-medium transition-all shadow-[0_0_15px_rgba(67,133,255,0.3)] hover:shadow-[0_0_25px_rgba(67,133,255,0.5)] cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsTerminalOpen(true)}
                className="p-2 rounded-lg bg-[#141A25] border border-white/10 text-[#39D9F2]"
                aria-label="Open Terminal"
              >
                <Terminal className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#141A25] border border-white/10 text-[#F5F7FC] hover:text-[#4385FF] focus:outline-none"
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#080A0F]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col justify-between overflow-y-auto z-40 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-2">
              <p className="text-[11px] font-mono uppercase tracking-widest text-[#A0A9B8] px-3 mb-1">
                Navigation
              </p>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-medium px-4 py-3 rounded-lg text-[#F5F7FC] hover:bg-[#141A25] hover:text-[#4385FF] transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A0A9B8]" />
                </Link>
              ))}
            </nav>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={profile.resumePath}
                download="Vemulapalli_Akash_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#4385FF] text-white font-medium text-sm shadow-[0_0_20px_rgba(67,133,255,0.4)]"
              >
                <FileText className="w-4 h-4" />
                Download Verified Resume (PDF)
              </a>
              <div className="flex items-center justify-between text-xs text-[#A0A9B8] px-1 font-mono">
                <span>{profile.location}</span>
                <span className="text-emerald-400">● Open for Roles</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </>
  );
}
