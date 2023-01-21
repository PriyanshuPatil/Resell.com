import React from "react";
import dscrp from "./Description.module.css";

const DescriptionDetails = ({ details }) => {
  return (
    <div>
      <h1 className={dscrp.description_heading}>Description</h1>
      <p className={dscrp.description_body}>
        {details.description || "No description available !"}
      </p>
    </div>
  );
};

export default DescriptionDetails;
