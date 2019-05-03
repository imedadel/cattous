import React, { Component } from "react";
import { render } from "react-dom";
// import {ThemeProvider} from "styled-components"

import Div, {
  ThemeProvider,
  Normalize,
  NormalizeOpenType,
  bootstrap
} from "../../src";

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
