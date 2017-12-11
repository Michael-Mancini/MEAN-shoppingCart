const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    inCart: {
        type: Boolean,
        required: true
    }
});

const Item = module.exports = mongoose.model('Item', ItemSchema);