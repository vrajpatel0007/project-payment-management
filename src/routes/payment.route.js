const express = require('express');
const payment_Controller = require('../controllers/payment.controller');
const auth = require('../middleware/auth');
const { authUser } = require("../middleware/auth");
const router = express.Router();

router.post('/', authUser, payment_Controller.createPayment);
router.get('/', authUser, payment_Controller.getPayments);
router.put('/:id/pay', authUser, payment_Controller.markPaymentAsPaid);

module.exports = router;
