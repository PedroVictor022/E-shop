import { ChakraProvider } from "@chakra-ui/provider"
import Layout from '../components/Layout';
import theme from '../libs/theme';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
     <Layout>
       <Component {...pageProps} />
     </Layout>
    </ChakraProvider>
  )
}

export default MyApp
