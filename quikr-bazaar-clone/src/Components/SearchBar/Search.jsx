import Styles from "./Search.module.css";
import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [searchCategory, setSearchCategory] = useState("products");
  const [keyword, setKeyword] = useState("");

  //
  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value);
  };
  //
  const handleSearch = () => {
    console.log(searchCategory, keyword);
    navigate("/all_products", { state: { searchCategory, keyword } });
    setKeyword("");
  };

  return (
    <>
      <div className={Styles.searchBox}>
        <div className={Styles.selectHolder}>
          <select
            className={Styles.select}
            onChange={(e) => handleCategoryChange(e)}
          >
            <option value="products">All Categories</option>
            <option value="car">Cars & Bikes</option>
            <option value="mobile">Mobiles & Tablets</option>
            <option value="properties">Properties</option>
          </select>
        </div>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          className={Styles.searchBar}
          placeholder="Search in All India"
        />
        <button onClick={() => handleSearch()} className={Styles.searchButton}>
          <HiOutlineSearch className={Styles.searchIcon} />
        </button>
      </div>
    </>
  );
}

export default Search;
