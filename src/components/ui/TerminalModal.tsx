"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";
import { achievements } from "@/data/achievements";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [input, setInput] = useState("");
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs sm:text-sm">
          <p className="text-[#39D9F2] font-semibold">
            Vemulapalli Akash — Interactive Engineering CLI v1.0.0
          </p>
          <p className="text-[#A0A9B8]">
            Type <span className="text-[#4385FF] font-bold">help</span> to list available commands, or <span className="text-[#4385FF] font-bold">exit</span> to close.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    const cmd = trimmed.toLowerCase();

    if (!cmd) return;

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-[#F5F7FC] font-semibold mb-1">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[#A0A9B8]">
              <div><span className="text-[#39D9F2] font-mono">about</span> - Background & education</div>
              <div><span className="text-[#39D9F2] font-mono">skills</span> - Technical competencies</div>
              <div><span className="text-[#39D9F2] font-mono">projects</span> - 4 core engineering systems</div>
              <div><span className="text-[#39D9F2] font-mono">experience</span> - Internship at Stikbook</div>
              <div><span className="text-[#39D9F2] font-mono">achievements</span> - Hackathons & certifications</div>
              <div><span className="text-[#39D9F2] font-mono">contact</span> - Reach out via email/socials</div>
              <div><span className="text-[#39D9F2] font-mono">resume</span> - Download verified resume.pdf</div>
              <div><span className="text-[#39D9F2] font-mono">clear</span> - Clear terminal buffer</div>
              <div><span className="text-[#39D9F2] font-mono">exit</span> - Close terminal console</div>
            </div>
          </div>
        );
        break;

      case "about":
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#A0A9B8]">
            <p className="text-[#F5F7FC] font-semibold">{profile.name}</p>
            <p>{profile.bio}</p>
            <p className="text-[#39D9F2]">Education: {profile.education[0].degree} — {profile.education[0].score}</p>
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-2 text-xs">
            {skillCategories.map((cat) => (
              <div key={cat.id}>
                <span className="text-[#4385FF] font-semibold">{cat.title}: </span>
                <span className="text-[#A0A9B8]">
                  {cat.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-xs">
            {projects.map((p) => (
              <div key={p.id} className="border-l-2 border-[#4385FF]/40 pl-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#F5F7FC] font-semibold">{p.title}</span>
                  <span className="text-[10px] text-[#39D9F2] font-mono">[{p.status}]</span>
                </div>
                <p className="text-[#A0A9B8] text-[11px]">{p.shortDescription}</p>
                <p className="text-[#9067FF] text-[10px]">{p.techStack.join(" • ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#A0A9B8]">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-[#39D9F2]/50 pl-2">
                <p className="text-[#F5F7FC] font-semibold">{exp.role} @ {exp.company}</p>
                <p className="text-[#39D9F2] text-[11px]">{exp.duration} ({exp.type})</p>
                <ul className="list-disc list-inside mt-1 space-y-0.5">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;

      case "achievements":
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#A0A9B8]">
            {achievements.map((a) => (
              <div key={a.id} className="flex items-start gap-2">
                <span className="text-[#39D9F2] font-mono">[{a.year}]</span>
                <div>
                  <span className="text-[#F5F7FC] font-medium">{a.title}</span>
                  <p className="text-[11px]">{a.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs text-[#A0A9B8]">
            <p><span className="text-[#39D9F2]">Email:</span> <a href={`mailto:${profile.email}`} className="text-[#4385FF] hover:underline">{profile.email}</a></p>
            <p><span className="text-[#39D9F2]">Phone:</span> {profile.phone}</p>
            <p><span className="text-[#39D9F2]">GitHub:</span> <a href={profile.github} target="_blank" rel="noreferrer" className="text-[#4385FF] hover:underline">{profile.github}</a></p>
            <p><span className="text-[#39D9F2]">LinkedIn:</span> <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[#4385FF] hover:underline">{profile.linkedin}</a></p>
          </div>
        );
        break;

      case "resume":
        outputNode = (
          <div className="text-xs text-[#A0A9B8] space-y-1">
            <p className="text-emerald-400">Opening resume...</p>
            <a
              href="/resume.pdf"
              download="Vemulapalli_Akash_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-[#39D9F2] underline hover:text-[#4385FF]"
            >
              Click here if download does not trigger automatically
            </a>
          </div>
        );
        window.open("/resume.pdf", "_blank");
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
      case "quit":
        onClose();
        return;

      default:
        outputNode = (
          <p className="text-red-400 text-xs">
            Command not recognized: <span className="font-mono">{cmd}</span>. Type <span className="text-[#39D9F2] font-mono">help</span> for a list of available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: outputNode }]);
    setInput("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`w-full bg-[#0A0D14] border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 font-mono ${
          isMaximized ? "h-[90vh] max-w-5xl" : "h-[500px] max-w-2xl"
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#10141D] border-b border-white/[0.08] select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span
                className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer"
                onClick={() => setIsMaximized(!isMaximized)}
              />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <TerminalIcon className="w-4 h-4 text-[#4385FF]" />
            <span className="text-xs text-[#A0A9B8]">akash@portfolio: ~ (bash)</span>
          </div>

          <div className="flex items-center gap-1 text-[#A0A9B8]">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-white rounded transition-colors"
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-white rounded transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Scroll Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#F5F7FC]">
                <span className="text-[#39D9F2]">akash@portfolio:~$</span>
                <span className="text-[#4385FF] font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form
          onSubmit={handleFormSubmit}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#0C1018] border-t border-white/[0.08]"
        >
          <span className="text-[#39D9F2] text-xs sm:text-sm">akash@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type 'help' for commands..."
            className="flex-1 bg-transparent text-xs sm:text-sm text-[#F5F7FC] focus:outline-none font-mono"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="text-[#A0A9B8] hover:text-[#39D9F2] transition-colors p-1"
            title="Execute"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
