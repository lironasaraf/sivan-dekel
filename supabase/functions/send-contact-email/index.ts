import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

console.log("RESEND_API_KEY available:", !!Deno.env.get("RESEND_API_KEY"));

const resendApiKey = Deno.env.get("RESEND_API_KEY");
if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in environment variables");
}

const resend = new Resend(resendApiKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  courseType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    const emailContent = `
      <div dir="rtl" style="font-family: Arial, sans-serif;">
        <h2>טופס יצירת קשר חדש מהאתר</h2>
        <p><strong>שם:</strong> ${formData.name}</p>
        <p><strong>אימייל:</strong> ${formData.email}</p>
        <p><strong>טלפון:</strong> ${formData.phone}</p>
        <p><strong>סוג הקורס המבוקש:</strong> ${formData.courseType}</p>
        <p><strong>הודעה:</strong></p>
        <p>${formData.message || 'אין הודעה נוספת'}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">הודעה זו נשלחה מטופס יצירת הקשר באתר יוונית לכל</p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "סיון דקל <contact@sivandekel.com>", // כתובת העסקית שלך
      to: ["sivan.dek@gmail.com"], // כתובת היעד
      subject: `טופס יצירת קשר חדש מ-${formData.name}`,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
