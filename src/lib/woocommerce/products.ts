import { gql } from '@apollo/client';

export const GET_BUFFET_PRODUCTS = gql`
  query GetBuffetProducts {
    products(where: { categoryIn: ["buffetten"] }) {
      nodes {
        id
        name
        description
        shortDescription
        price
        regularPrice
        productCategories {
          nodes {
            name
            slug
          }
        }
        image {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;