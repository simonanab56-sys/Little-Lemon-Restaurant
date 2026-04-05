import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import '../styles/NotFound.css';
export default function NotFound() {
  return <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <span className="not-found-emoji">🍋</span>
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-text">
            Oops! The page you're looking for doesn't exist. 
            It might have been moved or deleted.
          </p>
          
          <div className="not-found-actions">
            <Link to="/" className="btn-primary">
              <Home size={20} />
              Go to Homepage
            </Link>
            <button onClick={() => window.history.back()} className="btn-secondary">
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>;
}