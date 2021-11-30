import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import Fonts from "./components/Fonts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Layout from "./layouts/Layout";
import ReaderQRCode from "./pages/ReaderQRCode";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Container maxW="container.sm" pt={14}>
        <Layout>
          <ReaderQRCode />
        </Layout>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
