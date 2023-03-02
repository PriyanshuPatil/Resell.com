import React from "react";
import { Button } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div
      className="main-footer-component"
      style={{
        borderBottom: "1px solid",
        padding: "1rem",
        borderTop: "1px solid",
        marginTop: "1rem",
        textAlign: "center"
      }}
    >
      <div
        className="footer-two-social-icon"
        style={{
          display: "flex",
          gap: "25rem",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <div>
          <p style={{ fontSize: "14px", marginBottom: "1rem" }}>
            <b>Sign up to our email list and receive 20% off your next order</b>
          </p>
          <Button colorScheme="gray" variant="solid">
            SIGN UP
          </Button>
        </div>

        <div>
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
        </div>
      </div>

      <div
        className="help-information-flex-list-layout"
        style={{
          display: "flex",
          gap: "8rem",
          justifyContent: "center",
          fontSize: "15px",
          fontWeight: "200",
          marginTop: "4rem",
        }}
      >
        <div style={{ borderTop: "1px solid", padding: "1rem" }}>
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
        </div>

        <div style={{ borderTop: "1px solid", padding: "1rem" }}>
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
        </div>

        <div style={{ borderTop: "1px solid", padding: "1rem" }}>
          <ul>
            <ul style={{ marginBottom: "1rem" }}>
              <b>Legal</b>
            </ul>
            <ul>Cookie Information</ul>
            <ul>Privacy Policy</ul>
            <ul>Terms and Condition</ul>
            <ul>Modern Slavory Statement</ul>
          </ul>
        </div>

        <div style={{ borderTop: "1px solid", padding: "1rem" }}>
          <ul>
            <ul style={{ marginBottom: "1rem" }}>
              <b>How to Contact Us</b>
            </ul>
            <ul>Message Us</ul>
            <ul>Free Beauty Consultattions</ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;