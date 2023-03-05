import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiCurrencyRupee } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { login ,logout} from "../../redux/auth/auth.actions";
import { Button, useToast } from "@chakra-ui/react";

const InnerB = () => {
  let navigate = useNavigate();
  const { loading, error, token,isAuth } = useSelector(
    (state) => state.Auth
  );
  const [loginCreds, setLoginCreds] = useState({});

  let dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });

    console.log(loginCreds);
  };

  const handleLogin =async () => {
    await dispatch(logout());
      try {
        if (loginCreds.email && loginCreds.password) {
          
          await dispatch(login({ email:loginCreds.email, password: loginCreds.password }));
          console.log(isAuth?"true":"false")
          if ( isAuth) {
            toast({
              title: "Congratulations!!",
              description: "You have successfully logged in.",
              status: "success",
              duration: 4000,
              isClosable: true,
            });
            navigate("/all_products", { state: { searchCategory:"", keyword:"mobile" } })
          } else {
            toast({
              title: "Oops!",
              description: "Provide the correct credentials",
              status: "error",
              duration: 4000,
              isClosable: true,
            });
            dispatch(logout())
            navigate("/login")
          }
        } else {
          toast({
            title: "Fields are empty",
            description: "Kindly Provide email and password",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }
      } catch (err) {
        toast({
          title: "Oops!",
          description: "Provide the correct credentials",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }

    


  };


  return (
    <>
      {/*  */}
      <div>
        <h2 style={{ fontSize: "medium" }}>Login/Sign Up On Resell</h2>
        <p style={{ fontSize: "x-small", color: "grey", marginBottom: "1rem" }}>
          Please provide your Mobile Number or Email to Login/Sign Up on Resell
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
        <Button onClick={()=>{navigate("/register")}}
          style={{
            fontSize: "14px",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          SignUp
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
