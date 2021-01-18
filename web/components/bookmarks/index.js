import { useQuery } from "@apollo/client";
import { signIn, useSession } from "../../utils/auth";
import { BOOKMARKS } from "../../store/queries";

export default function Bookmarks({ className }) {
  const [session, loadingSession] = useSession();
  const { data } = useQuery(BOOKMARKS, { skip: !session });

  return (
    <div className={className}>
      <h4>Bookmarks:</h4>
      {!session && !loadingSession && (
        <button onClick={() => signIn()}>Sign in to add bookmarks</button>
      )}
      {data && !data.bookmarks.length > 0 && (
        <p>No bookmarks found, start searching to add bookmarks.</p>
      )}
      {data && data.bookmarks.length > 0 && (
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
