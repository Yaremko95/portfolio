import React from "react";

import RouterHOC from "./routes/RouterHOC";
import { ThemeProvider } from "react-jss";
import theme from "./theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterHOC />
      </ThemeProvider>
    </>
  );
}

export default App;
