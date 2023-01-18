import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Mobiles.css";
import MobilesCard from "./MobilesCard";
import Filters from "./Filters";

const Mobiles = () => {
  //   const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //
  //   function loadingTimer() {
  //     setLoading(false);
  //   }
  //
  useEffect(() => {
    axios
      .get(`https://courageous-umbrella-moth.cyclic.app/mobile`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    // setTimeout(loadingTimer, 1500);
  }, []);

  return (
    <div className="main_mobiles_container">
      <div className="mobiles_filter_data_ads_container">
        {/*  */}
        <div className="mobiles_filter_container">
          <Filters />
        </div>
        <div className="mobiles_data_sort_container">
          <div className="category_select_and_sort">
            <div className="category_selected">category</div>
            <div className="sort_mobiles_select">
              <p>Sort by</p>
              <select class="priceFilter">
                <option value="popularityDesc">Popularity</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="priceAsc">Price: Low to High</option>
              </select>
            </div>
          </div>
          <div className="mobiles_data_container">
            {data.map((mobile) => (
              <MobilesCard key={mobile.id} data={mobile} />
            ))}
          </div>
        </div>
        <div className="mobiles_ads_container">
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
