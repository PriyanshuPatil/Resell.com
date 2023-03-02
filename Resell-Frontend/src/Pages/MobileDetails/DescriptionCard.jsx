import React from "react";
import dscrp from "./Description.module.css";
import { BsDot } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const DescriptionCard = ({ desc, keyword }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user_details", { state: { desc, keyword } });
  };
  return (
    <div>
      <div className={dscrp.desc_heading_a}>
        <h4>USED</h4>
        <BsDot style={{ fontSize: "2em", color: "#5b7194" }} />
        <h4>{desc.parameters[0].value_name}</h4>
      </div>
      {/*  */}
      <div className={dscrp.desc_heading_b}>
        <h1>{desc.title}</h1>
      </div>
      {/*  */}
      <div className={dscrp.desc_location}>
        <p>{desc.locations_resolved.ADMIN_LEVEL_1_name}</p>
        <RxDividerVertical style={{ fontSize: "1rem" }} />
        <p>{`Posted on ${desc.created_at_first.slice(0, 10)}`}</p>
      </div>
      {/*  */}
      <div className={dscrp.desc_price}>
        <h1>{desc.price.value.display}</h1>
      </div>
      {/*  */}
      <div className={dscrp.desc_buttons}>
        <button onClick={() => handleClick()}>View User Details</button>
        <button>CHAT</button>
      </div>
      {/*  */}
      <div className={dscrp.desc_desc}>
        <div>
          <div>
            <img
              src="https://teja9.kuikr.com/core/clsfd/assets/ic-get-all-details-2x.png"
              alt="img"
            />
          </div>
          <p>Get all details</p>
        </div>
        <div>
          <div>
            <img
              src="https://teja9.kuikr.com/core/clsfd/assets/ic-schedule-visit-bazaar-2x.png"
              alt="img"
            />
          </div>
          <p>Shedule a visit</p>
        </div>
        <div>
          <div>
            <img
              src="https://teja9.kuikr.com/core/clsfd/assets/ic-negotiate-2x.png"
              alt="img"
            />
          </div>
          <p>Negotiate price</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
