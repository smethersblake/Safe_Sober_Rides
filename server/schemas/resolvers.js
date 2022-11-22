const Review = require('../models')

const resolvers = {
    Query: {
        getReview: async (parent, args) =>
        {
            return Review.find(args)
        },
        getOIneReview: async (parent, args) =>
        {
            return Review.findOne(args)
        }
    }
}

module.exports = resolvers