import React from "react";
import mobCard from "./MobileCard.module.css";

const MobilesCard = ({ data }) => {
  // console.log(data.images);
  //
  return (
    <div className={mobCard.mobile_card_main_container}>
      {/*  */}
      <div className={mobCard.mobile_card_img_desc}>
        <div className={mobCard.img_of_product}>
          <img src={data.images[0].url} alt="img" />
        </div>
        <div className={mobCard.desc_of_product}>
          <p className={mobCard.mobile_card_title}>{data.title}</p>
          <p>{data.created_at.slice(0, 10)}</p>
        </div>
      </div>
      {/*  */}
      <div className={mobCard.mobile_card_price_view_details}>
        <h2>{data.price.value.display}</h2>
        <button className={mobCard.mobilecard_view_details_button}>
          View Details
        </button>
      </div>
      {/*  */}
    </div>
  );
};

export default MobilesCard;
