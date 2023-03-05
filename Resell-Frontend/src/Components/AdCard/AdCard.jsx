import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAdvertisements } from '../../redux/advertisements/advertisements.actions';
import {Box,Flex,Heading,Text,Spacer,Link,Image, Grid} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { store } from '../../redux/store';
import Loading from '../Loading/Loading';
const AdCard = () => {
   const dispatch=useDispatch();
   const navigate=useNavigate()
   const post_ad_data=useSelector((store)=>store.Advertisements)
   useEffect(()=>{
    dispatch(getAdvertisements());
   },[])
   console.log(post_ad_data)
   if(store.loading){
    return <Loading/>
   }
  return (
    <Box  pt='20px' pb='30px' onClick={()=>{ navigate("/all_products", { state: { searchCategory:"", keyword:"mobile" } });}}>
    <Box  p='20px'   bg='#f2fffe' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;' >
    <Flex >
        <Text textAlign={"center"} fontSize='22px' color='black' >Tranding Ad</Text>
        <Spacer/>
        <Link color="blue" fontSize='13px' m='auto' ></Link>
    </Flex>
    <Grid templateColumns={[
          "repeat(1, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(7, 1fr)",
        ]} gap='25px' mt='30px'  >
        {post_ad_data.data.map((el)=>{
            if(post_ad_data.data.length>=7){
                if(el.id<=6){
                return (
            <Box key={el.id}  >
            <Image src={el.url} h='150px' w='100%'/>
            <Text textAlign={"center"} fontSize='18px' color='black'>{el.modal_name}</Text>
         </Box>     
            )    
                }
                if(post_ad_data.data.length-1==el.id){
            return (
                <Box key={el.id}  >
                <Image src={el.url} h='150px' w='100%'/>
                <Text textAlign={"center"} fontSize='18px' color='black'>{el.modal_name}</Text>
             </Box>     
                )   
         }
            }
                 
        })}
       
    </Grid>
    </Box>
    </Box>
  )
}

export default AdCard