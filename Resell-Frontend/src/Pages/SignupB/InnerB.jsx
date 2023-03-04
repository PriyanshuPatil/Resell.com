import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiCurrencyRupee } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { login ,logout, registerUser} from "../../redux/auth/auth.actions";
import { Button, useToast } from "@chakra-ui/react";


const InnerB = () => {
  let navigate = useNavigate();
  const { loading, error, token,isAuth } = useSelector(
    (state) => state.Auth
  );
  const [signCreds, setSignCreds] = useState({});

  let dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignCreds({
      ...signCreds,
      [name]: value,
    });

  };

  const handleSignup =async () => {
    if (signCreds.email && signCreds.password && signCreds.mobile && signCreds.name ) {
      try {
        
          await dispatch(registerUser({ email:signCreds.email, password: signCreds.password,phone_number:signCreds.mobile,name:signCreds.name}));
            toast({
              title: "Congratulations!!",
              description: "You have successfully sign in.",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            navigate("/login")
          
        }catch (err) {
        toast({
          title: "Oops!",
          description: "User Allready Registered",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }} else {
        toast({
          title: "Oops!",
          description: "Provide the All credentials",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        dispatch(logout())
        navigate("/register")
      }

    


  };


  return (
    <>
      {/*  */}
      <div>
        <h2 style={{ fontSize: "medium" }}>Sign Up On Resell</h2>
        <p style={{ fontSize: "x-small", color: "grey", marginBottom: "1rem" }}>
          Please provide your Mobile Number or Email to Sign Up on Resell
        </p>
      </div>
      {/*  */}
      <form action="">
        {/* <label htmlFor="">Email</label> */}
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Enter your email" required={true}
        />
        {/* <label htmlFor="">Password</label> */}
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Enter your password" required={true}
        />
        <input
          onChange={handleChange}
          name="mobile"
          type="mobile"
          placeholder="Enter your mobile Number" required={true}
        />
        <input
          onChange={handleChange}
          name="name"
          type="name"
          placeholder="name" required={true}
        />
        <input
          onClick={handleSignup}
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
            }}
          >
            All you need to do is login 
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
        <Button onClick={()=>{navigate("/login")}}
          style={{
            fontSize: "14px",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Login
        </Button>
      </div>
      {/*  */}
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          fontSize: "small",
        }}
      >
        <div
          style={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
            backgroundColor: "aliceblue",
            borderRadius: "10px",
            padding: "0.5rem 0",
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
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
            backgroundColor: "aliceblue",
            borderRadius: "10px",
            padding: "0.5rem 0",
          }}
        >
          <img
            style={{ width: "20%" }}
            src="https://img.icons8.com/color/512/google-logo.png"
            alt="google"
          />
          <p>Google</p>
        </div>
      </div> */}
    </>
  );
};

export default InnerB;
