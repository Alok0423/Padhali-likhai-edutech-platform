import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, courses, totalAmount, paymentMethod, transactionId } = body;

    // Validate input
    if (!email || !courses || !totalAmount || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Verify payment with Stripe/payment provider
    // 2. Save transaction to database
    // 3. Send confirmation email
    // 4. Create user enrollments

    const transaction = {
      id: Date.now().toString(),
      email,
      courses,
      totalAmount,
      paymentMethod,
      transactionId,
      status: 'completed',
      createdAt: new Date().toISOString(),
    };

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Transaction completed successfully',
        transaction,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Transaction error:', error);
    return NextResponse.json(
      { error: 'Failed to process transaction' },
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
    const transactions = [
      {
        id: '1',
        email,
        courses: [],
        totalAmount: 0,
        status: 'completed',
        paymentMethod: 'card',
        createdAt: new Date().toISOString(),
        transactionId: 'txn_123',
      },
    ];

    return NextResponse.json({ transactions }, { status: 200 });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch transactions' },
      { status: 500 }
    );
  }
}
