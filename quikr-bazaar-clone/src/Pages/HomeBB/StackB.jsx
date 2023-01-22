import React from "react";
import styles from "./Stacks.module.css";
import { BsChevronRight } from "react-icons/bs";

const StackB = () => {
  return (
    <div
      className={styles.stacks_main_div}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%" }}
          src="https://teja8.kuikr.com/escrow/assets/image/quikrBazaar/HL_links_bg.png"
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
          Home & Lifestyle
        </p>
      </div>
      <div>
        <div>
          <p>Furniture & Decor</p>
          <BsChevronRight />
        </div>
        <div>
          <p>Sports, Hobbies & Fashion</p>
          <BsChevronRight />
        </div>
        <div>
          <p>Luggages</p>
          <BsChevronRight />
        </div>
        <div>
          <p>Footwear</p>
          <BsChevronRight />
        </div>
        <div>
          <p>Household Items</p>
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

export default StackB;
