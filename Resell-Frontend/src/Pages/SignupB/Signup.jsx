import React from "react";
import lgn from "./Signup.module.css";
import InnerA from "./InnerA";
import InnerB from "./InnerB";
//

const Signup = () => {
  return (
    <div>
      <div className={lgn.sign_main_container}>
        {/*  */}
        <div className={lgn.sign_main_inner_container}>
          <div className={lgn.sign_main_inner_container_a}>
            <div className={lgn.sign_main_inner_container_a_a}>
              <InnerA />
            </div>
          </div>
          <div className={lgn.sign_main_inner_container_b}>
            <div style={{ width: "90%", margin: "auto" }}>
              <InnerB />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Signup;
