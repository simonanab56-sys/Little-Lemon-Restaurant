import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'sonner';
import { Calendar, Clock, Users, MessageSquare, CreditCard } from 'lucide-react';
import '../styles/ReservationForm.css';
export default function ReservationForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const depositAmount = 50; // GH₵ 50 deposit per reservation

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    if (!formData.guests || parseInt(formData.guests) < 1) {
      newErrors.guests = 'Number of guests must be at least 1';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    // Show payment section
    setShowPayment(true);
    toast.info('Please complete payment to confirm your reservation');
  };
  const handlePayment = async e => {
    e.preventDefault();
    if (!stripe || !elements) {
      toast.error('Payment system not loaded. Please refresh the page.');
      return;
    }
    setIsProcessing(true);
    try {
      // IMPORTANT: In production, you would:
      // 1. Send reservation details to your backend
      // 2. Backend creates a PaymentIntent with Stripe
      // 3. Backend returns the clientSecret
      // 4. Use the clientSecret to confirm the payment

      // This is a simulated payment for demonstration
      // Replace this with actual Stripe payment intent creation

      const cardElement = elements.getElement(CardElement);

      // Simulate API call to create payment intent
      // In production: const response = await fetch('/api/create-payment-intent', { ... })

      // For demo purposes, we'll simulate a successful payment
      setTimeout(() => {
        toast.success('Reservation confirmed! Check your email for details.');

        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          specialRequests: ''
        });
        setShowPayment(false);
        setIsProcessing(false);

        // In production, you would redirect to a confirmation page
        // or show a detailed confirmation modal
      }, 2000);

      // Actual Stripe payment confirmation would look like:
      /*
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: formData.fullName,
            email: formData.email,
          },
        },
      });
       if (error) {
        toast.error(error.message);
      } else if (paymentIntent.status === 'succeeded') {
        toast.success('Reservation confirmed!');
        // Handle success
      }
      */
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };
  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#1a1a1a',
        fontFamily: "'Inter', sans-serif",
        '::placeholder': {
          color: '#999'
        }
      },
      invalid: {
        color: '#e74c3c'
      }
    }
  };
  return <div className="reservation-form-container">
      <h2>Reservation Details</h2>
      <p className="form-subtitle">Fill in your information below</p>

      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className={errors.fullName ? 'error' : ''} placeholder="John Doe" />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} placeholder="john@example.com" />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'error' : ''} placeholder="+233 24 123 4567" />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">
              <Calendar size={16} />
              Date *
            </label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className={errors.date ? 'error' : ''} min={new Date().toISOString().split('T')[0]} />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="time">
              <Clock size={16} />
              Time *
            </label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className={errors.time ? 'error' : ''} />
            {errors.time && <span className="error-message">{errors.time}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="guests">
            <Users size={16} />
            Number of Guests *
          </label>
          <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className={errors.guests ? 'error' : ''}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>)}
          </select>
          {errors.guests && <span className="error-message">{errors.guests}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">
            <MessageSquare size={16} />
            Special Requests (Optional)
          </label>
          <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows="4" placeholder="Dietary restrictions, special occasions, seating preferences, etc." />
        </div>

        {!showPayment && <button type="submit" className="submit-btn">
            Continue to Payment
          </button>}
      </form>

      {showPayment && <div className="payment-section">
          <div className="payment-header">
            <CreditCard size={24} />
            <h3>Payment Information</h3>
          </div>
          
          <div className="deposit-info">
            <p>A deposit of <strong>GH₵ {depositAmount}</strong> is required to confirm your reservation.</p>
            <p className="deposit-note">This amount will be credited towards your final bill.</p>
          </div>

          <form onSubmit={handlePayment} className="payment-form">
            <div className="form-group">
              <label>Card Details *</label>
              <div className="card-element-wrapper">
                <CardElement options={cardElementOptions} />
              </div>
              <p className="payment-secure-note">
                🔒 Your payment information is encrypted and secure
              </p>
            </div>

            <div className="payment-actions">
              <button type="button" className="back-btn" onClick={() => setShowPayment(false)} disabled={isProcessing}>
                Back
              </button>
              <button type="submit" className="pay-btn" disabled={!stripe || isProcessing}>
                {isProcessing ? 'Processing...' : `Pay GH₵ ${depositAmount}`}
              </button>
            </div>
          </form>

          <div className="payment-footer">
            <p>
              <strong>Note:</strong> In production, replace the Stripe publishable key in 
              <code>/src/app/pages/Reservation.tsx</code> with your actual key, and implement 
              backend endpoints to create payment intents securely.
            </p>
          </div>
        </div>}
    </div>;
}