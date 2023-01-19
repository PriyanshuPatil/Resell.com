import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import AdDetails from "./Contents/AdDetails";
import Guidelines from "./Contents/Buyer Guidelines/Guidelines";
import DescriptionDetails from "./Contents/DescriptionDetails";
import PostedBy from "./Contents/Posted By/PostedBy";
import Specifications from "./Contents/Specifications";
import SimilarCategory from "./Contents/YouMayAlso/SimilarCategory";
import "./DetailsTab.css";

function DetailsTab({ details }) {
  const [toggleState, setToggleState] = useState(1);
  console.log(details);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="details_tab">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Ad Details
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Description
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Specifications
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <AdDetails details={details} />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <DescriptionDetails details={details} />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Specifications details={details} />
          </div>
        </div>
      </div>
      {/* DETAILS SECOND SECTION*/}
      <PostedBy />
      <Guidelines />
      <SimilarCategory />
    </>
  );
}

export default DetailsTab;
