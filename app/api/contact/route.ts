import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Jelainy Contact Form <noreply@jelainy.com>",
    to: "jelainyrg@gmail.com",
    bcc: "grink.tomas@gmail.com",
    replyTo: email,
    subject: `New Contact Request from ${name}${subject ? ` — ${subject}` : ""}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#4a8fe7 0%,#7b6fc4 100%);padding:36px 40px;text-align:center;">
              <p style="margin:0;color:rgba(255,255,255,0.85);font-size:12px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">jelainy.com</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:26px;font-weight:700;">New Message ✉️</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">

              <!-- Sender info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9ff;border-radius:10px;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#4a8fe7;">From</p>
                    <p style="margin:0 0 4px;font-size:18px;font-weight:700;color:#1a1a2e;">${name}</p>
                    <p style="margin:0;font-size:14px;color:#6b7280;">${email}</p>
                  </td>
                </tr>
              </table>

              ${subject ? `
              <!-- Subject -->
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#4a8fe7;">Subject</p>
              <p style="margin:0 0 28px;font-size:16px;font-weight:600;color:#1a1a2e;">${subject}</p>
              ` : ""}

              <!-- Message -->
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#4a8fe7;">Message</p>
              <div style="background:#f8f9ff;border-left:4px solid #4a8fe7;border-radius:0 10px 10px 0;padding:20px 24px;">
                <p style="margin:0;font-size:15px;line-height:1.7;color:#374151;white-space:pre-wrap;">${message}</p>
              </div>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#4a8fe7 0%,#7b6fc4 100%);color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:14px 32px;border-radius:50px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #f0f0f0;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">This message was sent via the contact form on <strong>jelainy.com</strong></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  });

  if (error) {
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }

  return Response.json({ success: true });
}
