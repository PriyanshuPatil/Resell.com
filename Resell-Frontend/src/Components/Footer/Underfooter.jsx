import React from "react";

const Underfooter = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        gap: "5rem",
        justifyContent: "center",
        paddingTop: "1rem",
      }}
    >
      <div>
        <img
          src="https://i.ibb.co/7SjsqT8/logo.png"
          alt="thg-logo"
          width="100px"
        />
        <p>2022 © The Hut.com Ltd</p>
      </div>

      {/* <div>
        <p>
          <b>Powered By</b>
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: [
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
              "repeat(5, 1fr)",
              "repeat(5, 1fr)",
            ],
            gap: "1rem",
          }}
        >
          <div>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
              alt="react"
              width="45px"
            />
          </div>{" "}
          <div>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
              alt="mongo"
              width="45px"
            />
          </div>{" "}
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="js"
              width="45px"
            />
          </div>{" "}
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
              alt="html"
              width="45px"
            />
          </div>{" "}
          <div>
            {" "}
            <img
              src="https://pbs.twimg.com/profile_images/1257282259981234182/KUJHKmPi_400x400.jpg"
              alt="chakra"
              width="45px"
            />
          </div>{" "}
          <div>
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png"
              alt="npm"
              width="45px"
            />
          </div>{" "}
          <div>
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              alt="chakra"
              width="45px"
            />
          </div>{" "}
          <div>
            {" "}
            <img
              src="https://skillshack.blob.core.windows.net/uploads/express.webp"
              alt="visa"
              width="45px"
            />
          </div>{" "}
        </div>
      </div> */}
    </div>
  );
};

export default Underfooter;
