import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validate SMTP credentials are present (must be set as env vars on the server)
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP_USER or SMTP_PASS environment variables are not set on this server.');
      return NextResponse.json(
        { success: false, message: 'Email service is not configured. Please contact the site administrator.' },
        { status: 500 }
      );
    }

    const port = Number(process.env.SMTP_PORT) || 587;
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER || 'smtp.gmail.com',
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipient = data.toOverride || process.env.NEXT_PUBLIC_FORM_SUBMIT_EMAIL || process.env.SMTP_USER;

    // Check header and partner banner images on server disk
    const publicDir = path.join(process.cwd(), 'public');
    const headerImgPath = path.join(publicDir, 'email-tamp', 'Header.png');
    const partnerImgPath = path.join(publicDir, 'email-tamp', 'Partners banner.png');

    const attachments: nodemailer.SendMailOptions['attachments'] = [];

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://chalkyinfo.com';

    let headerSrc = `${siteUrl}/email-tamp/Header.png`;
    if (fs.existsSync(headerImgPath)) {
      attachments.push({
        filename: 'Header.png',
        path: headerImgPath,
        cid: 'headerBanner',
      });
      headerSrc = 'cid:headerBanner';
    }

    let partnerSrc = `${siteUrl}/email-tamp/Partners banner.png`;
    if (fs.existsSync(partnerImgPath)) {
      attachments.push({
        filename: 'Partners banner.png',
        path: partnerImgPath,
        cid: 'partnerBanner',
      });
      partnerSrc = 'cid:partnerBanner';
    }

    // Check social icons in public/social-icons
    const socialDir = path.join(publicDir, 'social-icons');
    const fbSvgPath = path.join(socialDir, 'facebook.svg');
    const instaSvgPath = path.join(socialDir, 'instagram.svg');
    const linkedinSvgPath = path.join(socialDir, 'linkedin.svg');
    const youtubeSvgPath = path.join(socialDir, 'youtube.svg');

    const fbBase64 = fs.existsSync(fbSvgPath)
      ? `data:image/svg+xml;base64,${fs.readFileSync(fbSvgPath).toString('base64')}`
      : `${siteUrl}/social-icons/facebook.svg`;

    const instaBase64 = fs.existsSync(instaSvgPath)
      ? `data:image/svg+xml;base64,${fs.readFileSync(instaSvgPath).toString('base64')}`
      : `${siteUrl}/social-icons/instagram.svg`;

    const linkedinBase64 = fs.existsSync(linkedinSvgPath)
      ? `data:image/svg+xml;base64,${fs.readFileSync(linkedinSvgPath).toString('base64')}`
      : `${siteUrl}/social-icons/linkedin.svg`;

    const youtubeBase64 = fs.existsSync(youtubeSvgPath)
      ? `data:image/svg+xml;base64,${fs.readFileSync(youtubeSvgPath).toString('base64')}`
      : `${siteUrl}/social-icons/youtube.svg`;

    if (data.attachment) {
      attachments.push({
        filename: data.attachment.filename,
        content: data.attachment.content,
        encoding: 'base64',
      });
    }

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"${data.fullName || 'Chalky InfoTech Website'}" <${process.env.SMTP_USER}>`,
      replyTo: data.email,
      to: recipient,
      subject: `[Chalky InfoTech] ${data.subject || 'New Website Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Chalky InfoTech Website Inquiry</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: Arial, Helvetica, sans-serif; -webkit-font-smoothing: antialiased;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f6f8; padding: 20px 0;">
            <tr>
              <td align="center">
                <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="width: 100%; max-width: 640px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                  
                  <!-- 1. HEADER BANNER -->
                  <tr>
                    <td align="center" style="background-color: #7A1F5C; padding: 0;">
                      <img src="${headerSrc}" alt="Chalky InfoTech Header" width="640" style="width: 100%; max-width: 640px; height: auto; display: block; border: 0;" />
                    </td>
                  </tr>

                  <!-- 2. FORM CONTENT BODY -->
                  <tr>
                    <td style="padding: 32px 32px 24px 32px; background-color: #ffffff;">
                      <div style="margin-bottom: 24px;">
                        <span style="display: inline-block; background-color: #FAF5FF; color: #7A1F5C; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(122,31,92,0.2);">
                          Website Contact Form Submission
                        </span>
                        <h2 style="color: #1A1A1A; font-size: 22px; font-weight: 800; margin: 12px 0 6px 0; line-height: 1.3;">
                          New Inquiry Received
                        </h2>
                        <p style="color: #666666; font-size: 14px; margin: 0; line-height: 1.5;">
                          A user has submitted an inquiry on the Chalky InfoTech platform. Below are the details:
                        </p>
                      </div>

                      <!-- Form Details Table -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse: separate; border-spacing: 0; background-color: #FAFAFA; border: 1px solid #EAEAEA; border-radius: 10px; overflow: hidden;">
                        <tr>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #EAEAEA; width: 35%; font-weight: bold; color: #555555; font-size: 13px;">Full Name</td>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #EAEAEA; color: #1A1A1A; font-size: 14px; font-weight: 600;">${data.fullName || 'N/A'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #EAEAEA; font-weight: bold; color: #555555; font-size: 13px;">Email Address</td>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #EAEAEA; color: #7A1F5C; font-size: 14px; font-weight: 600;">
                            <a href="mailto:${data.email}" style="color: #7A1F5C; text-decoration: none;">${data.email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #EAEAEA; font-weight: bold; color: #555555; font-size: 13px;">Company / Org</td>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #EAEAEA; color: #1A1A1A; font-size: 14px;">${data.company || 'N/A'}</td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #EAEAEA; font-weight: bold; color: #555555; font-size: 13px;">Inquiry Category</td>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #EAEAEA; color: #1A1A1A; font-size: 14px;">${data.serviceType || 'General Inquiry'}</td>
                        </tr>
                        
                        ${data.attachment ? `
                        <tr>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #EAEAEA; font-weight: bold; color: #555555; font-size: 13px;">Attachment</td>
                          <td style="padding: 12px 16px; border-bottom: 1px solid #EAEAEA; color: #2e7d32; font-size: 13px; font-weight: bold;">
                            📎 ${data.attachment.filename}
                          </td>
                        </tr>
                        ` : ''}
                        <tr>
                          <td colspan="2" style="padding: 16px; background-color: #ffffff;">
                            <div style="font-size: 12px; font-weight: bold; color: #7A1F5C; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Message Content:</div>
                            <div style="font-size: 14px; color: #333333; line-height: 1.6; white-space: pre-wrap; background-color: #FAF5FF; padding: 14px; border-left: 4px solid #7A1F5C; border-radius: 4px;">${data.message || 'N/A'}</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- 3. PARTNER BANNER -->
                  <tr>
                    <td align="center" style="padding: 10px 0; background-color: #ffffff;">
                      <img src="${partnerSrc}" alt="Chalky InfoTech Partners" width="640" style="width: 100%; max-width: 640px; height: auto; display: block; border: 0;" />
                    </td>
                  </tr>

                  <!-- 4. FOOTER SECTION -->
                  <tr>
                    <td align="center" style="padding: 24px 20px 0 20px; background-color: #ffffff; text-align: center;">
                      
                      <!-- Divider Line -->
                      <div style="border-top: 1px solid #E2E8F0; margin-bottom: 20px; width: 100%;"></div>

                      <!-- Footer Navigation Links -->
                      <div style="margin-bottom: 12px; font-size: 13px; font-weight: 500;">
                        <a href="${siteUrl}/privacy-policy" style="color: #1A1A1A; text-decoration: underline; margin: 0 8px;">Privacy Policy</a>
                        <a href="${siteUrl}/right-to-work" style="color: #1A1A1A; text-decoration: underline; margin: 0 8px;">Right to Work</a>
                        <a href="${siteUrl}/services" style="color: #1A1A1A; text-decoration: underline; margin: 0 8px;">Fair recruitment</a>
                      </div>
                      <div style="margin-bottom: 20px; font-size: 13px; font-weight: 500;">
                        <a href="${siteUrl}/gdpr" style="color: #1A1A1A; text-decoration: underline;">GDPR Compliance</a>
                      </div>

                      <!-- Social Media Icons (Loaded from public/social-icons: Facebook, LinkedIn, Instagram, YouTube) -->
                      <div style="margin-bottom: 20px;">
                        <a href="https://facebook.com" target="_blank" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                          <img src="${fbBase64}" width="24" height="24" alt="Facebook" style="display: inline-block; vertical-align: middle; border: 0;" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                          <img src="${linkedinBase64}" width="24" height="24" alt="LinkedIn" style="display: inline-block; vertical-align: middle; border: 0;" />
                        </a>
                        <a href="https://instagram.com" target="_blank" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                          <img src="${instaBase64}" width="24" height="24" alt="Instagram" style="display: inline-block; vertical-align: middle; border: 0;" />
                        </a>
                        <a href="https://youtube.com" target="_blank" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                          <img src="${youtubeBase64}" width="24" height="24" alt="YouTube" style="display: inline-block; vertical-align: middle; border: 0;" />
                        </a>
                      </div>

                      <!-- Address and Copyright Notice -->
                      <div style="font-size: 12px; color: #1A1A1A; line-height: 1.6; margin-bottom: 24px;">
                        <p style="margin: 0 0 4px 0;">Copyright 2026 Chalkyinfotech. All rights reserved.</p>
                        <p style="margin: 0;">We are located at 128, City Road, London, EC1V 2NX</p>
                        <p style="margin: 0;">United Kingdom</p>
                      </div>

                    </td>
                  </tr>

                  <!-- Solid Color Bottom Bar -->
                  <tr>
                    <td style="background-color: #7A1F5C; height: 16px; font-size: 0; line-height: 0;">&nbsp;</td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      attachments,
    };

    // 1. Send Admin Notification Email
    await transporter.sendMail(mailOptions);

    // 2. Trigger Auto-Reply "Thank You" Email to Sender
    if (data.email) {
      try {
        const autoReplyMailOptions: nodemailer.SendMailOptions = {
          from: `"Chalky InfoTech" <${process.env.SMTP_USER}>`,
          to: data.email,
          subject: `Thank you for contacting Chalky InfoTech!`,
          html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Thank You for Contacting Chalky InfoTech</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: Arial, Helvetica, sans-serif; -webkit-font-smoothing: antialiased;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f6f8; padding: 20px 0;">
                <tr>
                  <td align="center">
                    <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="width: 100%; max-width: 640px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                      
                      <!-- 1. HEADER BANNER -->
                      <tr>
                        <td align="center" style="background-color: #7A1F5C; padding: 0;">
                          <img src="${headerSrc}" alt="Chalky InfoTech Header" width="640" style="width: 100%; max-width: 640px; height: auto; display: block; border: 0;" />
                        </td>
                      </tr>

                      <!-- 2. THANK YOU MESSAGE CONTENT -->
                      <tr>
                        <td style="padding: 32px 32px 24px 32px; background-color: #ffffff;">
                          <div style="margin-bottom: 20px;">
                            <span style="display: inline-block; background-color: #FAF5FF; color: #7A1F5C; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; border: 1px solid rgba(122,31,92,0.2);">
                              Inquiry Received
                            </span>
                            <h2 style="color: #1A1A1A; font-size: 24px; font-weight: 800; margin: 12px 0 8px 0; line-height: 1.3;">
                              Thank You for Reaching Out${data.fullName ? `, ${data.fullName}` : ''}!
                            </h2>
                            <p style="color: #4A5568; font-size: 15px; margin: 0 0 16px 0; line-height: 1.6;">
                              We have successfully received your request regarding <strong>${data.serviceType || data.subject || 'your inquiry'}</strong>.
                            </p>
                            <p style="color: #4A5568; font-size: 15px; margin: 0 0 20px 0; line-height: 1.6;">
                              Our team of talent specialists and enterprise consultants is currently reviewing your details. A Chalky InfoTech representative will reach out to you within <strong>24 business hours</strong>.
                            </p>
                          </div>

                          <!-- Summary Box of Submitted Details -->
                          <div style="background-color: #FAFAFA; border: 1px solid #EAEAEA; border-radius: 10px; padding: 20px; margin-bottom: 24px;">
                            <h4 style="margin: 0 0 12px 0; color: #7A1F5C; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: bold;">
                              Summary of Your Submitted Request:
                            </h4>
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font-size: 14px; color: #333333;">
                              <tr>
                                <td style="padding: 4px 0; width: 35%; color: #666666; font-weight: bold;">Full Name:</td>
                                <td style="padding: 4px 0; font-weight: 600;">${data.fullName || 'N/A'}</td>
                              </tr>
                              <tr>
                                <td style="padding: 4px 0; color: #666666; font-weight: bold;">Email Address:</td>
                                <td style="padding: 4px 0; color: #7A1F5C;">${data.email}</td>
                              </tr>
                              ${data.company ? `
                              <tr>
                                <td style="padding: 4px 0; color: #666666; font-weight: bold;">Company:</td>
                                <td style="padding: 4px 0;">${data.company}</td>
                              </tr>
                              ` : ''}
                              ${data.serviceType ? `
                              <tr>
                                <td style="padding: 4px 0; color: #666666; font-weight: bold;">Category:</td>
                                <td style="padding: 4px 0;">${data.serviceType}</td>
                              </tr>
                              ` : ''}
                              ${data.message ? `
                              <tr>
                                <td colspan="2" style="padding-top: 10px;">
                                  <div style="font-size: 12px; color: #666666; font-weight: bold; margin-bottom: 4px;">Your Message:</div>
                                  <div style="font-size: 13px; color: #333; background-color: #FAF5FF; padding: 10px; border-left: 3px solid #7A1F5C; border-radius: 4px; white-space: pre-wrap;">${data.message}</div>
                                </td>
                              </tr>
                              ` : ''}
                            </table>
                          </div>

                          <div style="border-top: 1px solid #EAEAEA; padding-top: 16px; font-size: 13px; color: #718096; line-height: 1.5;">
                            If you have urgent questions, feel free to reply directly to this email or call our UK desk at <strong>+44 7503 140975</strong> / India desk at <strong>+91 80723 57581</strong>.
                          </div>

                        </td>
                      </tr>

                      <!-- 3. PARTNER BANNER -->
                      <tr>
                        <td align="center" style="padding: 10px 0; background-color: #ffffff;">
                          <img src="${partnerSrc}" alt="Chalky InfoTech Partners" width="640" style="width: 100%; max-width: 640px; height: auto; display: block; border: 0;" />
                        </td>
                      </tr>

                      <!-- 4. FOOTER SECTION -->
                      <tr>
                        <td align="center" style="padding: 24px 20px 0 20px; background-color: #ffffff; text-align: center;">
                          
                          <!-- Divider Line -->
                          <div style="border-top: 1px solid #E2E8F0; margin-bottom: 20px; width: 100%;"></div>

                          <!-- Footer Navigation Links -->
                          <div style="margin-bottom: 12px; font-size: 13px; font-weight: 500;">
                            <a href="${siteUrl}/privacy-policy" style="color: #1A1A1A; text-decoration: underline; margin: 0 8px;">Privacy Policy</a>
                            <a href="${siteUrl}/right-to-work" style="color: #1A1A1A; text-decoration: underline; margin: 0 8px;">Right to Work</a>
                            <a href="${siteUrl}/services" style="color: #1A1A1A; text-decoration: underline; margin: 0 8px;">Fair recruitment</a>
                          </div>
                          <div style="margin-bottom: 20px; font-size: 13px; font-weight: 500;">
                            <a href="${siteUrl}/gdpr" style="color: #1A1A1A; text-decoration: underline;">GDPR Compliance</a>
                          </div>

                          <!-- Social Media Icons -->
                          <div style="margin-bottom: 20px;">
                            <a href="https://facebook.com" target="_blank" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                              <img src="${fbBase64}" width="24" height="24" alt="Facebook" style="display: inline-block; vertical-align: middle; border: 0;" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                              <img src="${linkedinBase64}" width="24" height="24" alt="LinkedIn" style="display: inline-block; vertical-align: middle; border: 0;" />
                            </a>
                            <a href="https://instagram.com" target="_blank" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                              <img src="${instaBase64}" width="24" height="24" alt="Instagram" style="display: inline-block; vertical-align: middle; border: 0;" />
                            </a>
                            <a href="https://youtube.com" target="_blank" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                              <img src="${youtubeBase64}" width="24" height="24" alt="YouTube" style="display: inline-block; vertical-align: middle; border: 0;" />
                            </a>
                          </div>

                          <!-- Address and Copyright Notice -->
                          <div style="font-size: 12px; color: #1A1A1A; line-height: 1.6; margin-bottom: 24px;">
                            <p style="margin: 0 0 4px 0;">Copyright 2026 Chalkyinfotech. All rights reserved.</p>
                            <p style="margin: 0;">We are located at 128, City Road, London, EC1V 2NX</p>
                            <p style="margin: 0;">United Kingdom</p>
                          </div>

                        </td>
                      </tr>

                      <!-- Solid Color Bottom Bar -->
                      <tr>
                        <td style="background-color: #7A1F5C; height: 16px; font-size: 0; line-height: 0;">&nbsp;</td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>
            </body>
            </html>
          `,
          attachments: attachments.filter((a) => a.cid === 'headerBanner' || a.cid === 'partnerBanner'),
        };

        await transporter.sendMail(autoReplyMailOptions);
      } catch (autoReplyErr) {
        console.error('Auto-Reply Email Warning:', autoReplyErr);
      }
    }

    return NextResponse.json({ success: true, message: 'Email and auto-reply sent successfully via SMTP' });
  } catch (error: any) {
    console.error('SMTP Email Error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to send email via SMTP' },
      { status: 500 }
    );
  }
}

