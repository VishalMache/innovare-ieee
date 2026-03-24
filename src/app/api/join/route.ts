import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder_key";
const resendApiKey = process.env.RESEND_API_KEY || "placeholder_resend_key";

const supabase = createClient(supabaseUrl, supabaseKey);
const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, branch, year } = body;

    if (!name || !email || !branch || !year) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Insert into Supabase (will gracefully fail locally if no keys)
    const { data: dbData, error: dbError } = await supabase
      .from('applications')
      .insert([{ name, email, branch, year_of_study: year }])
      .select();

    if (dbError) {
      console.error("Supabase Error:", dbError);
    }

    // 2. Send Email via Resend
    try {
      await resend.emails.send({
        from: 'INNOVARE IEEE <onboarding@innovare-ieee.org>',
        to: [email],
        subject: 'Welcome to the Future - INNOVARE IEEE',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #0a0a0a; color: #ededed; border: 1px solid #333; border-radius: 12px;">
            <h1 style="color: #6d28d9; letter-spacing: -1px; margin-bottom: 20px;">Application Received, ${name}</h1>
            <p style="font-size: 16px; line-height: 1.5; color: #a3a3a3;">We've successfully logged your application for the INNOVARE IEEE Student Branch.</p>
            <p style="font-size: 16px; line-height: 1.5; color: #a3a3a3;">Your journey in building the next generation of tech starts here. We'll be in touch shortly regarding the next steps.</p>
            <br/>
            <p style="font-size: 16px; line-height: 1.5; color: #ededed; font-weight: bold;">Best,<br/>INNOVARE IEEE Team</p>
          </div>
        `
      });
    } catch (emailError) {
      console.error("Resend Error:", emailError);
    }

    // Return success to trigger frontend interaction animation
    return NextResponse.json({ success: true, data: dbData }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
