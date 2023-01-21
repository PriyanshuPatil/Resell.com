import React from "react";
import Logo from '../../Assets/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
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
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,

} from "@chakra-ui/react";

import {ChevronDownIcon } from '@chakra-ui/icons';

import {AiOutlineUser} from 'react-icons/ai';
import {HiOutlineCurrencyRupee} from 'react-icons/hi';
import {TbFileSpreadsheet} from 'react-icons/tb';
import {FaTools} from 'react-icons/fa';
import {GiHandBag} from 'react-icons/gi';
import {FaCarSide} from 'react-icons/fa';
import {RiMotorbikeFill} from 'react-icons/ri';


const MenuCategories = () =>{
  return (
    <>
      <Menu>
        <MenuButton
           as={Button} 
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
          <MenuItem>
            <NavLink to='/sports-hobbies-fashion'>Sports,Hobbies,Fashion</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/education'>Education</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/commercial'>Commercial</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/pets-pet-care'>Pets & Pet Care</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/home-lifestyle'>Home & Lifestyle</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/entertainment'>Entertainment</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/coins-stamps'>Coins-Stamps</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/events'>Events</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to='/matrimonial'>Matrimonial</NavLink>
          </MenuItem>
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
        colorScheme="none"
        size={"xs"}
        p={0}
        onClick={onOpen}
      >
        <RxHamburgerMenu
          style={{
            height: "90%",
            width: "90%",
            margin: "auto",
            color: "gray",
            verticalAlign: "middle"
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
            <Image src='http://localhost:3000/static/media/logo.8b500399a5e81609e1a4.png' alt='logo' heght='40px' />
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
                Login/Register
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
                <NavLink to='/my-account'>
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
                <NavLink to='/orders-payments'>
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
                <NavLink to='/my-ads'>
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
                <NavLink to='/services'>
                 <FaTools/>Services
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
                <NavLink to='/jobs'>
                  <GiHandBag/>Jobs
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
                <NavLink to='/cars'>
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
                <NavLink to='/bikes'>
                  <RiMotorbikeFill/>Bikes
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
                <NavLink to='/furniture-decor'>Furniture & Decor</NavLink>
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
                <NavLink to='/electronics-appliances'>Electronics & Appliances</NavLink>
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
                <NavLink to='/homes'>Homes</NavLink>
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
                <NavLink to='/co-working-spaces'>Co-Working Spaces</NavLink>
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
                <NavLink to='/mobiles-tablets'>Mobiles & Tablets</NavLink>
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
                <NavLink to='/kids-toys'>Kids & Toys</NavLink>
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
                  // color: "teal.500",
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
                <NavLink to='/for-businesses'>For Businesses</NavLink>
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
                <NavLink to='/deals-offers'>Deals & Offers</NavLink>
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
                All India
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
                Download Apps
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;
