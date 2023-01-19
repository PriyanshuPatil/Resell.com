import React from "react";
import "./Description.css";

const DescriptionDetails = ({ details }) => {
  return (
    <div>
      <h1 className="description_heading">Description</h1>
      <p className="description_body">
        {details.description || "No description available !"}
      </p>
    </div>
  );
};

export default DescriptionDetails;
