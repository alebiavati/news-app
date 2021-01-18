import { useQuery, gql } from "@apollo/client";
import { useSession } from "../../utils/auth";

const BOOKMARKS = gql`
  query GetBookmarks {
    bookmarks {
      id
      title
      url
    }
  }
`;

export default function Bookmarks({ className }) {
  const handleChange = (event) => console.log(event.target.value);

  const [session, _] = useSession();
  const { data } = useQuery(BOOKMARKS, { skip: !session });

  return (
    <div className={className}>
      <h4>Bookmarks:</h4>
      {data && (
        <ul>
          {data.bookmarks.map(({ id, title, url }) => (
            <li key={id}>
              <a href={url} target="_blank">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
