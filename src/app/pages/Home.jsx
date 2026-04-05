import { Link } from 'react-router';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../components/imageFullback/ImageWithFallback';
import '../styles/Home.css';
export default function Home() {
  const featuredDishes = [{
    id: 1,
    name: 'Mediterranean Platter',
    description: 'A generous selection of hummus, baba ganoush, falafel, and fresh pita bread',
    price: 'GH₵ 85',
    image: 'https://images.unsplash.com/photo-1771285119318-b342c3ecc51c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwcmVzdGF1cmFudCUyMGZvb2QlMjBwbGF0dGVyfGVufDF8fHx8MTc3NTM3NzQzM3ww&ixlib=rb-4.1.0&q=80&w=1080'
  }, {
    id: 2,
    name: 'Greek Salad',
    description: 'Fresh tomatoes, cucumbers, olives, feta cheese with olive oil and herbs',
    price: 'GH₵ 45',
    image: 'https://images.unsplash.com/photo-1769481614068-47cfb4d1f125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHNhbGFkJTIwZnJlc2glMjB2ZWdldGFibGVzfGVufDF8fHx8MTc3NTI3ODQ3MHww&ixlib=rb-4.1.0&q=80&w=1080'
  }, {
    id: 3,
    name: 'Grilled Sea Bass',
    description: 'Fresh sea bass grilled to perfection with lemon, herbs, and seasonal vegetables',
    price: 'GH₵ 120',
    image: 'https://images.unsplash.com/photo-1609517405102-8e258999ef48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwZmlzaCUyMGxlbW9uJTIwaGVyYnN8ZW58MXx8fHwxNzc1Mzc3NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }];
  const testimonials = [{
    id: 1,
    name: 'Kwame Mensah',
    role: 'Food Blogger',
    comment: 'The best Mediterranean food in Sunyani! The flavors are authentic and the portions are generous. Highly recommend the lamb kebabs!',
    rating: 5
  }, {
    id: 2,
    name: 'Ama Osei',
    role: 'Local Resident',
    comment: 'Little Lemon has become my go-to restaurant. The atmosphere is wonderful and the staff is incredibly friendly. The Greek salad is my favorite!',
    rating: 5
  }, {
    id: 3,
    name: 'David Boateng',
    role: 'Business Owner',
    comment: 'Perfect place for business lunches and family dinners. The quality is consistently excellent and the service is impeccable.',
    rating: 5
  }];
  return <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Little Lemon</h1>
            <p className="hero-subtitle">Fresh Mediterranean Flavors</p>
            <p className="hero-description">
              Experience the vibrant tastes of the Mediterranean right here in Sunyani. 
              From fresh salads to grilled specialties, every dish is crafted with passion and authenticity.
            </p>
            <Link to="/reservation" className="hero-cta">
              Reserve a Table
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="hero-image">
            <ImageWithFallback src="https://images.unsplash.com/photo-1771285119318-b342c3ecc51c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwcmVzdGF1cmFudCUyMGZvb2QlMjBwbGF0dGVyfGVufDF8fHx8MTc3NTM3NzQzM3ww&ixlib=rb-4.1.0&q=80&w=1080" alt="Mediterranean food platter" className="hero-img" />
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Dishes</h2>
            <p>Taste our most popular Mediterranean specialties</p>
          </div>
          <div className="featured-grid">
            {featuredDishes.map(dish => <div key={dish.id} className="dish-card">
                <div className="dish-image-wrapper">
                  <ImageWithFallback src={dish.image} alt={dish.name} className="dish-image" />
                </div>
                <div className="dish-content">
                  <h3 className="dish-name">{dish.name}</h3>
                  <p className="dish-description">{dish.description}</p>
                  <div className="dish-footer">
                    <span className="dish-price">{dish.price}</span>
                    <Link to="/menu" className="dish-link">
                      View Menu
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Little Lemon</h2>
              <p className="about-lead">
                Bringing the heart of Mediterranean cuisine to Ghana
              </p>
              <p>
                Since opening our doors in Sunyani, Little Lemon has been dedicated to serving 
                authentic Mediterranean dishes made with the freshest local and imported ingredients. 
                Our recipes have been passed down through generations, ensuring every meal is a 
                true taste of the Mediterranean.
              </p>
              <p>
                From our signature lemon-herb grilled fish to our homemade hummus and baklava, 
                each dish is prepared with care and passion. We believe in creating not just meals, 
                but memorable dining experiences for our guests.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>5+</h3>
                  <p>Years Serving</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Authentic Dishes</p>
                </div>
                <div className="stat">
                  <h3>1000+</h3>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <ImageWithFallback src="https://images.unsplash.com/photo-1609517405102-8e258999ef48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwZmlzaCUyMGxlbW9uJTIwaGVyYnN8ZW58MXx8fHwxNzc1Mzc3NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Mediterranean cuisine" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Read reviews from our satisfied guests</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => <div key={testimonial.id} className="testimonial-card">
                <Quote className="quote-icon" size={40} />
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="testimonial-comment">{testimonial.comment}</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Mediterranean Cuisine?</h2>
            <p>Book your table today and discover the flavors of Little Lemon</p>
            <Link to="/reservation" className="cta-button">
              Make a Reservation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>;
}