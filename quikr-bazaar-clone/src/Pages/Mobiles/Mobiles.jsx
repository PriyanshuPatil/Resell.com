import React, { useEffect, useState } from "react";
import axios from "axios";
import mbls from "./Mobiles.module.css";
import MobilesCard from "../../Components/MobilesCard/MobilesCard";
import Filters from "../../Components/Filters/Filters";
import { useLocation } from "react-router-dom";

const Mobiles = () => {
  const location = useLocation();
  console.log(location.state);
  //   const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //
  //   function loadingTimer() {
  //     setLoading(false);
  //   }
  //
  useEffect(() => {
    axios
      .get(
        `https://courageous-umbrella-moth.cyclic.app/${location.state.keyword}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    // setTimeout(loadingTimer, 1500);
  }, []);
  //
  const handleFilterChange = (e) => {
    console.log(e.target.value);
    if (e.target.value === "priceAsc") {
      let response = axios
        .get(
          `https://courageous-umbrella-moth.cyclic.app/${location.state.keyword}?_sort=price.value.raw&order=asc`
        )
        .then((res) => setData(res.data));
    }
    if (e.target.value === "priceDesc") {
      axios
        .get(
          `https://courageous-umbrella-moth.cyclic.app/${location.state.keyword}?_sort=price.value.raw&_order=desc`
        )
        .then((res) => setData(res.data));
    }
    if (e.target.value === "popularityDesc") {
      axios
        .get(
          `https://courageous-umbrella-moth.cyclic.app/${location.state.keyword}?_sort=score&_order=desc`
        )
        .then((res) => setData(res.data));
    }
  };
  //

  return (
    <div className={mbls.main_mobiles_container}>
      <div className={mbls.mobiles_filter_data_ads_container}>
        {/*  */}
        <div className={mbls.mobiles_filter_container}>
          <Filters />
        </div>
        <div className={mbls.mobiles_data_sort_container}>
          <div className={mbls.category_select_and_sort}>
            <div className={mbls.category_selected}>category</div>
            <div className={mbls.sort_mobiles_select}>
              <p>Sort by</p>
              <select
                onChange={(e) => handleFilterChange(e)}
                className={mbls.priceFilter}
              >
                <option value="popularityDesc">Popularity</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="priceAsc">Price: Low to High</option>
              </select>
            </div>
          </div>
          <div className={mbls.mobiles_data_container}>
            {data.length > 0 &&
              data.map((mobile) => (
                <MobilesCard key={mobile.id} data={mobile} query={location} />
              ))}
          </div>
        </div>
        <div className={mbls.mobiles_ads_container}>
          <img
            src="https://tpc.googlesyndication.com/daca_images/simgad/14781010476110498296"
            alt="ad"
          />
          <img
            src="https://tpc.googlesyndication.com/simgad/9404550059267682862?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qlruvVUImC-sAvpRj2JB0kik_Hwjw"
            alt="ad"
          />
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Mobiles;
