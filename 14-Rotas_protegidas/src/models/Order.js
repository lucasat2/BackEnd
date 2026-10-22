const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    cliente: {
        type: String,
        required: true
    },
    produto: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;