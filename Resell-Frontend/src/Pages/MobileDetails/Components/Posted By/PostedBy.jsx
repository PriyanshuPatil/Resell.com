import React from "react";
import pstdb from "./PostedBy.module.css";

const PostedBy = ({ details }) => {
  return (
    <div className={pstdb.posted_by_main}>
      <div>
        <h1 className={pstdb.postedby_heading}>Posted By</h1>
      </div>
      {/*  */}
      <div className={pstdb.user_details_container}>
        <div>
          <div>
            <h1>U</h1>
          </div>
        </div>
        {/*  */}
        <div>
          <img
            src="https://getonside.com/wp-content/uploads/2021/08/Digital-check-in.png"
            alt="verified"
          />

          <p>Mobile Verified</p>
        </div>
        {/*  */}
        <div>
          <button>Chat Now</button>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default PostedBy;
