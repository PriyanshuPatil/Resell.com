import React from "react";
import { Link as NavLink } from "react-router-dom";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Text,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import {ChevronDownIcon } from '@chakra-ui/icons';
import { RxHamburgerMenu } from "react-icons/rx";
import {GiSofa} from 'react-icons/gi';
import {AiOutlineHome} from 'react-icons/ai';
import {GiWashingMachine} from 'react-icons/gi';
import {HiOutlineUserGroup} from 'react-icons/hi';
import { ImMobile } from 'react-icons/im';
import {RiBearSmileFill} from 'react-icons/ri';
import {CiMoneyCheck1} from 'react-icons/ci';
import {MdLocalOffer} from 'react-icons/md';
import {FiDownload} from 'react-icons/fi';
import {CiLocationOn} from 'react-icons/ci';
import {AiOutlineUser} from 'react-icons/ai';
import {HiOutlineCurrencyRupee} from 'react-icons/hi';
import {TbFileSpreadsheet} from 'react-icons/tb';
import {FaTools} from 'react-icons/fa';
import {GiHandBag} from 'react-icons/gi';
import {FaCarSide} from 'react-icons/fa';
import {RiMotorbikeFill} from 'react-icons/ri';

import Login from '../../Pages/LoginB/Login';
// import Logo from '../../Assets/logo.png';



const MenuCategories = () =>{
  return (
    <>
      <Menu>
        <MenuButton
          //  as={Button} 
           rightIcon={<ChevronDownIcon />}
           paddingTop="10px"
           paddingBottom="10px"
           borderRadius="0px"
           bg="white"
           display="flex"
           justifyContent="left"
           marginLeft="0px"
           paddingLeft='0px'
           _hover={{
             background: "gray.50",
             color: "teal"
           }}
        >
          more Categories
        </MenuButton>
        <MenuList>
          {/* <MenuItem>
            <NavLink to='/sports-hobbies-fashion' style={{textDecoration:"none",color:'gray'}}>Sports,Hobbies,Fashion</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/education'>Education style={{textDecoration:"none",color:'gray'}} </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/commercial'>Commercial style={{textDecoration:"none",color:'gray'}} </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/pets-pet-care' style={{textDecoration:"none",color:'gray'}}>Pets & Pet Care</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/home-lifestyle' style={{textDecoration:"none",color:'gray'}}> Home & Lifestyle</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/entertainment'>Entertainmen style={{textDecoration:"none",color:'gray'}}t </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/coins-stamps' style={{textDecoration:"none",color:'gray'}}> Coins-Stamps</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/events'>Event style={{textDecoration:"none",color:'gray'}}s </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/matrimonial'>Matrimonia style={{textDecoration:"none",color:'gray'}}l </NavLink>
          </MenuItem> */}
        </MenuList>
      </Menu>
    </>
  )
}




function SideDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        // colorScheme="none"
        size={"xs"}
        p={0}
        marginBottom='18px'
        onClick={onOpen}
      >
        <RxHamburgerMenu
          style={{
            height: "100%",
            width: "100%",
            color: "gray",
          }}
        />
      </Button>

      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src='http://localhost:3000/static/media/logo.8b500399a5e81609e1a4.png' alt='logo' w={'40%'} height='40px' />
          </DrawerHeader>

          <DrawerBody>
            <VStack align="left">

              <Button
                borderBottom="1px solid gray"
                paddingTop="10px"
                paddingBottom="10px"
                borderTop="1px solid gray"
                justifyContent="left"
                borderRadius="0px"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <Login />
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                bg="white"
                display="flex"
                justifyContent="left"
                marginLeft="0px"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/my-account' style={{textDecoration:"none",color:'gray'}}> 
                  <AiOutlineUser />My Account
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/orders-payments' style={{textDecoration:"none",color:'gray'}}> 
                  <HiOutlineCurrencyRupee/> Orders & Payments
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderBottom="1px solid gray"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/my-ads' style={{textDecoration:"none",color:'gray'}}> 
                 <TbFileSpreadsheet/>My Ads
                </NavLink>
              </Button>

              <Button
                disabled={true}
                bg="white"
                justifyContent="left"
                cursor='default'
                color='gray'
                _hover={{
                  background: "white"
                }}
              >
                Categories
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/services'  style={{textDecoration:"none",color:'gray'}}>
                 <FaTools />Services
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/jobs' style={{textDecoration:"none",color:'gray'}}>
                  <GiHandBag />Jobs
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/cars' style={{textDecoration:"none",color:'gray'}}>
                  <FaCarSide />Cars
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/bikes' style={{textDecoration:"none",color:'gray'}}>
                  <RiMotorbikeFill />Bikes
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/furniture-decor' style={{textDecoration:"none",color:'gray'}}> 
                <GiSofa /> Furniture & Decor
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/electronics-appliances' style={{textDecoration:"none",color:'gray'}}> 
                 <GiWashingMachine/> Electronics & Appliances
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/homes' style={{textDecoration:"none",color:'gray'}}>
                <AiOutlineHome />  Homes
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/co-working-spaces' style={{textDecoration:"none",color:'gray'}}>
                <HiOutlineUserGroup/> Co-Working Spaces
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/mobiles-tablets' style={{textDecoration:"none",color:'gray'}}> 
                <ImMobile /> Mobiles & Tablets
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/kids-toys' style={{textDecoration:"none",color:'gray'}}> 
                <RiBearSmileFill/> Kids & Toys
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <MenuCategories />
              </Button>

              <Button
                disabled={true}
                bg="white"
                justifyContent="left"
                cursor='default'
                borderRadius='none'
                borderBottom='1px solid gray'
                color='gray'
                _hover={{
                  background: "white"
                  
                }}
              >
                OTHERS
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/for-businesses' style={{textDecoration:"none",color:'gray'}}> 
                <CiMoneyCheck1/> For Businesses
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <NavLink to='/deals-offers' style={{textDecoration:"none",color:'gray'}}  >
                  <MdLocalOffer/>Deals & Offers
                </NavLink>
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                color='gray'
                bg="white"
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
               <CiLocationOn/> All India
              </Button>

              <Button
                paddingTop="10px"
                paddingBottom="10px"
                borderRadius="0px"
                justifyContent="left"
                bg="white"
                color='gray'
                _hover={{
                  background: "gray.50",
                  color: "teal"
                }}
              >
                <FiDownload/>Download Apps
              </Button>

            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;

