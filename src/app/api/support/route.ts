import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, subject, message, category } = body;

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify support team

    const ticket = {
      id: Date.now().toString(),
      email,
      subject,
      message,
      category: category || 'general',
      status: 'open',
      createdAt: new Date().toISOString(),
      responses: [],
    };

    return NextResponse.json(
      {
        success: true,
        message: 'Support ticket created successfully',
        ticket,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating support ticket:', error);
    return NextResponse.json(
      { error: 'Failed to create support ticket' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const email = request.nextUrl.searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter required' },
        { status: 400 }
      );
    }

    // In production, fetch from database
    const tickets = [];

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return NextResponse.json(
      { error: 'Failed to fetch support tickets' },
      { status: 500 }
    );
  }
}
