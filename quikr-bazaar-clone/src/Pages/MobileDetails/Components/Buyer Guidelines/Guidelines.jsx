import React from "react";
import "./Guidelines.css";
import { MdVerifiedUser } from "react-icons/md";

const Guidelines = () => {
  return (
    <div className="guidelines_main">
      <div>
        <h1 className="guidelines_heading">Buyer Guidelines</h1>
      </div>
      <div className="guidelines_main_inner">
        <div>
          <MdVerifiedUser style={{ fontSize: "1.5rem", color: "#95d4a9" }} />
          <p>Be careful when paying offline</p>
        </div>
        <div>
          <MdVerifiedUser style={{ fontSize: "1.5rem", color: "#95d4a9" }} />
          <p>
            Beware of ads with unrealistic prices, lookalikes or clone products
          </p>
        </div>
        <div>
          <MdVerifiedUser style={{ fontSize: "1.5rem", color: "#95d4a9" }} />
          <p>Chat and ask questions to be clear on product details</p>
        </div>
        <div>
          <MdVerifiedUser style={{ fontSize: "1.5rem", color: "#95d4a9" }} />
          <p>
            Do not deposit/transfer money to bank or any third party payment
            gateways without verifying the credentials
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
