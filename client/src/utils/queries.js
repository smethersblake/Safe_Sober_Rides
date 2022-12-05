import { gql } from "@apollo/client";

export const QUERY_GET_REVIEW = gql`
    getReview {
        name
        bar
        rating}
        `