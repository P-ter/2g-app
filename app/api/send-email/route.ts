import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type } = body;

    let emailData: any = {
      to_email: 'phathduong96@gmail.com',
      from_name: '2G Upgrade App',
    };

    if (type === 'punishment') {
      const { fullName, location } = body;
      emailData.subject = '🤭 Someone chose "No" - Punishment Form Submitted';
      emailData.message = `
Punishment Form Submission

Full Name: ${fullName}
School/Work & Free Time: ${location || 'Not provided'}

They chose "No" and had to fill out the punishment form! 😂
      `;
    } else if (type === 'collaboration') {
      const { fullName, workSchool, hobby, freeTime } = body;
      emailData.subject = '✅ Someone chose "Yes" - Collaboration Form Submitted';
      emailData.message = `
Collaboration Form Submission

Full Name: ${fullName}
Work/School: ${workSchool}
Hobby: ${hobby}
Free Time: ${freeTime}

They chose "Yes" and filled out the full collaboration form! 🎉
      `;
    }

    // Store the email data for client-side sending
    // In a production app, you might want to use server-side email sending
    console.log('Email data prepared:', emailData);

    return NextResponse.json({
      success: true,
      emailData,
      message: 'Email data prepared successfully'
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process email data' },
      { status: 500 }
    );
  }
}