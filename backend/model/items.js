const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    id: String,
    imageSrc: String,
    name: String,
    description: [String],
    price: Number,
    user: {
        id: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }
});


module.exports = mongoose.model('Item', itemSchema);
