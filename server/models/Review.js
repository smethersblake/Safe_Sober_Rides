const {Schema, model} = require('mongoose')

const reviewScema = new Schema({
    bar: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})
const Review = model('Review', reviewScema)
module.exports = Review