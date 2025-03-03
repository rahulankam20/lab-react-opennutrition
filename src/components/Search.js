import { Input } from "antd";

function Search({ onSearch }) {
  return <Input placeholder="Search food..." onChange={(e) => onSearch(e.target.value)} />;
}

export default Search;
