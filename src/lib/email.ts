import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // אם זה בקוד צד שרת
// או: const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY); // אם זה בצד לקוח

export const sendEmail = async ({
  to,
  from = 'סיון דקל <no-reply@sivan-dekel.com>',
  subject,
  html
}: {
  to: string;
  from?: string;
  subject: string;
  html: string;
}) => {
  try {
    const { data, error } = await resend.emails.send({
      to,
      from,
      subject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      throw error;
    }

    return data;
  } catch (err) {
    console.error('Failed to send email:', err);
    throw err;
  }
};
