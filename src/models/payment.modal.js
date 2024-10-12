const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    amount: {
        type: Number
    },
    status: {
        type: String,
        enum: ['Pending', 'Paid'],
        default: 'Pending'
    }
});

module.exports = mongoose.model('Payment', PaymentSchema);
