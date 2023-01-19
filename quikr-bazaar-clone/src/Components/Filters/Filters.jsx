import React from "react";
import fls from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={fls.filter_main_container}>
      <div className={fls.filter_head}>Filter By</div>
      <hr style={{ width: "90%" }} />
      {/*  */}
      <div className={fls.filter_ctg}>
        <div>Brand Name</div>
        <div>
          <input type="checkbox" />
          <p>Samsung</p>
        </div>
        {/*  */}
        <div>
          <input type="checkbox" />
          <p>Apple</p>
        </div>
        {/*  */}
        <div>
          <input type="checkbox" />
          <p>OnePlus</p>
        </div>
        {/*  */}
        <div>
          <input type="checkbox" />
          <p>Boat</p>
        </div>
        {/*  */}
        <div>
          <input type="checkbox" />
          <p>Poco</p>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className={fls.filter_ctg}>
        <div>Price Range</div>
        <div>
          <input type="checkbox" />
          <p>₹500 & Below</p>
        </div>
        {/*  */}
        <div>
          <input type="checkbox" />
          <p>₹501 - ₹1,000</p>
        </div>
        {/*  */}
        <div>
          <input type="checkbox" />
          <p>₹1,001 - ₹10,000</p>
        </div>
        {/*  */}
        <div>
          <input type="checkbox" />
          <p>₹10,000 - ₹50,000</p>
        </div>
        {/*  */}
        <div>
          <input type="checkbox" />
          <p>₹50,000 & Above</p>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className={fls.filter_ctg}>
        <div>Operation System</div>
        <div>
          <input type="checkbox" />
          <p>Android</p>
        </div>
        {/*  */}
        <div>
          <input type="checkbox" />
          <p>IOS</p>
        </div>
        {/*  */}
        <div>
          <input type="checkbox" />
          <p>Blackberry</p>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Filters;
