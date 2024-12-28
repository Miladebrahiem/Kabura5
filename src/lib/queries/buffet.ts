import { gql } from '@apollo/client';

export const GET_BUFFET_CATEGORIES = gql`
  query GetBuffetCategories {
    categories(where: { parent: 42 }) {  # Replace 42 with your actual buffet category parent ID
      nodes {
        id
        name
        slug
        description
      }
    }
  }
`;

export const GET_BUFFET_ITEMS = gql`
  query GetBuffetItems {
    menuItems(where: { categoryId: 42 }) {  # Replace 42 with your actual buffet category ID
      nodes {
        id
        name
        description
        menuDishMeta {
          price
          type
          history
          minPeople
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;