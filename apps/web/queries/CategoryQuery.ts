import { gql } from "@apollo/client";

export const getAll = {
  query: gql`
    query CategoryList {
      categories {
        id
        description
        name
        slug
      }
    }
  `,
};
