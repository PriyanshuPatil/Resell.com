import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Box,
  Heading,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/auth.actions";

function Login() {
  const [loginCreds, setLoginCreds] = useState({});
  // Disclosure function with maintaining open and closed state
  const { isOpen, onOpen, onClose } = useDisclosure();
  //Login in Redux
  const { isLoggedIn } = useSelector((store) => store.Auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  // login handler
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(loginCreds));
  }


  return (
    <>
      <Button variant="ghost" colorScheme="pink" onClick={onOpen}>
        Login
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pb="5">
          <ModalHeader fontSize="30px">Login</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl pb="10" onSubmit={handleLogin}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="enter your email"
                isRequired={true}
                onChange={handleChange}
              />
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type={"password"}
                placeholder="password"
                onChange={handleChange}
              />
              <Checkbox pt="2" size="md" colorScheme="green">
                Remember Me
              </Checkbox>
            </FormControl>

            <Heading
              width="80%"
              m="auto"
              borderTop="1px solid "
              textAlign="center"
              size="xm"
            >
              Login Via
            </Heading>

            <Flex p="1" justifyContent="center">
              <Box p="4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  alt="google"
                  width="35px"
                />
              </Box>
              <Box p="4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                  alt="apple"
                  width="35px"
                />
              </Box>
              <Box p="4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
                  alt="microsoft"
                  width="35px"
                />
              </Box>
              <Box p="4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png"
                  alt="twitter"
                  width="35px"
                />
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button w="100%" variant="solid" colorScheme="whatsapp">
              Login
            </Button>
          </ModalFooter>
          <Text pb="1" textAlign="center">
            Forgot Password? Click Here
          </Text>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;
