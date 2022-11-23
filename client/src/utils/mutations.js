import { gql } from "@apollo/client"

export const ADD_REVIEW = gql`
    mutation addReview($name: String!, $bar: String!, $rating: Int!){
    addReview(name: $name, bar: $bar, rating: $rating) {
        review {
        name
        bar
        rating}
    
    }}`