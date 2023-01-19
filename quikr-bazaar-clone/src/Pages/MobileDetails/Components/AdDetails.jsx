import React from "react";
import "./AdDetails.css";

const AdDetails = ({ details }) => {
  return (
    <div className="ad_details_main_container">
      <div className="inner_section_a">
        <h1 className="ad_details_heading">Ad Details</h1>
      </div>
      {/*  */}

      <div className="inner_section_b">
        <div className="ad_details_main_inner">
          <div>
            <div>
              <p>Ad ID</p>
            </div>
            <div>
              <p>{details.id}</p>
            </div>
          </div>
          <div>
            <div>
              <p>Model</p>
            </div>
            <div>
              <p>{details.title}</p>
            </div>
          </div>
          <div>
            <div>
              <p>Physical Condition</p>
            </div>
            <div>
              <p>{details.inspection_info || "Good"}</p>
            </div>
          </div>
          <div>
            <div>
              <p>Purchase Year</p>
            </div>
            <div>
              <p>{details.display_date.slice(0, 4) - 2}</p>
            </div>
          </div>

          {/*  */}
        </div>
        <hr />
        {/*  */}
        <div className="ad_details_main_inner">
          <div>
            <div>
              <p>Brand Name</p>
            </div>
            <div>
              <p>{details.parameters[0].value_name}</p>
            </div>
          </div>
          <div>
            <div>
              <p>Location</p>
            </div>
            <div>
              <p>{details.locations_resolved.ADMIN_LEVEL_1_name}</p>
            </div>
          </div>
          <div>
            <div>
              <p>Condition</p>
            </div>
            <div>
              <p>Used</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default AdDetails;
