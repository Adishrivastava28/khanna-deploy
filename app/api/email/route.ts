import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const { name, email, msg, location, number, sub } = body;

    // Validate required fields
    if (!name || !email || !msg || !location || !number || !sub) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    // Create a transporter with Gmail configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the mail options
    const mailOptions = {
      from: email,
      to: process.env.TO_USER, // Change this to your desired recipient email
      subject: sub,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${msg}</p>
        <p>Location: ${location}</p>
        <p>Number: ${number}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    // Respond with a success message
    return new NextResponse(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    
  } catch (error) {
    console.error('Error sending email:', error);
    // Respond with an error message if email sending fails
    return new NextResponse("Failed to send email", { status: 500 });
  }
}
