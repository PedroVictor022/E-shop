import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Flex flexDir="column" align='center' justify='center'>
      <Box>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input type="email"/>
        </FormControl>
      </Box>
    </Flex>
  )
}
