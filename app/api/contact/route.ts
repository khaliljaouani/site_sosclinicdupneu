import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json().catch(() => null) as any;
  const { name, email, phone, message } = data || {};
  if (!name || !email || !phone || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "ssl0.ovh.net",
    port: Number(process.env.MAIL_PORT || 587),
    secure: false, // STARTTLS sur 587
    auth: {
      user: process.env.MAIL_USER, // ex: contact@ton-domaine.fr
      pass: process.env.MAIL_PASS,
    },
    tls: { ciphers: "TLSv1.2" },
  });

  await transporter.sendMail({
    from: `"SOS Clinic du Pneu" <${process.env.MAIL_USER}>`,
    to: process.env.CONTACT_TO, // où tu reçois les messages
    replyTo: email,
    subject: `Nouveau message de ${name} (${phone})`,
    text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\n${message}`,
  });

  return NextResponse.json({ ok: true });
}
