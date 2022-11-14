import { Box, Container } from "@chakra-ui/layout";
import Head from "next/head";

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pedro Victor - Homepage</title>
      </Head>
      <Container maxW='container.md' pt={5}>
         { children }
      </Container>
    </Box>
  );
};
export default Main;