# EDUtech Platform - Enhanced Features Documentation

## Overview
This is a comprehensive educational technology platform built with Next.js, React, and TypeScript. The platform includes all essential edtech features for a complete learning and e-commerce experience.

## 🆕 New Features Integrated

### 1. **Chatbot System** 
- **Location**: `src/components/Chatbot.tsx`
- **Features**:
  - Real-time customer support chat widget
  - Intelligent FAQ responses covering:
    - Course enrollment process
    - Refund policies
    - Certificate information
    - Course access duration
    - Download capabilities
    - Pricing and payment methods
  - Quick question suggestions
  - Typing indicators
  - Persistent message history
  - Smooth animations with Framer Motion

### 2. **Shopping Cart & Transaction System**
- **Cart Component**: `src/components/CartWidget.tsx`
- **Store**: `src/store/cartStore.ts`
- **Features**:
  - Add/remove courses to cart
  - Real-time cart count badge
  - Cart total calculation
  - Persistent cart (localStorage)
  - Cart widget in navbar

### 3. **Checkout & Payment Processing**
- **Location**: `src/app/checkout/page.tsx`
- **Features**:
  - Complete checkout flow
  - Order summary display
  - Card payment form with formatting
  - Expiry date and CVV validation
  - Secure payment simulation
  - Order confirmation and redirect to dashboard

### 4. **Customer Query/Support Ticket System**
- **Store**: `src/store/supportStore.ts`
- **Component**: `src/components/ContactForm.tsx`
- **Features**:
  - Support ticket creation
  - Multiple issue categories:
    - General Inquiry
    - Technical Support
    - Billing Issues
    - Course Questions
  - Ticket status tracking (open, in-progress, resolved)
  - Response management
  - Email notifications (foundation for production)

### 5. **Course Inventory Management**
- **Store**: `src/store/inventoryStore.ts`
- **Features**:
  - Track available seats per course
  - Prevent overbooking
  - Real-time availability display
  - Course "Sold Out" status
  - Enrollment percentage tracking
  - Visual availability indicator

### 6. **Transaction Management**
- **Store**: `src/store/transactionStore.ts`
- **API**: `src/app/api/transactions/route.ts`
- **Features**:
  - Record all transactions
  - Transaction status tracking
  - Email-based transaction history
  - Payment method recording
  - Transaction ID generation

### 7. **API Endpoints**

#### `/api/transactions`
- **POST**: Create new transaction
  ```json
  {
    "email": "user@example.com",
    "courses": [{ "id": 1, "title": "Course", "price": 99 }],
    "totalAmount": 99,
    "paymentMethod": "card",
    "transactionId": "txn_123"
  }
  ```
- **GET**: Retrieve user transactions by email

#### `/api/support`
- **POST**: Create support ticket
  ```json
  {
    "email": "user@example.com",
    "subject": "Issue Title",
    "message": "Issue description",
    "category": "technical|billing|course|general"
  }
  ```
- **GET**: Retrieve user support tickets by email

### 8. **Enhanced Courses Page**
- **Location**: `src/app/courses/page.tsx`
- **Features**:
  - Course filtering (category, level)
  - Real-time search
  - Add to cart functionality
  - Inventory status display
  - Sold-out course handling
  - Course availability progress bar
  - Course ratings and student count
  - Enhanced UI with dark mode support

### 9. **Contact Page**
- **Location**: `src/app/contact/page.tsx`
- **Features**:
  - Professional contact form
  - Multiple support channels
  - Contact information display
  - Form validation
  - Toast notifications

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── support/
│   │   │   └── route.ts          # Support ticket API
│   │   └── transactions/
│   │       └── route.ts           # Transaction API
│   ├── checkout/
│   │   └── page.tsx               # Checkout page
│   ├── contact/
│   │   └── page.tsx               # Enhanced contact page
│   ├── courses/
│   │   └── page.tsx               # Enhanced courses page
│   ├── dashboard/
│   │   └── page.tsx               # User dashboard
│   ├── layout.tsx                 # Main layout with chatbot
│   └── globals.css
├── components/
│   ├── Chatbot.tsx                # AI chatbot component
│   ├── CartWidget.tsx             # Shopping cart widget
│   ├── ContactForm.tsx            # Contact form component
│   ├── Navbar.tsx                 # Updated navbar with cart
│   ├── Footer.tsx
│   ├── Providers.tsx              # Updated with Toaster
│   └── ThemeProvider.tsx
├── store/
│   ├── cartStore.ts               # Zustand cart store
│   ├── supportStore.ts            # Support ticket store
│   ├── inventoryStore.ts          # Course inventory store
│   └── transactionStore.ts        # Transaction store
└── data/
    ├── courses.json
    └── testimonials.json
```

## 🚀 Key Technologies

- **Framework**: Next.js 14
- **UI Library**: React 18
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Notifications**: React Hot Toast
- **Icons**: Lucide React, React Icons
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 📦 Dependencies Added

```json
{
  "axios": "^1.6.0",
  "zustand": "^4.4.0",
  "react-hot-toast": "^2.4.1",
  "stripe": "^13.0.0"
}
```

## 🎯 Features Highlight

### Chatbot Capabilities
- Intelligent keyword matching for FAQ responses
- Quick question suggestions for first-time users
- Smooth typing indicators and animations
- Persistent conversation history

### E-commerce Integration
- Full shopping cart functionality
- Real-time price calculations
- Multiple payment processing flow
- Order confirmation system

### Course Management
- Dynamic inventory tracking
- Automatic sold-out status
- Student capacity limits
- Real-time availability updates

### Support System
- Ticket-based support management
- Multiple issue categories
- Status tracking
- Response management system

## 🔄 Data Flow

```
User adds course to cart
    ↓
CartStore updates with course
    ↓
CartWidget shows updated count
    ↓
User proceeds to checkout
    ↓
Payment form validation
    ↓
Transaction API call
    ↓
Transaction stored
    ↓
User redirected to dashboard
    ↓
Purchase history available
```

## 🛠️ Installation & Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open in browser**:
Navigate to `http://localhost:3000`

## 📝 Usage Examples

### Adding a Course to Cart
```typescript
const { addToCart } = useCartStore();
addToCart({
  id: 1,
  title: "Course Title",
  price: 99,
  instructor: "Instructor Name",
  image: "image-url"
});
```

### Creating a Support Ticket
```typescript
const { createTicket } = useSupportStore();
createTicket({
  email: "user@example.com",
  subject: "Issue",
  message: "Description",
  category: "technical"
});
```

### Checking Course Availability
```typescript
const { getAvailableSeats, isCourseFullyBooked } = useInventoryStore();
const available = getAvailableSeats(courseId);
const isFull = isCourseFullyBooked(courseId);
```

## 🌐 Future Enhancements

- [ ] Integration with actual payment gateway (Stripe)
- [ ] Database backend (MongoDB/PostgreSQL)
- [ ] User authentication system
- [ ] Email notification system
- [ ] Admin dashboard for course management
- [ ] Progress tracking and certificates
- [ ] Video streaming integration
- [ ] Discussion forums
- [ ] Real-time notifications
- [ ] Advanced analytics

## 🔐 Production Considerations

Before deploying to production, ensure:

1. **Payment Processing**: Integrate with actual payment provider (Stripe, PayPal)
2. **Database**: Set up persistent database for transactions, users, and tickets
3. **Authentication**: Implement secure user authentication
4. **Email Service**: Configure email service for notifications
5. **Environment Variables**: Set up .env.local with API keys
6. **Error Handling**: Implement comprehensive error handling
7. **Security**: Add CSRF protection, rate limiting, input validation
8. **Testing**: Write unit and integration tests

## 📄 License

This project is part of the Padhai Likhai EDTech platform.

## 👥 Support

For support, contact us at:
- Email: support@padhalilikhai.com
- Phone: +1 (800) 123-4567
- Address: 123 Education Street, Tech City, TC 12345
