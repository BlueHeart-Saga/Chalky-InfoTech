import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipient = data.toOverride || process.env.NEXT_PUBLIC_FORM_SUBMIT_EMAIL || process.env.SMTP_USER;

    const mailOptions = {
      from: `"${data.fullName || 'Chalky InfoTech Website'}" <${process.env.SMTP_USER}>`,
      replyTo: data.email,
      to: recipient,
      subject: `[Chalky InfoTech] ${data.subject || 'New Website Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #7A1F5C;">New Inquiry Received</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Full Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.fullName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company / Org:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.company || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Service Category:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.serviceType || 'General Inquiry'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Subject:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.subject || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Message:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; white-space: pre-wrap;">${data.message || 'N/A'}</td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully via SMTP' });
  } catch (error: any) {
    console.error('SMTP Email Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to send email via SMTP' },
      { status: 500 }
    );
  }
}
