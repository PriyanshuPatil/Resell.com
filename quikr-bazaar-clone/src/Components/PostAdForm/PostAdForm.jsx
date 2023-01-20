import "./PostAdForm.css";
import React, { useRef, useState } from 'react'
import { BsGift,BsCheckCircle ,BsCamera} from 'react-icons/bs';
import {GrAddCircle} from 'react-icons/gr';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react' ;


const PostAdForm = ({Category}) => {
  const toast = useToast()
    const form = useRef();
    const [plan,setPlanID]=useState(0)
  
    const SubmitAd=() =>
  toast({
    title: 'Congratulations',
    description: "Your Ad has been live now on Resell site.",
    status: 'success',
    duration: 9000,
    position:"top",
    isClosable: true,
  })
  return (
    <div className="PostAddForm_container">
    <div className="PostAddForm_heading">
        <h2 as="h2">Post {Category} Free Ad</h2>
        <div as="div"><BsGift/> Post ans earn ₹50 QCash in your account</div>
    </div>
    <div className="mobile_form_div">
    <form ref={form} className="mobile_add_form" >
        <div className="input_group">
       <input type="tel" id="number" required />
       <label for="number">Brand Name</label>
       </div>
        <div className="input_group">
          <input type="tel" id="number" required />
        <label for="number">Modal</label>
      </div>
      <div className="input_group">
       <input type="tel" id="number" required />
       <label for="number">Year of Purchase</label>
       </div>
        <div className="input_group">
          <input type="tel" id="number" required />
        <label for="number">Physical Condition</label>
      </div>
      <div className="input_group">
       <input type="tel" id="number" required />
       <label for="number">Ad title</label>
       </div>
        <div className="input_group">
          <input type="tel" id="number" required />
        <label for="number">Price</label>
      </div>
      <div className="input_group">
          <input type="tel" id="number" required />
        <label for="number">Mobile Number</label>
      </div>
      <div className="input_group">
          <input type="tel" id="number" required />
        <label for="number">Email Id</label>
      </div>
      <div className="input_group">
          <input type="tel" id="number" required />
        <label for="number">Pincode</label>
      </div>
      <div className="input_group">
          <input type="tel" id="number" required />
        <label for="number">You are</label>
      </div>
    </form>
    <div className="mobile_form_postad_container">


    <div className="mobile_add_photo">
      <div>
        <BsCamera size={25}/>  
      </div>
      <div>
      <GrAddCircle size={25}/> 
      </div>
    </div>
    <div className="mobile_add_suscription">
      <div className="mobile_add_suscription_title">
        Types of Ads 
      </div>
    <Accordion className="mobile_add_suscription_container">
    <AccordionItem as="div" onClick={()=>{setPlanID(0)}}>
      <AccordionButton as="div">
        <BsCheckCircle style={plan==1?{color:"green"}:{color:"black"}} />
        <Box as="span" flex='1' textAlign='left'>
          Premium Ad
        </Box>
      </AccordionButton>
    <AccordionPanel pb={4}>
    -50 Ad views
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem as="div" onClick={()=>{setPlanID(1)}}>
      <AccordionButton as="div">
        <BsCheckCircle style={plan==1?{color:"green"}:{color:"black"}} />
        <Box as="span" flex='1' textAlign='left'>
          Gold Ad
        </Box>
      </AccordionButton>
    <AccordionPanel pb={4}>
     -3x Responses
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem as="div" onClick={()=>{setPlanID(2)}}>
      <AccordionButton as="div">
      <BsCheckCircle style={plan==2?{color:"green"}:{color:"black"}} />
        <Box as="span" flex='1' textAlign='left'>Free Ad</Box>
      </AccordionButton>
    <AccordionPanel pb={4} >
     -10x Responses
    </AccordionPanel>
  </AccordionItem>
</Accordion>
 </div> 
       <button onClick={()=>SubmitAd()} as="button" className="submit_form"> Post Ad</button>
    </div>
 </div>
 </div>
  )
}

export default PostAdForm
