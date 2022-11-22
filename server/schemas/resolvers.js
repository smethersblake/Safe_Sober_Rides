const Review = require('../models/Review')

const resolvers = {
    Query: {
        getReview: async (parent, args) =>
        {
            return Review.find(args)
        },
        getReviewRating: async(parent, args) => {
            return Review.find(args)
        }
    },
    Mutation: {
        addReview: async (parent, args) =>
        {
            return await Review.create(args)
        }
    }
}

module.exports = resolvers