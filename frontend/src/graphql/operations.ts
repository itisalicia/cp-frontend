import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql `
    query GetCountries {
        countries {
            id
            code
            name
            emoji
            continent {
                id
                name
            }
        }
    }
`;
    