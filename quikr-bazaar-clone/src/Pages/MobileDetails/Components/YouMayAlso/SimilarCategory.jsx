import React from "react";
import "./SimilarCategory.css";

const SimilarCategory = () => {
  return (
    <>
      <hr style={{ width: "65%", marginTop: "3rem", marginBottom: "3rem" }} />
      <div className="SimilarCategory_main">
        {/*  */}
        <div className="SimilarCategory_main_inner">
          <div>
            <p>You May Also Like</p>
            <p>Inspired by your browsing history</p>
          </div>
          {/*  */}
          <div className="may_category_cards">
            {/*  */}
            <div>
              <div>
                <img
                  src="https://teja9.kuikr.com/public/core/recommendation/images/jobs/v2/jobs.png"
                  alt="img"
                />
                <p>Jobs</p>
              </div>
              <div>
                <p>BPO/Telecaller</p>
              </div>
            </div>
            {/*  */}
            <div>
              <div>
                <img
                  src="https://teja9.kuikr.com/public/core/recommendation/images/home-lifestyle/v2/home_lifestyle.png"
                  alt="img"
                />
                <p>Lifestyle</p>
              </div>
              <div>
                <p>Furniture</p>
              </div>
            </div>
            {/*  */}
            <div>
              <div>
                <img
                  src="https://teja9.kuikr.com/public/core/recommendation/images/electronics-appliances/v2/electronics_appliances.png"
                  alt="img"
                />
                <p>Electronics</p>
              </div>
              <div>
                <p>Refrigerators</p>
              </div>
            </div>
            {/*  */}
            <div>
              <div>
                <img
                  src="https://teja9.kuikr.com/public/core/recommendation/images/mobiles-tablets/v2/mobiles_tablets.png"
                  alt="img"
                />
                <p>Mobiles</p>
              </div>
              <div>
                <p>Apple Clones</p>
              </div>
            </div>
            {/*  */}
            <div>
              <div>
                <img
                  style={{ width: "25%" }}
                  src="https://teja9.kuikr.com/public/core/recommendation/images/cars-bikes/v2/cars_bikes.png"
                  alt="img"
                />
                <p>Cars</p>
              </div>
              <div>
                <p>Maruti Suzuki Swift</p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default SimilarCategory;
