import React from "react";
import styles from "./Stacks.module.css";
import { BsChevronRight } from "react-icons/bs";

const StackA = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      className={styles.stacks_main_div}
    >
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="https://teja8.kuikr.com/escrow/assets/image/quikrBazaar/MT_links_bg.png"
          alt="alt"
        />
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%",
            color: "white",
          }}
        >
          Mobile & Tablets
        </p>
      </div>
      <div>
        <div>
          <p>Used Mobiles</p>
          <BsChevronRight />
        </div>
        <div>
          <p>Tablets</p>
          <BsChevronRight />
        </div>
        <div>
          <p>Accessories</p>
          <BsChevronRight />
        </div>
        <div>
          <p>Wearables</p>
          <BsChevronRight />
        </div>
        <div>
          <p>View All</p>
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
};

export default StackA;
