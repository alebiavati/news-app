import debounce from "lodash/debounce";

export default function NewsSearch({ handleSearch }) {
  return (
    <input onChange={debounce(handleSearch, 50)} placeholder="Search news" />
  );
}
