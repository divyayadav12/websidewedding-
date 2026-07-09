import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, weddingDate, location, message } = body;

    // Save to Database
    const newContact = await prisma.contactMessage.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        weddingDate,
        location,
        message,
      },
    });

    // Send Email via Web3Forms (if key is provided)
    // Replace "YOUR_WEB3FORMS_ACCESS_KEY" with your actual key from https://web3forms.com
    const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY"; 
    
    if (WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY") {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: `${firstName} ${lastName}`,
            email: email,
            subject: `New Wedding Inquiry from ${firstName}`,
            message: `Phone: ${phone}\nDate: ${weddingDate}\nLocation: ${location}\n\nMessage:\n${message}`,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
      }
    }

    return NextResponse.json({ success: true, data: newContact }, { status: 201 });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
