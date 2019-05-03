import React, { Component } from "react";
import { render } from "react-dom";
import {ThemeProvider} from "styled-components"

import Div, {
  Normalize,
  NormalizeOpenType
} from "../../src";

const bootstrap = {
  space: [0, "0.25rem", "0.5rem", "1rem", "1.5rem", "3rem"],
  fontSizes: [
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.5rem",
    "3rem",
    "3.5rem",
    "4rem",
    "4.5rem",
    "5rem",
    "5.5rem",
    "6rem"
  ],
  hover: {
    dim: {
      opacity: "1",
      transition: "opacity .15s ease-in",
      "&:hover,&:focus": {
        opacity: "0.5",
        transition: "opacity .15s ease-in"
      },
      "&:active": {
        opacity: "0.8",
        transition: "opacity .15s ease-in"
      }
    }
  }
};

const Demo = () => (
  <ThemeProvider theme={bootstrap}>
    <Div>
      <Normalize />
      <NormalizeOpenType />
      <Div
        py={5}
        fontSize={12}
        height="90vh"
        width="100%"
        background="linear-gradient(to right, #654ea3, #eaafc8)"
        m="auto"
        textAlign={["center","right","left"]}
        verticalAlign="middle"
        as="h1"
        hover="dim"
      >
        Hello World. Cattous.
      </Div>
    </Div>
  </ThemeProvider>
);

render(<Demo />, document.querySelector("#demo"));
