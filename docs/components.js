import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";

export const Root = props => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        margin: "4rem auto",
        maxWidth: "800px",
        padding: "2rem"
      }}
    >
      {props.children}
    </div>
  </ThemeProvider>
);
