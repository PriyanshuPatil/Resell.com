import {Box,Flex,Heading,Text,Spacer,Link,Image} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import AdCard from '../AdCard/AdCard'

export function Carddata({props,bg}){
const navigate=useNavigate()
return (
    <Box bg={bg} pt='20px' pb='30px' onClick={()=>{navigate("/all_products")}}>
    <Box  p='20px'   bg='#f2fffe' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;' >
    <Flex >
        <Text textAlign={"center"} fontSize='22px' color='black' >{props.Heading}</Text>
        <Spacer/>
        <Link color="blue" fontSize='13px' m='auto' >{props.linkdata1}</Link>
    </Flex>
    <Flex gap='25px' mt='30px'  >
        <Box w='13%'  >
            <Image src={props.imgurl1} h='150px' w='100%'/>
            <Text textAlign={"center"} fontSize='18px' color='black'>{props.imgtext1}</Text>
            <Text fontSize='11px'>{props.author1}</Text>
        </Box>
        <Box w='13%'>
            <Image src={props.imgurl2} h='150px' w='100%'/>
            <Text textAlign={"center"} fontSize='18px' color='black'>{props.imgtext2}</Text>
            <Text fontSize='11px'>{props.author2}</Text>
        </Box>
        <Box w='13%'>
            <Image src={props.imgurl3} h='150px'w='100%'/>
            <Text textAlign={"center"} fontSize='18px' color='black'>{props.imgtext3}</Text>
            <Text fontSize='11px'>{props.author3}</Text>
        </Box>
        <Box w='13%'>
            <Image src={props.imgurl4}  h='150px' w='100%'/>
            <Text textAlign={"center"} fontSize='18px' color='black'>{props.imgtext4}</Text>
            <Text fontSize='11px'>{props.author4}</Text>
        </Box>
        <Box w='13%'>
            <Image src={props.imgurl5} h='150px' w='100%'/>
            <Text textAlign={"center"} fontSize='18px' color='black'>{props.imgtext5}</Text>
            <Text fontSize='11px'>{props.author5}</Text>
        </Box>
        <Box w='13%'>
            <Image src={props.imgurl6} h='150px' w='100%'/>
            <Text textAlign={"center"} fontSize='18px' color='black'>{props.imgtext6}</Text>
            <Text fontSize='11px'>{props.author2}</Text>
        </Box>
        <Box w='13%'>
            <Image src={props.imgurl7} h='150px'w='100%'/>
            <Text textAlign={"center"} fontSize='18px' color='black'>{props.imgtext3}</Text>
            <Text fontSize='11px'>{props.author7}</Text>
        </Box>
    </Flex>
    </Box>
    </Box>
)
}
export function HomeData(){

    const carddata1={
      Heading:"Most Popular Products"  ,
      linkdata1:"View All Results",
      linkdata2:"News & Articles",
      linkdata3:"Follow Our Facebook",
      imgurl1:"https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
      imgtext1:"All Furnitures",
      author1:"",
      imgurl2:"https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png",
      imgtext2:"All Electronics",
      author2:"",
      imgurl3:"https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/sofa_sets_desktop.png",
      imgtext3:"Sofa sets",
      author:"",
      imgurl4:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/bed.png",
      imgtext4:"Bed Sets",
      author4:"",
      imgurl5:"https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Wardrobes_desktop.png",
      imgtext5:"TVs",
      author5:"",
      imgurl6:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/led-tv.png",
      imgtext6:"All Electronics",
      author2:"",
      imgurl7:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/laptops.png",
      imgtext7:"Laptops",
      author:"",
      imgurl8:"https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/refrigerator.png",
      imgtext8:"Refrigerators",
      author4:"",
      imgurl9:"https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Recliners_desktop.png",
      imgtext0:"Recliners",
      author5:""
    }
    const carddata2={
        Heading:"Electronics & Appliances"  ,
        linkdata1:"View All Results",
        linkdata2:"News & Articles",
        linkdata3:"Follow Our Facebook",
        imgurl1:"https://teja9.kuikr.com/i4/20220707/Feather-lite-all-leather-3-2-sofa-VB201705171774173-ak_LWBP1658209956-1657193742.jpeg",
        imgtext1:"Feather lite all...",
        author1:"",
        imgurl2:"https://teja9.kuikr.com/i6/20220704/Original-sale-Sony-Alpha-a7R-IV-Mirrorless-Digital-Camera-With-SEL85F14GM-Lens-VB201705171774173-ak_LWBP306714731-1656914222.jpeg",
        imgtext2:"Original sale Sony",
        author2:"",
        imgurl3:"https://teja10.kuikr.com/i4/20220702/Canon-EOS-200D-with-1-year-warranty-7-days-replacement-guarantee-VB201705171774173-ak_WBP912168807-1656737246.png",
        imgtext3:"Canon",
        author:"",
        imgurl4:"https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Recliners_desktop.png",
        imgtext4:"Premium lucky all...",
        author5:"",
        imgurl5:"https://teja8.kuikr.com/i4/20221227/Airtel-prepaid-fancy-numbers-VB201705171774173-ak_WBP550117632-1672109282.png",
        imgtext5:"Airtel prepaid fancy",
        author5:"",
        imgurl6:"https://teja10.kuikr.com/i6/20220727/Cudlycoo-Swing-with-Stand-in-excellent-condition-for-sale-VB201705171774173-ak_LWBP446060804-1658941367.png",
        imgtext6:"Cudicoo Swing",
        author2:"",
        imgurl7:"https://teja8.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        imgtext7:"Blah",
        author:"",
        imgurl8:"https://teja8.kuikr.com/i5/20220923/premium-lucky-all-tipe-golden-fancy-vip-number-in-prepaid-VB201705171774173-ak_LWBP590116402-1663939308.jpeg",
        imgtext8:"Apple Ipad",
        author4:"",
        imgurl9:"https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Recliners_desktop.png",
        imgtext0:"Premium lucky all...",
        author5:""
      }
      const carddata3={
        Heading:"Mobile & Tablets"  ,
        linkdata1:"View All Results",
        linkdata2:"News & Articles",
        linkdata3:"Follow Our Facebook",
        imgurl1:"https://teja10.kuikr.com/i5/20230121/iPhone-SE-White-64-Gb-Updated-to-iOS-15-VB201705171774173-ak_WBP1791268228-1674314325.png",
        imgtext1:"iPhone-SE",
        author1:"",
        imgurl2:"https://teja9.kuikr.com/i6/20230121/IPhone-14pro-max-5gDubai-aaa-high-productcod-available-VB201705171774173-ak_WBP1441459943-1674312901.png",
        imgtext2:"IPhone-14pro",
        author2:"",
        imgurl3:"https://teja9.kuikr.com/i4/20230119/IPhone-14pro-max-5gDubai-aaa-high-productcod-available------Apple-Others-VB201705171774173-ak_WBP367502103-1674073128.png",
        imgtext3:"Iphone",
        author4:"",
        imgurl4:"https://teja9.kuikr.com/i5/20230122/One-plus-8t-original-contact-and-call-me-whatsApp-8393970456-VB201705171774173-ak_LWBP1050059578-1674396540.png",
        imgtext4:"One Plus 8T",
        imgurl5:"https://teja9.kuikr.com/i5/20230121/VAPORESSO-SWAG-PX80-brand-new-two-weeks-used-VB201705171774173-ak_LWBP1769809309-1674312211.jpeg",
        imgtext5:"VAPORESSO-SWAG",
        author5:"",
        imgurl6:"https://teja10.kuikr.com/i6/20230122/Oppo-Reno-8-pro-original-contact-and-call-me-whatsApp-8393970456-VB201705171774173-ak_LWBP1173334316-1674396425.png",
        imgtext6:"Opppo Reno 8",
        author2:"",
        imgurl7:"https://teja9.kuikr.com/i4/20230119/IPhone-14pro-max-5gDubai-aaa-high-productcod-available------Apple-Others-VB201705171774173-ak_WBP2084091969-1674075626.png",
        imgtext7:"Iphone",
        author:"",
        imgurl8:"https://teja9.kuikr.com/i4/20230119/IPhone-14pro-max-5gDubai-aaa-high-productcod-available------Apple-Others-VB201705171774173-ak_WBP367502103-1674073128.png",
        imgtext8:"Iphone",
        author4:"",
        imgurl9:"https://teja10.kuikr.com/i5/20230119/IPhone-14pro-max-5gDubai-aaa-high-productcod-available5999rs-----Apple-Others-VB201705171774173-ak_WBP1262699008-1674072555.pngg",
        imgtext0:"14 pro",
        
      }
      const carddata4={
        Heading:"Home & Lifestyle"  ,
        linkdata1:"View All Results",
        linkdata2:"News & Articles",
        linkdata3:"Follow Our Facebook",
        imgurl1:"https://teja10.kuikr.com/i6/20230120/Rare--antiques-5-rupees-10-rupees-coin-VB201705171774173-ak_LWBP336714152-1674210356.png",
        imgtext1:"Rare",
        author1:"",
        imgurl2:"https://teja9.kuikr.com/i5/20230121/Fastrack-analog-watch-for-men-and-boys-VB201705171774173-ak_WBP471138058-1674304031.png",
        imgtext2:"analog",
        author2:"",
        imgurl3:"https://teja10.kuikr.com/i6/20230121/baby-cot-with-mosquito-net-in-very-good-working-condition-VB201705171774173-ak_LWBP834146552-1674303739.jpeg",
        imgtext3:"cot",
        author:"",
        imgurl4:"https://teja10.kuikr.com/i6/20230121/gown-sale--Rs1500-VB201705171774173-ak_LWBP270693596-1674294319.jpeg",
        imgtext4:"dress",
        author4:"",
        imgurl5:"https://teja8.kuikr.com/i5/20230121/Fastrack-analog-watch-for-men-and-boys-VB201705171774173-ak_WBP471138058-1674304031.png",
        imgtext5:"watch",
        author5:"",
        imgurl6:"https://teja8.kuikr.com/i6/20230121/Window-Cradle--Metal-Frame-Cradle-VB201705171774173-ak_LWBP2008584620-1674301876.jpeg",
        imgtext6:"Window Cradel",
        author2:"",
        imgurl7:"https://teja10.kuikr.com/i5/20230121/Table-Tennis-table-VB201705171774173-ak_WBP848230870-1674304767.png",
        imgtext7:"Recliners",
        author:"",
        imgurl8:"https://teja10.kuikr.com/i5/20230121/Table-Tennis-table-VB201705171774173-ak_WBP848230870-1674304767.png",
        imgtext8:"Refrigerators",
        author4:"",
        imgurl9:"https://teja10.kuikr.com/i5/20230121/Table-Tennis-table-VB201705171774173-ak_WBP848230870-1674304767.png",
        imgtext0:"Recliners",
        author5:""
      }
          

      return (
        <Box w="80%" m="auto">
     <AdCard/>
        <Carddata props={carddata1} />
        <Carddata props={carddata2} />
        <Carddata props={carddata3} />
        <Carddata props={carddata4} />
        </Box>
      )




}
