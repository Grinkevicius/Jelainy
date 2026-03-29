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
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="520" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.07);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#4a8fe7 0%,#7b6fc4 100%);padding:24px 32px;">
              <p style="margin:0;color:#ffffff;font-size:13px;font-weight:600;">✉️ &nbsp;New contact request · jelainy.com</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:28px 32px;">

              <!-- Sender -->
              <p style="margin:0 0 4px;font-size:17px;font-weight:700;color:#1a1a2e;">${name}</p>
              <p style="margin:0 0 20px;font-size:13px;color:#6b7280;">${email}${subject ? ` &nbsp;·&nbsp; ${subject}` : ""}</p>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #f0f0f0;margin:0 0 20px;" />

              <!-- Message -->
              <p style="margin:0;font-size:15px;line-height:1.7;color:#374151;white-space:pre-wrap;">${message}</p>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#4a8fe7 0%,#7b6fc4 100%);color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;padding:11px 26px;border-radius:50px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:14px 32px;border-top:1px solid #f0f0f0;text-align:center;">
              <p style="margin:0;font-size:11px;color:#9ca3af;">jelainy.com contact form</p>
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
