# EDUtech Platform - Feature Usage Guide

## 🎯 Quick Start Guide

This guide shows you how to use all the new features integrated into the EDUtech platform.

---

## 🛍️ Shopping Cart & Checkout

### Adding Courses to Cart

1. **Navigate to Courses Page**
   - Click "Courses" in the navigation menu
   - Browse available courses

2. **Add Course to Cart**
   - Click "Add to Cart" button on any course
   - You'll see a confirmation toast notification
   - Cart count updates in the navbar

3. **View Your Cart**
   - Click the shopping cart icon in the navbar
   - See all items with prices
   - Remove items if needed

### Completing Purchase

1. **Proceed to Checkout**
   - Click "Proceed to Checkout" from cart
   - Or navigate directly to `/checkout`

2. **Fill Payment Form**
   ```
   Full Name: John Doe
   Email: john@example.com
   Card Number: 4242 4242 4242 4242 (test card)
   Expiry: MM/YY (any future date)
   CVV: 123
   ```

3. **Complete Purchase**
   - Click "Complete Purchase" button
   - See payment processing
   - Redirected to dashboard after success
   - Cart is cleared automatically

---

## 🤖 AI Chatbot Support

### Accessing the Chatbot

1. **Click Chatbot Button**
   - Look for the blue chat bubble in bottom-right corner
   - Click to open chat window

2. **Available Features**
   - Type your question
   - Use quick question suggestions (first-time visitors)
   - Get instant FAQ responses

### Common Questions

The bot can answer:
- "How do I enroll in a course?"
- "What is the refund policy?"
- "Do you offer certificates?"
- "How long do I have access?"
- "Can I download course materials?"
- "What's your pricing?"
- "How do I pay?"
- "I'm having technical issues"

---

## 📞 Customer Support System

### Creating a Support Ticket

1. **Navigate to Contact Page**
   - Click "Contact" in navigation
   - Or go to `/contact`

2. **Fill Support Form**
   ```
   Email: your@email.com
   Category: Select from dropdown
   - General Inquiry
   - Technical Support
   - Billing Issue
   - Course Question
   Subject: Brief issue title
   Message: Detailed description
   ```

3. **Submit Ticket**
   - Click "Send Message"
   - Receive confirmation with ticket ID
   - Check dashboard for ticket status

### Ticket Categories

- **General Inquiry**: General questions
- **Technical Support**: App/platform issues
- **Billing Issue**: Payment or invoice problems
- **Course Question**: Questions about course content

---

## 📚 Enhanced Courses Page

### Browsing Courses

1. **Search Courses**
   - Use search box to find courses by title or keywords
   - Results update in real-time

2. **Filter by Category**
   - Click "Filters" button
   - Select category: Web Dev, Data Science, Marketing, Design, etc.

3. **Filter by Level**
   - Beginner, Intermediate, Advanced

### Course Inventory Status

- **Green Bar**: > 50 seats available
- **Yellow Bar**: 20-50 seats available
- **Red Bar**: < 20 seats available
- **Sold Out**: Course is full, cannot add to cart

---

## 👤 User Dashboard

### Viewing Your Dashboard

1. **Access Dashboard**
   - After purchase, you're redirected here
   - Or navigate to `/dashboard`

2. **Dashboard Sections**
   - **Stats**: Enrolled courses, completed, hours studied, certificates
   - **Enrolled Courses**: View all purchased courses
   - **Progress**: Track learning progress
   - **Certificates**: Download earned certificates

### Purchase History

- View all transactions in dashboard
- See course details and prices
- Check enrollment dates
- Access course materials

---

## 💳 Payment Processing

### Test Credit Card

For testing/demo purposes:

```
Card Number: 4242 4242 4242 4242
Expiry: 12/25 (or any future date)
CVV: 123
Full Name: Test User
```

**Note**: In production, integrate with Stripe for real payments.

### Payment Methods Supported

- Credit Cards (Visa, Mastercard, etc.)
- Debit Cards
- (PayPal integration coming soon)

---

## 📊 Transaction Tracking

### Viewing Transactions

1. **In Dashboard**
   - See all purchased courses
   - View transaction dates
   - Check payment methods

2. **Via API** (for developers)
   ```bash
   GET /api/transactions?email=user@example.com
   ```

### Transaction Details Include

- Transaction ID
- Email address
- Courses purchased
- Total amount
- Payment method
- Status (completed/pending/failed)
- Date and time

---

## 🎓 Course Enrollment

### After Purchase

1. **Automatic Enrollment**
   - You're automatically enrolled in purchased courses
   - Instant access to course materials
   - No waiting period

2. **Access Course**
   - Go to dashboard
   - Click on enrolled course
   - Start learning immediately

### Course Content

Each course includes:
- Video lectures
- Course materials (PDF)
- Code files (for tech courses)
- Quizzes and assignments
- Discussion forums
- Certificate upon completion

---

## 🔔 Notifications

### Toast Notifications

You'll see notifications for:
- ✅ Course added to cart
- ✅ Support ticket created
- ❌ Course is sold out
- ❌ Form validation errors
- ℹ️ Payment processing status

---

## 🔐 Account Security

### Best Practices

1. **Payment Security**
   - Never share your card details in chat
   - Use secure passwords
   - Don't save card info if using public computer

2. **Support Tickets**
   - Don't share personal information unnecessarily
   - Use secure email address
   - Keep ticket ID for reference

---

## 🆘 Troubleshooting

### Cart Issues

**Problem**: Cart appears empty
- **Solution**: Check localStorage, clear browser cache

**Problem**: Can't add course to cart
- **Solution**: Course might be sold out, try another course

### Checkout Issues

**Problem**: Payment form validation error
- **Solution**: Check all fields are filled correctly

**Problem**: Transaction failed
- **Solution**: Try again, check internet connection

### Chatbot Issues

**Problem**: Bot not responding
- **Solution**: Refresh page, check bot is open

**Problem**: Question not understood
- **Solution**: Try different phrasing or use support form

### Account Issues

**Problem**: Can't access dashboard
- **Solution**: Ensure you're logged in, check email verification

**Problem**: Can't find purchased course
- **Solution**: Check "My Courses" in dashboard, refresh page

---

## 📈 Using Your Dashboard

### Track Progress

1. **Time Spent**
   - Hours studied counter
   - Progress percentage per course

2. **Achievements**
   - Certificates earned
   - Courses completed
   - Skills acquired

3. **Next Steps**
   - Recommended courses based on history
   - Continue learning
   - Explore new categories

---

## 💡 Tips & Tricks

### Shopping

- 💰 Apply coupon codes at checkout (when available)
- 🎁 Enroll in bundle courses for better deals
- 📦 Download materials for offline access

### Learning

- 📝 Take notes on course materials
- ⏰ Set learning schedule
- 🎯 Complete assessments for better retention

### Support

- 🔍 Search FAQ before creating ticket
- 📧 Save ticket IDs for reference
- 💬 Use chatbot for quick answers

---

## 🌐 API Usage (For Developers)

### Create Transaction

```bash
curl -X POST http://localhost:3000/api/transactions \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "courses": [
      {"id": 1, "title": "Web Dev", "price": 99}
    ],
    "totalAmount": 99,
    "paymentMethod": "card",
    "transactionId": "txn_123"
  }'
```

### Get Transactions

```bash
curl http://localhost:3000/api/transactions?email=user@example.com
```

### Create Support Ticket

```bash
curl -X POST http://localhost:3000/api/support \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "subject": "Course Access Issue",
    "message": "Cannot access course materials",
    "category": "technical"
  }'
```

### Get Support Tickets

```bash
curl http://localhost:3000/api/support?email=user@example.com
```

---

## 📞 Contact & Support

**Email**: support@padhalilikhai.com
**Phone**: +1 (800) 123-4567
**Address**: 123 Education Street, Tech City, TC 12345

---

## ✅ Checklist for New Users

- [ ] Browse courses
- [ ] Add course to cart
- [ ] Complete checkout
- [ ] View dashboard
- [ ] Try chatbot support
- [ ] Create support ticket
- [ ] Download course materials
- [ ] Start learning!

---

**Last Updated**: November 13, 2025
**Platform Version**: 2.0.0
