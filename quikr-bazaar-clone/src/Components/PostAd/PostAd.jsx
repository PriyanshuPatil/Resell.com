import "./PostAd.css";
import React from 'react'
import { useEffect } from "react";
import { MdCategory } from "react-icons/md";
import { useState } from "react";
import { FaCarSide } from 'react-icons/fa';
import { TfiDesktop , TfiBag  } from 'react-icons/tfi';
import { ImMobile,ImArrowLeft} from 'react-icons/im';
import { TbSofa } from 'react-icons/tb';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { VscTools } from 'react-icons/vsc';
import selectadd from "../../Assets/Select_Add_Image.png"

const Category_List=[
    {id:1,title:"Cars & Bikes",icon:<FaCarSide size={40}/>},
    {id:2,title:"Mobiles & Tablets",icon:<ImMobile size={40}/>},
    {id:3,title:"Electronics & Applications",icon:<TfiDesktop size={40}/>},
    {id:4,title:"Home & Lifestyle",icon:<TbSofa size={40}/>},
    {id:5,title:"Real Estate",icon:<MdOutlineMapsHomeWork size={40}/>},
    {id:6,title:"Jobs",icon:<TfiBag size={40}/>},
    {id:7,title:"Services",icon:<VscTools size={40}/>},
]
const PostAd = () => {
    const [activeCategory,setCategory]=useState(0)
  return (
    <div className="PostAdd_container">
   <div className="PostAdd_category_container">
    <div id="PostAdd_category_list_container">Select a category</div>
    {Category_List.map((el)=>{
   return (
   <div className="PostAdd_category_list_container" style={el.id==activeCategory?{backgroundColor:"green",color:"white"}:{backgroundColor:"",color:"green"}} onClick={()=>(setCategory(el.id))} >
    <div>{el.icon}</div>
    <div>{el.title}</div>
   </div>)
    })}
   </div>
   <div className="PostAdd_form__container">
    <h2 className="PostAdd_form__container_Text">Post Free Add</h2>
    <img width={"80%"}  src={selectadd} />  
    </div>
  
    
    </div>
  )
}

export default PostAd;