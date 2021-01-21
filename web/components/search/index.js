import React from "react";

function NewsSearch({ handleSearch }) {
  return <input onChange={handleSearch} placeholder="Search news" />;
}

export default React.memo(NewsSearch, () => true);
