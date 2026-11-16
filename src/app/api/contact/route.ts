import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Server-side validation with Zod
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const issues = validationResult.error.issues.map((i) => i.message);
      return NextResponse.json(
        { success: false, error: issues.join(", ") },
        { status: 400 }
      );
    }

    const { name, email, subject, message, honeypot } = validationResult.data;

    // 2. Honeypot spam check
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { success: false, error: "Spam submission rejected." },
        { status: 400 }
      );
    }

    // 3. Optional Resend Email Dispatch
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "aakash.srisai@gmail.com";

    if (resendApiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email,
            subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          }),
        });

        if (!resendRes.ok) {
          const errorData = await resendRes.text();
          console.warn("Resend API responded with error:", errorData);
          // Fallback response with mailto confirmation
          return NextResponse.json({
            success: true,
            message: `Thank you, ${name}! Your inquiry was logged. You can also email directly at ${recipientEmail}.`,
          });
        }

        return NextResponse.json({
          success: true,
          message: `Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon.`,
        });
      } catch (emailErr) {
        console.error("Resend delivery exception:", emailErr);
      }
    }

    // 4. Fallback when RESEND_API_KEY is not configured:
    // Log the message cleanly to server console and inform user
    console.log(`[Contact Form Received] From: ${name} <${email}> | Subject: ${subject}`);
    console.log(`[Message Body]: ${message}`);

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your inquiry has been received. You can also connect directly via ${recipientEmail}.`,
    });
  } catch (err: unknown) {
    console.error("Contact API handler error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Server processing error. Please contact aakash.srisai@gmail.com directly.",
      },
      { status: 500 }
    );
  }
}
