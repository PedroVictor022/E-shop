import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex, VStack, Heading } from "@chakra-ui/layout";
import { Button, color, IconButton, useColorMode } from "@chakra-ui/react";

export default function ScreenHome() {
  return (
    <Box bg="blackAlpha.900">
      <VStack
        color="whatsapp.200"
        as="form"
        mx="auto"
        w={{ base: "90%", md: 300 }}
        h="100vh"
        justifyContent="center"
      >
        <Box w='100%'>
          <Heading>Sing In</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter username..." colorScheme="whatsapp" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Enter password..." colorScheme="whatsapp" />
          </FormControl>
          <Button type="submit" variant="outline" colorScheme="whatsapp.200">
            Login
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}
