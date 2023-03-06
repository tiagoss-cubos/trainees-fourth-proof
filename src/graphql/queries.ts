import { gql } from "@apollo/client";

export const GET_INFO = gql`
  query getInfo($input: SendRegionalizationInput!) {
    storeRegionalization(input: $input) {
      name
      address
      neighborhood
      city
      state
      postalCode
      hour
      products {
        id
        image
        name
        listPrice
        price
        installments
      }
    }
  }
`;
