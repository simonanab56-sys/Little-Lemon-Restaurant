# Little Lemon Restaurant - Modern SPA

A production-ready, fully responsive Single Page Application (SPA) for Little Lemon restaurant, optimized for fast performance on mobile devices in Sunyani, Ghana.

##  Features

- **Modern React SPA** with React Router
- **Responsive Design** optimized for mobile-first experience
- **Three Main Sections:**
  - Home (Hero, Featured Dishes, About, Testimonials)
  - Menu (Categorized with filtering)
  - Reservation System with Stripe Payment Integration
- **CSS-only styling** (no CSS frameworks)
- **Performance Optimized** for low-bandwidth networks
- **Real-time Form Validation**
- **Secure Payment Processing** with Stripe
- **Toast Notifications** for user feedback
- **Smooth Animations** and transitions
- **SEO-friendly** structure

##  Tech Stack

- **React 18.3.1** - UI Library
- **Vite 6.3.5** - Build Tool
- **React Router 7.13.0** - Client-side Routing
- **Stripe** - Payment Processing
- **Lucide React** - Icons
- **Sonner** - Toast Notifications
- **Standard CSS** - Styling (Mobile-first approach)

##  Prerequisites

- Node.js (v18 or higher)
- npm 
- Stripe Account (for payment integration)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd little-lemon-restaurant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Stripe Keys**
   
   Update the Stripe publishable key in `/src/app/pages/Reservation.jsx`:
   ```javascript
   const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

##  Design Theme

- **Primary Yellow:** #f4ce14 (Lemon-inspired accent color)
- **Primary Green:** #495e57 (Mediterranean sophisticated tone)
- **Secondary Green:** #72a98f (Complementary shade)
- **Light Yellow:** #fff8dc (Soft background)
- **Typography:** Inter font family from Google Fonts

##  Mobile Optimization

The application is specifically optimized for:
- Low-bandwidth networks in Ghana
- Fast loading on 3G/4G connections
- Touch-friendly interface
- Responsive images with lazy loading
- Minimal bundle size using Vite

##  Payment Integration

### Stripe Setup

1. **Create a Stripe Account:** https://stripe.com
2. **Get API Keys:** Dashboard → Developers → API Keys
3. **Update Publishable Key:** In `/src/app/pages/Reservation.jsx`
4. **Backend Setup (Required for Production):**

   Create a backend endpoint to handle payment intents:
   ```javascript
   // Example Node.js/Express endpoint
   app.post('/api/create-payment-intent', async (req, res) => {
     const { amount, currency } = req.body;
     
     const paymentIntent = await stripe.paymentIntents.create({
       amount: amount * 100, // Convert to cents
       currency: currency,
     });
     
     res.json({ clientSecret: paymentIntent.client_secret });
   });
   ```

5. **Update Frontend:** Modify `/src/app/components/ReservationForm.jsx` to call your backend endpoint

### Current Implementation

The current implementation includes a **simulated payment flow** for demonstration purposes. For production:
- Replace the simulated payment with actual Stripe API calls
- Implement proper backend endpoints
- Store reservation data securely
- Send confirmation emails

## 📂 Project Structure

```
/src
  /app
    /components          # Reusable components
      - Navbar.jsx
      - Footer.jsx
      - ReservationForm. jsx
    /pages              # Route pages
      - Root.jsx
      - Home.jsx
      - Menu.jsx
      - Reservation.jsx
    /styles             # CSS files
      - App.css
      - Navbar.css
      - Footer.css
      - Home.css
      - Menu.css
      - Reservation.css
      - ReservationForm.css
    - App.jsx           # Main app component
    - routes.jsx        # Router configuration
  /styles
    - index.css         # Global styles import
    - fonts.css         # Google Fonts import
```

##  Deployment

### Build

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Hosting Options

- **Netlify:** Connect repository and deploy automatically
- **Vercel:** Import project and deploy
- **GitHub Pages:** Use gh-pages package
- **Traditional Hosting:** Upload `dist` folder contents

### Environment Variables

For production deployment, set:
- Stripe Publishable Key
- Backend API URL (if using separate backend)

##  Security Best Practices

1. **Never expose Stripe Secret Keys** in frontend code
2. **Always validate payments** on the backend
3. **Use HTTPS** in production
4. **Implement CORS** properly on backend
5. **Sanitize user inputs** before processing
6. **Store sensitive data** securely on backend only

##  Customization

### Colors

Update CSS variables in `/src/app/styles/App.css`:
```css
:root {
  --primary-yellow: #f4ce14;
  --primary-green: #495e57;
  /* Add more custom colors */
}
```

### Menu Items

Edit menu data in `/src/app/pages/Menu.jsx`:
```javascript
const menuItems = {
  appetizers: [...],
  mains: [...],
  // Add more categories
};
```

### Restaurant Info

Update contact information in `/src/app/components/Footer.jsx`

## 🐛 Troubleshooting

### Stripe Elements not loading
- Check if Stripe publishable key is correct
- Verify internet connection
- Check browser console for errors

### Images not displaying
- Ensure Unsplash URLs are accessible
- Check network tab for failed requests
- Consider hosting images locally for production

### Form validation issues
- Clear browser cache
- Check console for JavaScript errors
- Verify all required fields have proper validation

## 📄 License

This project is created for Little Lemon Restaurant.

## 🤝 Support

For issues or questions:
- Email: info@littlelemon.com
- Phone: +233 24 123 4567

## 🎯 Performance Metrics

Target metrics for Sunyani, Ghana:
- First Contentful Paint: < 2s
- Time to Interactive: < 4s
- Lighthouse Score: > 90
- Bundle Size: < 500KB (gzipped)

---

**Built with ❤️ for Little Lemon Restaurant**
