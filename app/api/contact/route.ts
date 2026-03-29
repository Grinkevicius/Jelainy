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
<body style="margin:0;padding:0;background:#f0f2f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

          <!-- Header bar -->
          <tr>
            <td style="background:linear-gradient(135deg,#4a8fe7,#7b6fc4);border-radius:12px 12px 0 0;padding:20px 28px;">
              <p style="margin:0;color:rgba(255,255,255,0.9);font-size:12px;letter-spacing:1px;text-transform:uppercase;font-weight:700;">New Contact Request</p>
              <p style="margin:4px 0 0;color:rgba(255,255,255,0.65);font-size:12px;">jelainy.com</p>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#ffffff;border-radius:0 0 12px 12px;padding:28px;">

              <!-- Sender row -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="width:44px;vertical-align:top;">
                    <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#4a8fe7,#7b6fc4);text-align:center;line-height:40px;color:#fff;font-size:16px;font-weight:700;">${name.charAt(0).toUpperCase()}</div>
                  </td>
                  <td style="padding-left:12px;vertical-align:top;">
                    <p style="margin:0;font-size:15px;font-weight:700;color:#111827;">${name}</p>
                    <p style="margin:2px 0 0;font-size:13px;color:#6b7280;">${email}</p>
                  </td>
                </tr>
              </table>

              ${subject ? `<p style="margin:0 0 16px;font-size:13px;font-weight:600;color:#4a8fe7;background:#f0f5ff;display:inline-block;padding:4px 12px;border-radius:20px;">${subject}</p><br/>` : ""}

              <!-- Message -->
              <p style="margin:0 0 24px;font-size:14px;line-height:1.75;color:#374151;white-space:pre-wrap;">${message}</p>

              <!-- Reply button -->
              <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#4a8fe7,#7b6fc4);color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;padding:10px 24px;border-radius:50px;">Reply to ${name}</a>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 4px 0;text-align:center;">
              <p style="margin:0;font-size:11px;color:#9ca3af;">jelainy.com &nbsp;·&nbsp; made by <a href="https://grinkt.com" style="color:#9ca3af;text-decoration:underline;">grinkt.com</a></p>
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
