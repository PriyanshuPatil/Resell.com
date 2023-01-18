import React from "react";
import "./MobileCard.css";

const MobilesCard = ({ data }) => {
  console.log(data.images);
  //
  return (
    <div className="mobile_card_main_container">
      {/*  */}
      <div className="mobile_card_img_desc">
        <div className="img_of_product">
          <img src={data.images[0].url} alt="img" />
        </div>
        <div className="desc_of_product">
          <p className="mobile_card_title">{data.title}</p>
          <p>{data.created_at.slice(0, 10)}</p>
        </div>
      </div>
      {/*  */}
      <div className="mobile_card_price_view_details">
        <h2>{data.price.value.display}</h2>
        <button className="mobilecard_view_details_button">View Details</button>
      </div>
      {/*  */}
    </div>
  );
};

export default MobilesCard;
