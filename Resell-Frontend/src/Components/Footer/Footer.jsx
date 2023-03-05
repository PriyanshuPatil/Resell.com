import React from "react";
import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate=useNavigate()
  return (
    <div
      className="main-footer-component"
      style={{ width:"80%",
      margin:"auto",
        borderBottom: "1px solid",
        padding: "1rem",
        borderTop: "1px solid",
        marginTop: "1rem",
        textAlign: "center",
       
        
      }}
    >
      <Grid 
        className="footer-two-social-icon"
        style={{
          display: "grid",
          gap: "25rem",
          alignItems: "center",
          justifyContent: "center",
           gridTemplateColumns:[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
        ]
        }}
       
      >
        <GridItem>
          <p style={{ fontSize: "14px", marginBottom: "1rem" }}>
            <b>Sign up to our email list and receive 20% off your next order</b>
          </p>
          <Button colorScheme="gray" variant="solid" onClick={()=>{navigate("/register")}}>
            SIGN UP
          </Button>
        </GridItem>

        {/* <GridItem>
          <p style={{ fontSize: "14px", marginBottom: "1rem" }}>
            <b>Connect with us</b>
          </p>
          <div
            className="social-media-icons"
            style={{ display: "flex", gap: "1rem" }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
              width="35px"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
              width="35px"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145812.png"
              width="35px"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/145/145808.png"
              width="35px"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1377/1377224.png"
              width="35px"
              alt=""
            />
          </div>
        </GridItem> */}
      </Grid>
      <Grid >
        <Grid templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
      ]}
          className="help-information-flex-list-layout"
          style={{
            display: "grid",
            gap: "1rem",
            justifyContent: "center",
            fontSize: "15px",
            fontWeight: "200",
            marginTop: "4rem",
            templateColumns:[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]
          }}
        >
          <GridItem style={{ borderTop: "1px solid", padding: "1rem" }}>
            <ul>
              <ul style={{ marginBottom: "1rem" }}>
                <b>Help & Information</b>
              </ul>
              <ul>Customer Service</ul>
              <ul>Delivery Information</ul>
              <ul>Returns and Refund</ul>
              <ul>Help Center</ul>
              <ul>Track my Order</ul>
            </ul>
          </GridItem>

          <GridItem style={{ borderTop: "1px solid", padding: "1rem" }}>
            <ul>
              <ul style={{ marginBottom: "1rem" }}>
                <b>About SkinStore</b>
              </ul>
              <ul>Key Workers Discount</ul>
              <ul>About Us</ul>
              <ul>Affiliate Program</ul>
              <ul>Brand Directory</ul>
              <ul>Coupon Code</ul>
              <ul>Refer a friend</ul>
              <ul>Student Discount</ul>
            </ul>
          </GridItem>

          <GridItem style={{ borderTop: "1px solid", padding: "1rem" }}>
            <ul>
              <ul style={{ marginBottom: "1rem" }}>
                <b>Legal</b>
              </ul>
              <ul>Cookie Information</ul>
              <ul>Privacy Policy</ul>
              <ul>Terms and Condition</ul>
              <ul>Modern Slavory Statement</ul>
            </ul>
          </GridItem>

          <GridItem style={{ borderTop: "1px solid", padding: "1rem" }}>
            <ul>
              <ul style={{ marginBottom: "1rem" }}>
                <b>How to Contact Us</b>
              </ul>
              <ul>Message Us</ul>
              <ul>Free Beauty Consultattions</ul>
            </ul>
          </GridItem>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;