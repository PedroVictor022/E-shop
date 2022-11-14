import { extendTheme } from "@chakra-ui/react";

const theme = {
   config: {
      initialColorMode: 'dark',
      useSystemColorMode: true,
   },
   styles: {
      global: {
         code: {
            fontFamily: "font-family: 'M PLUS Rounded 1c', sans-serif;"
         }
      }
   },
   body: {
      fontFamily: "font-family: 'M PLUS Rounded 1c', sans-serif;",
      WebkitFontSmoothing: 'antialised',
      MozOsxFontSmoothing: 'grayscale'
   }
}

export default extendTheme(theme);