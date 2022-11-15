import { Container, Heading } from "@chakra-ui/react";
import Layout from "../components/Article";
import Header from "../components/Header/Header";

export default function ScreenHome() {  
  return (
    <Layout>
      <Container>
        <Header />
      </Container>
    </Layout>
  );
}
