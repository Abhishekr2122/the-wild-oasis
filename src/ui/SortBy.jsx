import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options, fieldName }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get(fieldName) || "";

  function handleChange(e) {
    searchParams.set(fieldName, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <Select
        options={options}
        type="white"
        onChange={handleChange}
        value={sortBy}
      />
    </div>
  );
}

export default SortBy;
