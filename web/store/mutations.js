import { gql } from "@apollo/client";

export const ADD_BOOKMARK = gql`
  mutation InsertBookmark($object: bookmarks_insert_input!) {
    insert_bookmarks_one(object: $object) {
      id
    }
  }
`;

export const REMOVE_BOOKMARK = gql`
  mutation DeleteBookmark($source_name: String!, $source_id: String!) {
    delete_bookmarks(
      where: {
        source_name: { _eq: $source_name }
        source_id: { _eq: $source_id }
      }
    ) {
      affected_rows
    }
  }
`;
