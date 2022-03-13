import { gql } from "@apollo/client";

export const GET_ALL_SHIPS = gql`
    query getAllShips($limit: Int!, $offset: Int!) {
        ships(limit: $limit, offset: $offset) {
            id
            name
            image
            year_built
        }
    }
`