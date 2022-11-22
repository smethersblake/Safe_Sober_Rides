const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Review {
        _id: ID
        bar: String
        rating: Int
        name: String
        }`

    module.exports = typeDefs