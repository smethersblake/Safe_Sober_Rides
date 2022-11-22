const {Schema, model} = require('mongoose')

const reviewSchema = new Schema({
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
const Review = model('Review', reviewSchema)
module.exports = Review