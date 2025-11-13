# PadhaiLikhai - Education Platform

A modern, fully responsive education platform built with Next.js, React, and Tailwind CSS. Features smooth animations, dark mode, and a comprehensive course management system.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Page Transitions**: Smooth page transitions using Framer Motion
- **Course Management**: Browse, search, and filter courses
- **User Dashboard**: Track progress and manage enrolled courses
- **Authentication**: Login and Signup pages with animated transitions
- **Fully Responsive**: Mobile-first design that works on all devices

## 📄 Pages

- **Home Page**: Hero section, slideshow, top courses, testimonials, and more
- **Courses Page**: Grid layout with search and filter functionality
- **Course Detail Page**: Dynamic route with course information, syllabus, and reviews
- **About Page**: Mission, vision, values, team, and company story
- **Contact Page**: Contact form and map integration
- **Login/Signup Page**: Animated transitions between login and signup modes
- **Dashboard**: User profile, enrolled courses, and progress tracking

## 🛠️ Tech Stack

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Icon library
- **TypeScript**: Type safety

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build

To create a production build:

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
