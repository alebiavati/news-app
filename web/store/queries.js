import { gql } from "@apollo/client";

export const BOOKMARKS = gql`
  query GetBookmarks {
    bookmarks {
      id
      source_name
      source_id
      title
      url
      publish_date
    }
  }
`;

export const ARTICLES = gql`
  query GetArticles($query: String!) {
    articles(query: $query) {
      source_name
      source_id
      title
      url
      section
      publish_date
    }
  }
`;
