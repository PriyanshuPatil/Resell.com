import { useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import "./finalpage.css";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Finalpage = () => {
    let toast = useToast();
    const navigate=useNavigate()
    const {  error, token,isAuth } = useSelector(
      (state) => state.Auth
    );
  
  const handleSubmit = () => {
      toast({position: 'top', description: 'Message Delivered Sucessfully' });
      navigate("/")
    }
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  console.log(location);

  const [blur, setBlur] = useState(true);
  const handleBlur = () => {
    setBlur(!blur);
  };
  function loadingTimer() {
    setLoading(false);
  }
  useEffect(() => {
    setTimeout(loadingTimer, 200);
  }, []);
if(!isAuth){
  toast({
    title: "Plz Login First",
    description: "plz try to login first",
    status: "error",
    duration: 4000,
    isClosable: true,
  });
  navigate("/login")
}
  if (!loading) {
    return (
      <div className="prod-deets-main-container">
        <div className="prod-deets-left-flex">
          <h3>Your Selected Item</h3>
          <h2>{location.state.desc.title}</h2>
          <img
            src={location.state.desc.images[0].url}
            alt="prod-img"
            width="300px"
          />
          <h3 style={{ color: "green" }}>
            {location.state.desc.price.value.display}
          </h3>
          <button
            onClick={() => handleBlur()}
            style={{
              fontSize: "20px",
              padding: "1rem",
              backgroundColor: "#facd05",
              borderRadius: "10px",
            }}
          >
            Reveal Seller
          </button>
        </div>

        <div className="virtical-line-btw"></div>

        <div
          className="prod-deets-right-flex"
          style={blur ? { filter: "blur(5px)" } : null}
        >
          <div>
            <h3>User's ID: {location.state.desc.id}</h3>
            <p>Email: {location.state.desc.id}@hotmail.com</p>
            <p>Phone: +91-9933XXXXXX</p>
          </div>

          <div id="direct-message-container">
            <p>Want to send message directly?</p>
            <textarea
              name="w3review"
              rows="8"
              cols="50"
              placeholder="send message directly to the seller from here and make him/her notify"
            ></textarea>
          </div>
          <button onClick={handleSubmit}
            style={{
              fontSize: "15px",
              padding: "1rem",
              backgroundColor: "#00a62c",
              color: "#fff",
              borderRadius: "10px",
            }}
          >
            Send Message
          </button>
        </div>


      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Finalpage;
