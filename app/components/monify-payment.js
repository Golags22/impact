// pages/api/monify-payment.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { amount, email, orderId } = req.body;

      // Monify API endpoint to initialize payment
      const url = 'https://api.monify.com/transaction/initialize';

      const response = await axios.post(
        url,
        {
          amount, // Amount in kobo
          email,  // User email
          order_id: orderId, // Unique order ID
          currency: 'NGN',
          payment_method: 'card', // Payment method, can be changed
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.MONIFY_API_KEY}`, // Use your Monify API key
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        // Return payment link to the frontend
        res.status(200).json(response.data);
      } else {
        res.status(500).json({ message: 'Error initializing payment' });
      }
    } catch (error) {
      console.error('Payment initialization error:', error);
      res.status(500).json({ message: 'Error processing payment' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
