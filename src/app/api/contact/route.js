import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // ✅ ALWAYS WORKS
      to: ["ankushshetty528@gmail.com"], // email where YOU receive
      subject: "New Contact Form Message",
      html: `
        <h2>New Inquiry from RC ERP Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message", details: error?.message },
      { status: 500 }
    );
  }
}
