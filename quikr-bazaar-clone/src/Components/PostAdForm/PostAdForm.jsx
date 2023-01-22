import style from "./PostAdForm.module.css";
import React, { useRef, useState } from "react";
import { BsGift, BsCheckCircle, BsCamera } from "react-icons/bs";
import { GrAddCircle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { postAdvertisements } from "../../redux/advertisements/advertisements.actions";

const PostAdForm = ({ Category }) => {
  const dispatch=useDispatch()
  const toast = useToast();
  const form = useRef();
  const [plan, setPlanID] = useState(0);
  const [file, setFile] = useState();
  const [formData, setFormData] = useState({
    brand_name: "",
    modal_name: "",
    year_purchase: "",
    physical_condition: "",
    ad_tital: "",
    price: "",
    mobile_number: "",
    email_id: "",
    pincode: "",
    you_are: "",
    url:""
  });
  const handlechange = () => {
    setFormData({
      brand_name: form.current.brand_name.value,
      modal_name: form.current.modal_name.value,
      year_purchase: form.current.year_purchase.value,
      physical_condition: form.current.physical_condition.value,
      ad_tital: form.current.ad_tital.value,
      price: form.current.price.value,
      mobile_number: form.current.mobile_number.value,
      email_id: form.current.email_id.value,
      pincode: form.current.pincode.value,
      you_are: form.current.you_are.value,
      url:file
    });
    console.log(formData);
  };
  function handleUpload(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
    
    toast({
      title: "Image SuccesFully Added",
      description: "Now You can see image on Ui.",
      status: "success",
      duration: 9000,
      position: "top",
      isClosable: true,
    });
    console.log(e.target.files);
   
  } 

 
  const SubmitAd = () =>{
    dispatch(postAdvertisements(formData))  ;
    toast({
      title: "Congratulations",
      description: "Your Ad has been live now on Resell site.",
      status: "success",
      duration: 9000,
      position: "top",
      isClosable: true,
    })};
  return (
    <div className={style.PostAddForm_container}>
      <div className={style.PostAddForm_heading}>
        <h2 as="h2">Post {Category} Free Ad</h2>
        <div as="div">
          <BsGift /> Post ans earn ₹50 QCash in your account
        </div>
      </div>
      <div className={style.mobile_form_div}>
        <form ref={form} className={style.mobile_add_form}>
          <div className={style.input_group}>
            <input onChange={handlechange} name="brand_name" type="tel" id="number" />
            <label for="number">Brand Name</label>
          </div>
          <div className={style.input_group}>
            <input onChange={handlechange} name="modal_name" type="tel" id="number" />
            <label for="number">Modal</label>
          </div>
          <div className={style.input_group}>
            <input onChange={handlechange} name="year_purchase" type="number" id="number" />
            <label for="number">Year of Purchase</label>
          </div>
          <div className={style.input_group}>
            <input onChange={handlechange} name="physical_condition" type="tel" id="number" />
            <label for="number">Physical Condition</label>
          </div>
          <div className={style.input_group}>
            <input onChange={handlechange} name="ad_tital" type="tel" id="number" required />
            <label for="number">Ad title</label>
          </div>
          <div className={style.input_group}>
            <input onChange={handlechange} name="price" type="tel" id="number" required />
            <label for="number">Price</label>
          </div>
          <div className={style.input_group}>
            <input onChange={handlechange} name="mobile_number" type="number" id="number" required />
            <label for="number">Mobile Number</label>
          </div>
          <div className={style.input_group}>
            <input onChange={handlechange} name="email_id" type="tel" id="number" required />
            <label for="number">Email Id</label>
          </div>
          <div className={style.input_group}>
            <input onChange={handlechange} name="pincode" type="tel" id="number" />
            <label for="number">Pincode</label>
          </div>
          <div className={style.input_group}>
            <input onChange={handlechange} name="you_are" type="tel" id="number" />
            <label for="number">You are</label>
          </div>
        </form>
        <div className={style.mobile_form_postad_container}>
          <div className={style.mobile_add_photo}>
            {file == undefined && (
             
                <input 
                multiple
                  type="file"
                  name="fileis"
                  id="fileis" 
                  onChange={handlechange}
                  onClick={handleUpload}
                />
            )}
            {file != undefined && (
              <div>
                <img
                  style={{ width: "150px", height: "150px" }}
                  src={file}
                ></img>
              </div>
            )}
          </div>
          <div className={style.mobile_add_suscription}>
            <div className={style.mobile_add_suscription_title}>
              Types of Ads
            </div>
            <Accordion className={style.mobile_add_suscription_container}>
              <AccordionItem
                as="div"
                onClick={() => {
                  setPlanID(0);
                }}
              >
                <AccordionButton as="div">
                  <BsCheckCircle
                    style={plan == 0 ? { color: "green" } : { color: "black" }}
                  />
                  <Box as="span" flex="1" textAlign="left">
                    Premium Ad
                  </Box>
               
                  
                </AccordionButton>
                <AccordionPanel pb={4}>-50 Ad views</AccordionPanel>
              </AccordionItem>
              <AccordionItem
                as="div"
                onClick={() => {
                  setPlanID(1);
                }}
              >
                <AccordionButton as="div">
                  <BsCheckCircle
                    style={plan == 1 ? { color: "green" } : { color: "black" }}
                  />
                  <Box as="span" flex="1" textAlign="left">
                    Gold Ad
                  </Box>
                </AccordionButton>
                <AccordionPanel pb={4}>-3x Responses</AccordionPanel>
              </AccordionItem>
              <AccordionItem
                as="div"
                onClick={() => {
                  setPlanID(2);
                }}
              >
                <AccordionButton as="div">
                  <BsCheckCircle
                    style={plan == 2 ? { color: "green" } : { color: "black" }}
                  />
                  <Box as="span" flex="1" textAlign="left">
                    Free Ad
                  </Box>
                </AccordionButton>
                <AccordionPanel pb={4}>-10x Responses</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <button
            onClick={() => {
              SubmitAd();
              handlechange();
            }}
            as="button"
            className={style.submit_form}
          >
            {" "}
            Post Ad
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostAdForm;
