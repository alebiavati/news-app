import { useQuery, gql } from "@apollo/client";
import groupBy from "lodash/groupBy";

const ARTICLES = gql`
  query GetArticles($query: String) {
    articles(query: $query) {
      source_name
      source_id
      title
      url
      section
    }
  }
`;

const renderArticle = ({ source_name, source_id, title, url, section }) => (
  <li key={`${source_name}${source_id}`}>
    <a href={url}>{title}</a>
  </li>
);

export default function SearchResults({ className, query }) {
  const { loading, error, data = {} } = useQuery(ARTICLES, {
    variables: { query },
    skip: !query,
  });

  const sections = groupBy(data.articles || [], ({ section }) => section);

  return (
    <div className={className}>
      <h4>Search results:</h4>
      {query && sections && (
        <ul>
          {Object.keys(sections).map((section) => (
            <li>
              <strong>{section}</strong>
              <ul>{sections[section].map(renderArticle)}</ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
