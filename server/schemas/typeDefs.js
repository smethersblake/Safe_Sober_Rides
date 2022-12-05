const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Review {
        _id: ID
        bar: String
        rating: Int
        name: String
        }
    type Query {
        getReview(bar: String!): [Review]
        getReviewRating(rating: Int!): [Review]
        }
    type Mutation {
        addReview(name: String!, bar: String!, rating: Int!): Review}
        
        `

    module.exports = typeDefs