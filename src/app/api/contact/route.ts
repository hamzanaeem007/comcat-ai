import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, password, email, location, message } = await request.json();

    // Basic email validation (server-side)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }

    // Sanitize inputs (basic sanitization, similar to htmlspecialchars/strip_tags)
    const sanitize = (input: string) => {
      return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .trim();
    };

    const sanitizedName = sanitize(name);
    const sanitizedPassword = sanitize(password);
    const sanitizedEmail = sanitize(email);
    const sanitizedLocation = sanitize(location);
    const sanitizedMessage = sanitize(message);

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: "smtp.your-email-provider.com", // Replace with your SMTP host
      port: 587,
      secure: false, // Use true for port 465, false for other ports
      auth: {
        user: "your-email@your-email-provider.com", // Replace with your email
        pass: "your-email-password", // Replace with your email password or app-specific password
      },
    });

    // Email content
    const mailOptions = {
      from: '"Contact Form" <info@comcat.ai>',
      to: "info@comcat.ai",
      subject: "New Contact Form Submission",
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Password:</strong> ${sanitizedPassword}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Location:</strong> ${sanitizedLocation}</p>
        <p><strong>Message:</strong> ${sanitizedMessage}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Message could not be sent. Please try again later." },
      { status: 500 }
    );
  }
}