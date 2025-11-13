# PadhaiLikhai - Complete EdTech Platform

A comprehensive, fully-featured education platform built with Next.js, React, and Tailwind CSS. Includes modern e-commerce integration, AI chatbot support, course inventory management, and complete transaction handling.

## 🎯 Key Features

### 🛍️ E-Commerce & Transactions
- **Shopping Cart**: Add/remove courses, persistent storage
- **Checkout Flow**: Complete payment processing interface
- **Transaction Management**: Record all purchases and history
- **Real-time Cart Updates**: Dynamic price calculation and item count

### 🤖 Customer Support
- **AI Chatbot**: Intelligent FAQ responses with keyword matching
- **Support Tickets**: Create and track support issues by category
- **Multiple Contact Methods**: Chat, email, phone, form submission
- **Quick Responses**: Pre-configured responses for common questions

### 📚 Course Management
- **Inventory System**: Track available seats per course
- **Sold-Out Status**: Prevent overbooking with seat limits
- **Course Filtering**: Search by category, level, and keywords
- **Availability Indicators**: Visual progress bars showing seat availability

### 👤 User Features
- **User Dashboard**: View enrolled courses and progress
- **Purchase History**: Access all transactions
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for all devices

### 🎨 UI/UX
- **Modern Design**: Beautiful, intuitive interface
- **Smooth Animations**: Framer Motion for elegant transitions
- **Icon Library**: Comprehensive icons from Lucide React
- **Fully Responsive**: Mobile-first approach

## 📄 Pages

- **Home Page**: Hero section, slideshow, top courses, testimonials
- **Courses Page**: Browse with advanced filtering and cart integration
- **Checkout Page**: Secure payment form and order summary
- **Contact Page**: Support form with ticket creation
- **Dashboard**: User profile, enrollment history, progress tracking
- **About Page**: Mission, vision, team information
- **Login/Signup**: Authentication pages

## 💼 Business Features

- **Transaction Tracking**: API for processing and storing transactions
- **Support Ticketing**: Categorized support requests
- **Email Integration**: Foundation for automated notifications
- **Analytics Ready**: Transaction and enrollment data available
- **API Endpoints**: RESTful APIs for backend integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI**: React 18
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons
- **Notifications**: React Hot Toast
- **Language**: TypeScript
- **Payment Ready**: Stripe integration foundation

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## 🎯 API Endpoints

### Transactions
- `POST /api/transactions` - Create new transaction
- `GET /api/transactions?email=user@email.com` - Get user transactions

### Support
- `POST /api/support` - Create support ticket
- `GET /api/support?email=user@email.com` - Get user tickets

## 📊 Store Management

### Cart Store (Zustand)
```typescript
const { items, addToCart, removeFromCart, getTotalPrice } = useCartStore();
```

### Inventory Store
```typescript
const { getAvailableSeats, isCourseFullyBooked } = useInventoryStore();
```

### Support Store
```typescript
const { createTicket, getTicketsByEmail } = useSupportStore();
```

### Transaction Store
```typescript
const { createTransaction, getTransactionsByEmail } = useTransactionStore();
```

## 🚀 Getting Started

```bash
npm run build
npm start
```

## 📁 Project Structure

```
EDUtech-demo/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx      # Home page
│   │   ├── courses/      # Courses pages
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── login/        # Login/Signup page
│   │   └── dashboard/    # Dashboard page
│   ├── components/       # React components
│   │   ├── Home/         # Home page components
│   │   ├── Navbar.tsx    # Navigation bar
│   │   ├── Footer.tsx    # Footer component
│   │   └── ThemeProvider.tsx  # Dark mode provider
│   └── data/             # JSON data files
│       ├── courses.json
│       └── testimonials.json
├── public/              # Static assets
└── package.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Course Data

Update `src/data/courses.json` to add or modify courses.

### Testimonials

Update `src/data/testimonials.json` to add or modify testimonials.

## 🌟 Key Features Implementation

### Animations
- Page transitions using Framer Motion
- Scroll-triggered animations
- Hover effects on cards and buttons
- Auto-playing slideshows

### Dark Mode
- System preference detection
- Manual toggle in navbar
- Persistent theme selection

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions

## 📝 Notes

- The contact form currently logs to console. Integrate with your backend API.
- Google Maps integration requires an API key. Add it in the Contact page component.
- Authentication is currently a UI mockup. Integrate with your auth provider.

## 📄 License

This project is open source and available under the MIT License.
