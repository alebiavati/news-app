import React from "react";
import debounce from "lodash/debounce";

function NewsSearch({ handleSearch }) {
  return (
    <input onChange={debounce(handleSearch, 50)} placeholder="Search news" />
  );
}

export default React.memo(NewsSearch, () => true);
