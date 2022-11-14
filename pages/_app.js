import { ChakraProvider } from "@chakra-ui/provider";
import { ColorModeProvider, CSSReset } from "@chakra-ui/react";
import themes from "../themes/themes";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themes}>
      <ColorModeProvider>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
