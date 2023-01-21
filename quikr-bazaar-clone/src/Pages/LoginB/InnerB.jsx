import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiCurrencyRupee } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth.actions";
import { useToast } from "@chakra-ui/react"

const InnerB = () => {
  let navigate = useNavigate();

  const [loginCreds, setLoginCreds] = useState({});

  let dispatch = useDispatch();
  const toast = useToast()

  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    })

    console.log(loginCreds)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds)).then(() => {
      toast({
        title: "Login Successful",
        description: "...redirecting",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }).then(() => navigate("/"))
  }


  return (
    <>
      {/*  */}
      <div style={{ lineHeight: "1.2rem" }}>
        <h2 style={{ fontSize: "medium", marginBottom: "-10px" }}>
          Login/Sign Up On Resell
        </h2>
        <p style={{ fontSize: "x-small", color: "grey" }}>
          Please provide your Mobile Number or Email to Login/Sign Up on Resell
        </p>
      </div>
      {/*  */}
      <form action="">
        {/* <label htmlFor="">Email</label> */}
        <input onChange={handleChange} name="email" type="email" placeholder="Enter your email" />
        {/* <label htmlFor="">Password</label> */}
        <input onChange={handleChange} name="password" type="password" placeholder="Enter your password" />
        <input
          onClick={handleLogin}
          type="button"
          value="Continue"
          style={{
            backgroundColor: "rgb(0, 126, 190)",
            border: "none",
            borderRadius: "5px",
            color: "white",
            cursor: "pointer",
          }}
        />
      </form>
      {/*  */}
      <p
        style={{
          fontSize: "x-small",
          width: "90%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        By Submitting you agree to <Link> T&C</Link> and{" "}
        <Link> Privacy Policy</Link>
      </p>
      {/*  */}
      <div
        style={{
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          backgroundColor: "aliceblue",
          marginTop: "10px",
          padding: "5px 0",
        }}
      >
        <HiCurrencyRupee style={{ fontSize: "1.5rem", color: "#53d688" }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "0%",
          }}
        >
          <div
            style={{
              fontSize: "small",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <h3>Earn upto</h3>
            <h3
              style={{
                color: "#53d688",
              }}
            >
              ₹500 RCash
            </h3>
          </div>
          <p
            style={{
              fontSize: "small",
              marginTop: "-0.0001px",
            }}
          >
            All you need to do is login or sign up
          </p>
        </div>
      </div>
      {/*  */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <p style={{ fontSize: "small" }}>LOGIN USING</p>
      </div>
      {/*  */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          fontSize: "small",
        }}
      >
        <div
          style={{
            width: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
            backgroundColor: "aliceblue",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "20%" }}
            src="https://img.icons8.com/color/512/facebook.png"
            alt="fb"
          />{" "}
          <p>Facebook</p>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
            backgroundColor: "aliceblue",
            borderRadius: "10px",
          }}
        >
          <img
            style={{ width: "20%" }}
            src="https://img.icons8.com/color/512/google-logo.png"
            alt="google"
          />
          <p>Google</p>
        </div>
      </div>
    </>
  );
};

export default InnerB;
