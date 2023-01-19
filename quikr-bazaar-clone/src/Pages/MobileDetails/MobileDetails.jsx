import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MobileDetails.css";
import CarouselA from "../Carousel/Carousel";
import Loading from "../Loading";
import DescriptionCard from "./DescriptionCard";
import DetailsTab from "../DetailsTab";

const MobileDetails = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [similar, setSimilar] = useState([]);
  //
  function loadingTimer() {
    setLoading(false);
  }
  //

  //
  useEffect(() => {
    axios
      .get(`https://courageous-umbrella-moth.cyclic.app/mobile/1689146689`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    setTimeout(loadingTimer, 1500);
  }, []);
  // console.log(data);
  //

  if (!loading) {
    return (
      <div className="mobileDetails_main_container">
        {/*  */}
        <div className="mobileDetails_main_inner_container">
          <div className="images_and_description">
            <div className="all_product_images">
              <CarouselA
                img1={data.images[0].url}
                img2={data.images[1].url}
                img3={data.images[2].url}
                img4={data.images[3].url}
              />
            </div>
            <div className="all_product_images_carousel">
              <CarouselA
                img1={data.images[0].url}
                img2={data.images[1].url}
                img3={data.images[2].url}
                img4={data.images[3].url}
              />
            </div>
            <div className="all_product_description">
              <DescriptionCard desc={data} />
            </div>
          </div>
        </div>
        {/*  */}
        <DetailsTab details={data} />
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default MobileDetails;
