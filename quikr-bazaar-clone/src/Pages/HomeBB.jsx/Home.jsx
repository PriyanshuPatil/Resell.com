import "./App.css";
import Carousel from "./Carousel";
import CarouselB from "./CarouselB";
import CarouselC from "./CarouselC";
import CarouselD from "./CarouselD";
import Stacks from "./Stacks";

function Home() {
    <>
      {/* ================================ */}
      <>
        <h1
          style={{
            width: "90%",
            maxWidth: "1247px",
            margin: "auto",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          Most Popular Products
        </h1>{" "}
        <Carousel />
      </>

      <Stacks />
      {/* ===================================== */}
      <>
        <h1
          style={{
            width: "90%",
            maxWidth: "1247px",
            margin: "auto",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          Trending Ads
        </h1>{" "}
        <CarouselB />
      </>
      {/* ------------------------------ */}
      <>
        <h1
          style={{
            width: "90%",
            maxWidth: "1247px",
            margin: "auto",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          Home And Lifestyle
        </h1>{" "}
        <CarouselC />
      </>
      {/* ========================= */}
      <>
        <h1
          style={{
            width: "90%",
            maxWidth: "1247px",
            margin: "auto",
            marginTop: "50px",
            marginBottom: "20px",
          }}
        >
          Electronics and appliances
        </h1>{" "}
      </>
      {/* ==================== */}
      <CarouselD />
      {/* ================ */}
    </>
  
}

export default Home;
