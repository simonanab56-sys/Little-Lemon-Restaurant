/**
 * API Service for Little Lemon Restaurant
 * 
 * This file contains helper functions for making API calls.
 * In production, replace the mock implementations with actual API endpoints.
 */

// Base API URL - update this with your actual backend URL
const API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Create a payment intent with Stripe
 * @param {Object} reservationData - Reservation details
 * @returns {Promise<Object>} - Payment intent client secret
 */
export async function createPaymentIntent(reservationData) {
  try {
    // In production, this would call your backend endpoint
    const response = await fetch(`${API_BASE_URL}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 50, // GH₵ 50 deposit
        currency: 'ghs', // Ghana Cedis
        reservationData,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment intent');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
}

/**
 * Submit reservation to backend
 * @param {Object} reservationData - Complete reservation details
 * @returns {Promise<Object>} - Reservation confirmation
 */
export async function submitReservation(reservationData) {
  try {
    const response = await fetch(`${API_BASE_URL}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit reservation');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error submitting reservation:', error);
    throw error;
  }
}

/**
 * Send confirmation email
 * @param {Object} reservationDetails - Reservation and customer details
 * @returns {Promise<Object>} - Email confirmation
 */
export async function sendConfirmationEmail(reservationDetails) {
  try {
    const response = await fetch(`${API_BASE_URL}/send-confirmation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservationDetails),
    });

    if (!response.ok) {
      throw new Error('Failed to send confirmation email');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
}

/**
 * Cancel reservation
 * @param {string} reservationId - Unique reservation ID
 * @returns {Promise<Object>} - Cancellation confirmation
 */
export async function cancelReservation(reservationId) {
  try {
    const response = await fetch(`${API_BASE_URL}/reservations/${reservationId}/cancel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to cancel reservation');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error canceling reservation:', error);
    throw error;
  }
}

/**
 * Get available time slots for a specific date
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Promise<Array>} - Available time slots
 */
export async function getAvailableTimeSlots(date) {
  try {
    const response = await fetch(`${API_BASE_URL}/available-slots?date=${date}`);

    if (!response.ok) {
      throw new Error('Failed to fetch available time slots');
    }

    const data = await response.json();
    return data.slots || [];
  } catch (error) {
    console.error('Error fetching available time slots:', error);
    // Return default time slots as fallback
    return [
      '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
      '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
      '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
      '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
    ];
  }
}

/**
 * Helper function for error handling
 */
export function handleApiError(error) {
  if (error.response) {
    // Server responded with error
    return {
      message: error.response.data.message || 'An error occurred',
      status: error.response.status,
    };
  } else if (error.request) {
    // Request made but no response
    return {
      message: 'Network error. Please check your connection.',
      status: 0,
    };
  } else {
    // Something else happened
    return {
      message: error.message || 'An unexpected error occurred',
      status: -1,
    };
  }
}
