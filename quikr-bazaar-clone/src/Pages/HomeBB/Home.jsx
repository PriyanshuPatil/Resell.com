import Carousel from "./Carousel";
import CarouselB from "./CarouselB";
import CarouselC from "./CarouselC";
import CarouselD from "./CarouselD";
import Stacks from "./Stacks";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid red",
      }}
    >
      {/* ================================ */}
      <div>
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
      </div>
      <div>
        <Stacks />
      </div>
      {/* ===================================== */}
      <div>
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
      </div>
      {/* ------------------------------ */}
      <div>
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
        {/* <CarouselC /> */}
      </div>
      {/* ========================= */}
      <div>
        <div>
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
        </div>
        {/* ==================== */}
        <CarouselD />
      </div>

      {/* ================ */}
    </div>
  );
}

export default Home;
