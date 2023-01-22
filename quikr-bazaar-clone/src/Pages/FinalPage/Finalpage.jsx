import { useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import "./finalpage.css";

const Finalpage = () => {
    const [blur, setBlur] = useState(true);
    let toast = useToast();

    const handleBlur = () => {
      setBlur(!blur)
    }

    const handleSubmit = () => {
      toast({position: 'top', description: 'Message Delivered Sucessfully' })
    }


  return (
    <div className="prod-deets-main-container">
      <div className="prod-deets-left-flex">
        <h2>Your Selected Item</h2>
        <h1>Product Title Here</h1>
        <img
          src="https://i.scdn.co/image/ab67616d0000b2736b915e407b70e121e06fe979"
          alt="prod-img"
          width="300px"
        />
        <h3 style={{color:"green"}}>Price: ₹1,00,000</h3>
        <button onClick={handleBlur} style={{fontSize:"20px", padding:"1rem", backgroundColor:"#facd05", borderRadius:"10px"}}>Reveal Seller</button>
      </div>

      <div className="virtical-line-btw"></div>

      <div className="prod-deets-right-flex" style={blur ? {filter: "blur(5px)"}: null}>
        <div>
          <h3>Seller's Name: Harikesh Bhai</h3>
          <p>Email: emailhere@hotmail.com</p>
          <p>Phone: +91-675-6454-526</p>
        </div>

        <div id="direct-message-container">
            <p>Want to send message directly?</p>
            <textarea name="w3review" rows="8" cols="50" placeholder="send message directly to the seller from here and make him/her notify">
            </textarea>
        </div>
        <button onClick={handleSubmit} style={{fontSize:"15px", padding:"1rem", backgroundColor:"#00a62c", color:"#fff", borderRadius:"10px"}}>Send Message</button>
      </div>
    </div>
  );
};
 
export default Finalpage;
