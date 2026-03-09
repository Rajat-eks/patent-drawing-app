import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  organization?: string;
  message?: string;
};

const getEnv = (key: string) => process.env[key]?.trim();

const requiredEnvs = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];

function hasMailConfig(): boolean {
  return requiredEnvs.every((key) => Boolean(getEnv(key)));
}

const clean = (value?: string) => value?.trim() || "";

export async function POST(request: Request) {
  if (!hasMailConfig()) {
    return NextResponse.json(
      {
        message:
          "Email service is not configured. Please set SMTP environment variables.",
      },
      { status: 500 },
    );
  }

  try {
    const body = (await request.json()) as ContactBody;
    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const company = clean(body.company || body.organization);
    const message = clean(body.message);

    if (!email) {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 },
      );
    }

    if (!name && !phone && !message && !company) {
      return NextResponse.json(
        { message: "Please fill at least one more field." },
        { status: 400 },
      );
    }

    const smtpPort = Number(getEnv("SMTP_PORT")) || 587;
    const secure = smtpPort === 465;
    const transporter = nodemailer.createTransport({
      host: getEnv("SMTP_HOST"),
      port: smtpPort,
      secure,
      auth: {
        user: getEnv("SMTP_USER"),
        pass: getEnv("SMTP_PASS"),
      },
    });

    const fromEmail = getEnv("SMTP_FROM") || getEnv("SMTP_USER");
    const toEmail = getEnv("SMTP_TO") || getEnv("SMTP_USER");

    const html = `
      <h2>New Website Form Submission</h2>
      <p><strong>Name:</strong> ${name || "-"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Company/Organization:</strong> ${company || "-"}</p>
      <p><strong>Message:</strong> ${message || "-"}</p>
    `;

    const text = [
      "New Website Form Submission",
      `Name: ${name || "-"}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Company/Organization: ${company || "-"}`,
      `Message: ${message || "-"}`,
    ].join("\n");

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: "New Form Submission from Website",
      text,
      html,
    });

    return NextResponse.json(
      { message: "Form submitted and email sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact email API error:", error);
    return NextResponse.json(
      { message: "Unable to send email right now." },
      { status: 500 },
    );
  }
}
