// File: client/src/components/PaymentForm.js

import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = ({ reservationId, amount }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [message, setMessage] = useState('');

  const handlePayment = async () => {
    try {
      // Placeholder API call - integrate with actual payment gateway as needed
      const response = await axios.post('http://localhost:5000/api/payments', {
        reservationId,
        amount,
        paymentMethod,
        cardNumber, // Simulate sending card details
        expiry,
        cvv
      });

      setMessage('Payment successful!');
      console.log(response.data);
    } catch (error) {
      setMessage('Payment failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Complete Payment</h3>
      <p>Amount: ${amount}</p>

      <label>Payment Method:</label>
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="">Select</option>
        <option value="card">Credit/Debit Card</option>
        <option value="paypal">PayPal</option>
      </select>

      {paymentMethod === 'card' && (
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />

          <label>Expiry Date:</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />

          <label>CVV:</label>
          <input
            type="text"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
      )}

      <button onClick={handlePayment}>Pay Now</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PaymentForm;
