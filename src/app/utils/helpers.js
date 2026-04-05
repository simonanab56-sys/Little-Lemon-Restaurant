/**
 * Utility Functions for Little Lemon Restaurant
 * Common helper functions used across the application
 */

/**
 * Format currency in Ghana Cedis
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount) {
  return `GH₵ ${amount.toFixed(2)}`;
}

/**
 * Format date for display
 * @param {string|Date} date - Date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-GH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format time for display
 * @param {string} time - Time in HH:MM format
 * @returns {string} Formatted time string
 */
export function formatTime(time) {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Ghana format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid
 */
export function isValidPhone(phone) {
  // Ghana phone numbers: +233 XX XXX XXXX or 0XX XXX XXXX
  const phoneRegex = /^(\+233|0)[2-5][0-9]{8}$/;
  const cleanedPhone = phone.replace(/[\s-]/g, '');
  return phoneRegex.test(cleanedPhone);
}

/**
 * Generate a unique ID
 * @returns {string} Unique ID
 */
export function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Debounce function for search/input optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for scroll/resize optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if date is in the past
 * @param {string|Date} date - Date to check
 * @returns {boolean} True if in the past
 */
export function isPastDate(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const checkDate = new Date(date);
  checkDate.setHours(0, 0, 0, 0);
  return checkDate < today;
}

/**
 * Check if time is within restaurant operating hours
 * @param {string} time - Time in HH:MM format
 * @param {string} day - Day of week (e.g., 'monday')
 * @returns {boolean} True if within operating hours
 */
export function isWithinOperatingHours(time, day) {
  const operatingHours = {
    monday: { open: '11:00', close: '22:00' },
    tuesday: { open: '11:00', close: '22:00' },
    wednesday: { open: '11:00', close: '22:00' },
    thursday: { open: '11:00', close: '22:00' },
    friday: { open: '11:00', close: '22:00' },
    saturday: { open: '12:00', close: '23:00' },
    sunday: { open: '12:00', close: '21:00' },
  };

  const dayLower = day.toLowerCase();
  if (!operatingHours[dayLower]) return false;

  const { open, close } = operatingHours[dayLower];
  return time >= open && time <= close;
}

/**
 * Calculate reservation deposit amount
 * @param {number} guests - Number of guests
 * @returns {number} Deposit amount in GH₵
 */
export function calculateDeposit(guests) {
  const BASE_DEPOSIT = 50; // GH₵ 50 base deposit
  const EXTRA_PER_GUEST = 10; // GH₵ 10 per additional guest over 2
  
  if (guests <= 2) {
    return BASE_DEPOSIT;
  }
  
  return BASE_DEPOSIT + ((guests - 2) * EXTRA_PER_GUEST);
}

/**
 * Sanitize user input to prevent XSS
 * @param {string} input - User input to sanitize
 * @returns {string} Sanitized input
 */
export function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

/**
 * Get greeting based on time of day
 * @returns {string} Greeting message
 */
export function getGreeting() {
  const hour = new Date().getHours();
  
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}

/**
 * Format reservation details for display
 * @param {Object} reservation - Reservation object
 * @returns {string} Formatted reservation details
 */
export function formatReservationDetails(reservation) {
  const date = formatDate(reservation.date);
  const time = formatTime(reservation.time);
  const guests = reservation.guests === 1 ? '1 guest' : `${reservation.guests} guests`;
  
  return `${date} at ${time} for ${guests}`;
}

/**
 * Check if device is mobile
 * @returns {boolean} True if mobile device
 */
export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Get network connection speed
 * @returns {string} Connection type (slow-2g, 2g, 3g, 4g, or unknown)
 */
export function getConnectionSpeed() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (!connection) return 'unknown';
  
  return connection.effectiveType || 'unknown';
}

/**
 * Optimize image URL based on connection speed
 * @param {string} url - Original image URL
 * @returns {string} Optimized image URL
 */
export function optimizeImageUrl(url) {
  const speed = getConnectionSpeed();
  
  // For slow connections, request smaller images
  if (speed === 'slow-2g' || speed === '2g') {
    return url.replace('w=1080', 'w=640').replace('q=80', 'q=60');
  }
  
  return url;
}

/**
 * Scroll to element smoothly
 * @param {string} elementId - ID of element to scroll to
 * @param {number} offset - Offset from top in pixels
 */
export function smoothScrollTo(elementId, offset = 80) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: elementPosition - offset,
    behavior: 'smooth',
  });
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} True if successful
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text:', err);
    return false;
  }
}

/**
 * Share content using Web Share API
 * @param {Object} data - Share data {title, text, url}
 * @returns {Promise<boolean>} True if successful
 */
export async function shareContent(data) {
  if (!navigator.share) {
    console.log('Web Share API not supported');
    return false;
  }
  
  try {
    await navigator.share(data);
    return true;
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error('Error sharing:', err);
    }
    return false;
  }
}

/**
 * Local storage helper with error handling
 */
export const storage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return false;
    }
  },
  
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  },
  
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  },
};

export default {
  formatCurrency,
  formatDate,
  formatTime,
  isValidEmail,
  isValidPhone,
  generateId,
  debounce,
  throttle,
  isPastDate,
  isWithinOperatingHours,
  calculateDeposit,
  sanitizeInput,
  getGreeting,
  formatReservationDetails,
  isMobileDevice,
  getConnectionSpeed,
  optimizeImageUrl,
  smoothScrollTo,
  copyToClipboard,
  shareContent,
  storage,
};
