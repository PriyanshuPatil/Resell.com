import React from "react";
import spcf from "./Specifications.module.css";
const Specifications = ({ details }) => {
  return (
    <div>
      <div>
        <h1 className={spcf.specifications_heading}>Specifications</h1>
      </div>
      {/*  */}

      <div className={spcf.specification_main_inner}>
        <h3>No Specifications available</h3>
      </div>
    </div>
  );
};

export default Specifications;
