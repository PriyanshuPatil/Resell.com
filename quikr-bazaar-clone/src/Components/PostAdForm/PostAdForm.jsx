import "./PostAdForm.css";
import React, { useRef } from 'react'
import { BsGift } from 'react-icons/bs';
const PostAdForm = () => {
    const form = useRef();
  return (
    <div className="PostAddForm_container">
    <div>
        <h2>Post Free Ad</h2>
        <div><BsGift/> Post ans earn ₹50 QCash in your account</div>
    </div>
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
 </div>
  )
}

export default PostAdForm
