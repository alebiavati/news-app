import { useQuery, useMutation } from "@apollo/client";
import groupBy from "lodash/groupBy";
import { useSession } from "../../utils/auth";
import { BOOKMARKS, ARTICLES } from "../../store/queries";
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../../store/mutations";
import * as _ from "lodash";
import moment from "moment";

const BookmarkCheckbox = ({
  source_name,
  source_id,
  title,
  url,
  publish_date,
}) => {
  const [session] = useSession();
  const { data: bookmarksData } = useQuery(BOOKMARKS, { skip: !session });
  const [addBookmark] = useMutation(ADD_BOOKMARK);
  const [removeBookmark] = useMutation(REMOVE_BOOKMARK);

  return (
    <>
      {" - Bookmark?"}
      <input
        type="checkbox"
        defaultChecked={
          !!_.find(bookmarksData.bookmarks, {
            source_name,
            source_id,
          })
        }
        onChange={(event) => {
          if (event.target.checked) {
            addBookmark({
              variables: {
                object: {
                  source_name,
                  source_id,
                  title,
                  url,
                  publish_date,
                },
              },
            });
          } else {
            removeBookmark({
              variables: {
                source_name,
                source_id,
              },
            });
          }
        }}
      />
    </>
  );
};

export default function SearchResults({ className, query }) {
  const [session, loadingSession] = useSession();

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
            <li key={section}>
              <strong>{section}</strong>
              <ul>
                {sections[section].map(
                  ({ source_name, source_id, title, url, publish_date }) => (
                    <li key={`${source_name}${source_id}`}>
                      <em>
                        <time dateTime={publish_date}>
                          {moment(publish_date).format("DD/MM/YYYY")}
                        </time>
                      </em>
                      {" - "}
                      <a href={url} target="_blank">
                        {title}
                      </a>
                      {session && !loadingSession && (
                        <>
                          <BookmarkCheckbox
                            source_name={source_name}
                            source_id={source_id}
                            title={title}
                            url={url}
                            publish_date={publish_date}
                          />
                        </>
                      )}
                    </li>
                  )
                )}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
