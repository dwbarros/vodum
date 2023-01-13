import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Highlights from "./components/Highlights";
import { GlobalStyle } from "./styles/globals";

export function App() {
  return (
    <>
      <Header />
      <Highlights />
      <Footer />
      
      <GlobalStyle />
    </>
  );
}