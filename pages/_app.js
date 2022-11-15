import { ChakraProvider } from "@chakra-ui/provider";
import Main from "../components/Layout";
import themes from "../themes/themes";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themes}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
