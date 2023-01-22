import React from "react";
import styles from "./Stacks.module.css";
import { BsChevronRight } from "react-icons/bs";

const StackC = () => {
  return (
    <div
      className={styles.stacks_main_div}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="https://teja8.kuikr.com/escrow/assets/image/quikrBazaar/EL_links_bg.png"
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
          Electronics & Appliances
        </p>
      </div>
      <div>
        <div>
          <p>Laptop & Accessories</p>
          <BsChevronRight />
        </div>
        <div>
          <p>TV - DVD - Multimedia</p>
          <BsChevronRight />
        </div>
        <div>
          <p>Camera & Accessories</p>
          <BsChevronRight />
        </div>
        <div>
          <p>Home Appliances</p>
          <BsChevronRight />
        </div>
        <div>
          <p>Kitchen Appliances</p>
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

export default StackC;
