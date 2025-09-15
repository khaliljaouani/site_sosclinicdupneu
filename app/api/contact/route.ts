import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  phone: z.string().min(6),
  message: z.string().min(5),
  hp_field: z.string().optional() // honeypot
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success || (parsed.data.hp_field && parsed.data.hp_field.trim() !== "")) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const { email, name, phone, message } = parsed.data;

  // Configure ton transporteur (MAIL_HOST, MAIL_USER, MAIL_PASS en variables d’env.)
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST!,
    port: Number(process.env.MAIL_PORT ?? "587"),
    secure: false,
    auth: { user: process.env.MAIL_USER!, pass: process.env.MAIL_PASS! }
  });

  await transporter.sendMail({
    from: `"Site Pneumatique" <no-reply@exemple-pneu.fr>`,
    to: process.env.CONTACT_TO ?? "toi@exemple.com",
    replyTo: email,
    subject: `Demande de dépannage – ${name}`,
    text: `De: ${name} (${email}, ${phone})\n\n${message}`,
    html: `<p><strong>De:</strong> ${name} (${email}, ${phone})</p><p>${message}</p>`
  });

  return NextResponse.json({ ok: true });
}
