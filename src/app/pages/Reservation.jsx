import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ReservationForm from '../components/ReservationForm';
import '../styles/Reservation.css';

// Initialize Stripe with publishable key
// IMPORTANT: Replace with your actual Stripe publishable key
const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY_HERE');
export default function Reservation() {
  return <div className="reservation-page">
      <section className="reservation-hero">
        <div className="container">
          <h1>Reserve Your Table</h1>
          <p>Book your dining experience at Little Lemon</p>
        </div>
      </section>

      <section className="reservation-content">
        <div className="container">
          <div className="reservation-grid">
            <div className="reservation-info">
              <h2>Why Reserve With Us?</h2>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">✓</div>
                  <div>
                    <h3>Guaranteed Seating</h3>
                    <p>Your table will be ready when you arrive</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">✓</div>
                  <div>
                    <h3>Special Occasions</h3>
                    <p>Let us know about birthdays or celebrations</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">✓</div>
                  <div>
                    <h3>Flexible Cancellation</h3>
                    <p>Cancel up to 24 hours before your reservation</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">✓</div>
                  <div>
                    <h3>Secure Payment</h3>
                    <p>Your payment information is encrypted and secure</p>
                  </div>
                </div>
              </div>

              <div className="contact-info-box">
                <h3>Need Help?</h3>
                <p>Call us at <strong>+233 24 123 4567</strong></p>
                <p>Email: <strong>info@littlelemon.com</strong></p>
                <p className="hours-note">
                  Reservations available during operating hours:<br />
                  Mon-Fri: 11:00 AM - 10:00 PM<br />
                  Sat: 12:00 PM - 11:00 PM<br />
                  Sun: 12:00 PM - 9:00 PM
                </p>
              </div>
            </div>

            <div className="reservation-form-wrapper">
              <Elements stripe={stripePromise}>
                <ReservationForm />
              </Elements>
            </div>
          </div>
        </div>
      </section>
    </div>;
}