// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider , ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.js"

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
  // </StrictMode>
);
