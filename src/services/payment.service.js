const Payment = require('../models/payment.modal');

// Create a new payment
const createPayment = async (data) => {
    return await payment.create(data);
};

// Get all payments with project details
const getPayments = async () => {
    return await Payment.find().populate('projectId');
};

// Mark a payment as paid
const markPaymentAsPaid = async (paymentId) => {
    return await Payment.findByIdAndUpdate(paymentId, { status: 'Paid' }, { new: true });
};

module.exports = {
    createPayment,
    getPayments,
    markPaymentAsPaid
};
