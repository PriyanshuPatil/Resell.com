import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import { FaRupeeSign } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";

const InnerA = () => {

  return (
    <>
      {/*  */}
      <div>
        <div>
          <GoLocation style={{ fontSize: "2rem", color: "#bff4f6" }} />
        </div>
        <div style={{ fontSize: "x-small", lineHeight: "10px", width: "60%" }}>
          <h3>Track your orders</h3>
          <p>Track your orders, delivery and returns</p>
        </div>
      </div>
      {/*  */}
      <div>
        <div>
          <FaRupeeSign style={{ fontSize: "2rem", color: "#bff4f6" }} />
        </div>
        <div style={{ fontSize: "x-small", lineHeight: "10px", width: "60%" }}>
          <h3>Manage your orders</h3>
          <p>Managing order becomes at your fingertips</p>
        </div>
      </div>
      {/*  */}
      <div>
        <div>
          <BsFillBellFill style={{ fontSize: "2rem", color: "#bff4f6" }} />
        </div>
        <div style={{ fontSize: "x-small", lineHeight: "10px", width: "60%" }}>
          <h3>Get notified realtime</h3>
          <p>Get status updates through SMS and Whatsapp</p>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default InnerA;
