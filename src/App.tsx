import { NavLinks } from "./components/NavLinks";
import Highlights from "./components/Highlights";
import { GlobalStyle } from "./styles/globals";

export function App() {
  return (
    <>
      <NavLinks />
      <Highlights />
      
      <GlobalStyle />
    </>
  );
}