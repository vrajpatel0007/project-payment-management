const payment_Service = require('../services/payment.service');

// Create a new payment
const createPayment = async (req, res) => {
  try {
    const payment = await payment_Service.createPayment(req.body);
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create payment' });
  }
};

// Get all payments
const getPayments = async (req, res) => {
  try {
    const payments = await payment_Service.getPayments();
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
};

// Mark a payment as paid
const markPaymentAsPaid = async (req, res) => {
  try {
    const payment = await payment_Service.markPaymentAsPaid(req.params.id);
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update payment status' });
  }
};

module.exports = {
  createPayment,
  getPayments,
  markPaymentAsPaid,
};
