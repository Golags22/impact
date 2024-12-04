// pages/payment.js
import { useState } from 'react';

export default function PaymentPage() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [orderId, setOrderId] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    const paymentData = {
      email,
      amount,
      orderId,
    };

    const res = await fetch('/api/monify-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    const data = await res.json();

    if (data && data.payment_url) {
      // Redirect to Monify's payment page
      window.location.href = data.payment_url;
    } else {
      alert('Failed to initialize payment');
    }
  };

  return (
    <div>
      <h1>Make a Payment</h1>
      <form onSubmit={handlePayment}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount (NGN)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}
