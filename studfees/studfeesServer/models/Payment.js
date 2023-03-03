const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    dapartmentName: {
        type: String,
        required: true
    },

    levyName: {
        type: String,
        required: true
    },
    feeAmount: {
        type: Number,
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Payments', paymentSchema);