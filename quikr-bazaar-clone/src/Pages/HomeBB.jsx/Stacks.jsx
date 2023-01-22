import React from "react";
import StackA from "./StackA";
import StackB from "./StackB";
import StackC from "./StackC";
import styles from "./Stacks.module.css";

const Stacks = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Buy and Sell from 1200+ Cities Across India
      </h1>
      <div className={styles.stacks_container}>
        <StackA />
        <StackB />
        <StackC />
      </div>
    </div>
  );
};

export default Stacks;
