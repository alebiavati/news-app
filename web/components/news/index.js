// import debounce from "lodash/debounce";

import { useState } from "react";
import Search from "../search";
import SearchResults from "../search-results";
import Bookmarks from "../bookmarks";

export default function News({ className }) {
  const [searchQuery, setSearchQuery] = useState();
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={className}>
      <Search handleSearch={handleSearch} />
      <Bookmarks />
      <SearchResults query={searchQuery} />
    </div>
  );
}
