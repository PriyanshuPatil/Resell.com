import React from "react";
import lgn from "./Login.module.css";
import InnerA from "./InnerA";
import InnerB from "./InnerB";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//

const Login = () => {
  let navigate = useNavigate();
  const { loading, error, token,isAuth } = useSelector(
    (state) => state.Auth
  );
  if(isAuth){
    navigate("/")
  }
  return (
    <div>
      <div className={lgn.login_main_container}>
        {/*  */}
        <div className={lgn.login_main_inner_container}>
          <div className={lgn.login_main_inner_container_a}>
            <div className={lgn.login_main_inner_container_a_a}>
              <InnerA />
            </div>
          </div>
          <div className={lgn.login_main_inner_container_b}>
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

export default Login;
