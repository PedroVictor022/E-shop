import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex, VStack, Heading } from "@chakra-ui/layout";
import {
  Button,
  color,
  Icon,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";

import { getAuth, singInWithEmailAndPassword } from "firebase/auth";
const LoginScreen = () => {
  const auth = getAuth;
  const [userAuth, setUserAuth] = useState({
    email: "",
    password: "",
  });

  const register = (e) => {
    e.preventDefault();
    singInWithEmailAndPassword(auth, userAuth.email, userAuth.password)
      .then((data) => {
        console.log(data, "successfully singed in!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box bg="blackAlpha.900">
      <VStack
        color="whatsapp.200"
        as="form"
        mx="auto"
        w={{ base: "90%", md: 300 }}
        h="100vh"
        justifyContent="center"
        p="2"
      >
        <Heading>Sing In</Heading>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Enter username..." colorScheme="whatsapp" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input placeholder="Enter password..." colorScheme="whatsapp" />
        </FormControl>
        <Button
          type="submit"
          variant="outline"
          colorScheme="whatsapp.200"
          onClick={register}
        >
          Login
        </Button>
      </VStack>
    </Box>
  );
};
