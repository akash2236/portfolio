"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validation";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // If bot filled honeypot, reject immediately
    if (data.honeypot && data.honeypot.length > 0) {
      setSubmissionStatus("error");
      setStatusMessage("Spam prevention triggered.");
      return;
    }

    setSubmissionStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus("success");
        setStatusMessage(
          result.message || "Your message has been received! I'll get back to you promptly."
        );
        reset();
      } else {
        setSubmissionStatus("error");
        setStatusMessage(
          result.error || "Failed to deliver message. Please reach out directly via aakash.srisai@gmail.com."
        );
      }
    } catch {
      setSubmissionStatus("error");
      setStatusMessage(
        "Network connection error. Please email directly at aakash.srisai@gmail.com."
      );
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Have an Interesting Problem?"
          highlightedTitle="Let's Build Something."
          description="I'm interested in engineering opportunities, AI/ML projects, full-stack development, technical collaborations and challenging problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#10141D] border border-white/[0.08] rounded-xl p-6 sm:p-8 glass-card space-y-6">
              <h3 className="text-xl font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif]">
                Direct Contact Channels
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#141A25]/60 hover:bg-[#141A25] border border-white/[0.06] hover:border-[#4385FF]/40 transition-colors group"
                  >
                    <div className="p-2 rounded bg-[#4385FF]/10 text-[#4385FF] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-[#A0A9B8]">Direct Email</p>
                      <p className="text-[#F5F7FC] font-medium group-hover:text-[#4385FF] transition-colors">
                        {profile.email}
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#141A25]/60 hover:bg-[#141A25] border border-white/[0.06] hover:border-[#4385FF]/40 transition-colors group"
                  >
                    <div className="p-2 rounded bg-[#39D9F2]/10 text-[#39D9F2] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-[#A0A9B8]">Mobile / WhatsApp</p>
                      <p className="text-[#F5F7FC] font-medium group-hover:text-[#39D9F2] transition-colors">
                        {profile.phone}
                      </p>
                    </div>
                  </a>
                </li>

                <li>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[#141A25]/60 border border-white/[0.06]">
                    <div className="p-2 rounded bg-[#9067FF]/10 text-[#9067FF] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-[#A0A9B8]">Location</p>
                      <p className="text-[#F5F7FC] font-medium">{profile.location}</p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Verified Profiles */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#A0A9B8]">
                  Verified Developer Profiles:
                </p>
                <div className="flex gap-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#141A25] hover:bg-[#1C2536] border border-white/10 text-xs text-[#F5F7FC] hover:text-[#4385FF] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-[#A0A9B8]" />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#141A25] hover:bg-[#1C2536] border border-white/10 text-xs text-[#F5F7FC] hover:text-[#39D9F2] transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-[#A0A9B8]" />
                  </a>
                </div>
              </div>

              {/* Mailto Fallback Action */}
              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs text-[#A0A9B8] space-y-2">
                <p className="font-medium text-[#F5F7FC]">Prefer your own email client?</p>
                <p>Click below to pre-populate an inquiry draft directly:</p>
                <a
                  href={`mailto:${profile.email}?subject=Engineering%20Opportunity%20/%20Collaboration&body=Hi%20Akash,%0A%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding...`}
                  className="inline-flex items-center gap-1.5 text-[#39D9F2] hover:underline font-mono text-[11px]"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Launch Mail Client (Mailto)
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Right Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#10141D] border border-white/[0.08] rounded-xl p-6 sm:p-8 glass-card">
              <h3 className="text-xl font-bold text-[#F5F7FC] font-['Space_Grotesk',sans-serif] mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Honeypot Field (Hidden from humans, traps bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-hp">Website</label>
                  <input
                    id="website-hp"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("honeypot")}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-[#F5F7FC]">
                      Your Name <span className="text-[#4385FF]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      disabled={submissionStatus === "submitting"}
                      className={`w-full bg-[#141A25] border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#F5F7FC] placeholder-[#A0A9B8]/50 focus:outline-none transition-colors ${
                        errors.name
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-white/[0.08] focus:border-[#4385FF]"
                      }`}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-[#F5F7FC]">
                      Your Email <span className="text-[#4385FF]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. alex@company.com"
                      disabled={submissionStatus === "submitting"}
                      className={`w-full bg-[#141A25] border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#F5F7FC] placeholder-[#A0A9B8]/50 focus:outline-none transition-colors ${
                        errors.email
                          ? "border-red-500/80 focus:border-red-500"
                          : "border-white/[0.08] focus:border-[#4385FF]"
                      }`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-[#F5F7FC]">
                    Subject <span className="text-[#4385FF]">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Engineering Role / AI System Collaboration"
                    disabled={submissionStatus === "submitting"}
                    className={`w-full bg-[#141A25] border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#F5F7FC] placeholder-[#A0A9B8]/50 focus:outline-none transition-colors ${
                      errors.subject
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-white/[0.08] focus:border-[#4385FF]"
                    }`}
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-[#F5F7FC]">
                    Message <span className="text-[#4385FF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    disabled={submissionStatus === "submitting"}
                    className={`w-full bg-[#141A25] border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#F5F7FC] placeholder-[#A0A9B8]/50 focus:outline-none transition-colors resize-y min-h-[120px] ${
                      errors.message
                        ? "border-red-500/80 focus:border-red-500"
                        : "border-white/[0.08] focus:border-[#4385FF]"
                    }`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Status Message Notification */}
                {submissionStatus === "success" && (
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {submissionStatus === "error" && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submissionStatus === "submitting"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#4385FF] hover:bg-[#3273EC] text-white text-xs sm:text-sm font-semibold transition-all shadow-[0_0_20px_rgba(67,133,255,0.4)] disabled:opacity-50 cursor-pointer"
                  >
                    {submissionStatus === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
