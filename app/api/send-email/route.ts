import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import EmailTemplate from "./email-template";

export async function POST(req: NextRequest) {
  const { fullName, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Add this to bypass SSL verification
    },
  });

  try {
    const emailHtml = await render(
      EmailTemplate({ fullName, email, phone, message })
    );

    const mailOptions = {
      from: `${fullName} <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL,
      subject: "Contact Us Form Submission",
      html: emailHtml,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message);
      return NextResponse.json(
        { message: "Error sending email", error: error.message },
        { status: 500 }
      );
    } else {
      console.error("An unknown error occurred");
      return NextResponse.json(
        { message: "Unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
