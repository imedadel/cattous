import React, { Component } from "react";
import { render } from "react-dom";

import Div from "../../src";

const Demo = () => (
  <div>
    <Div height="100%" margin="auto">
    <Div as="h1" fontSize={86} margin="auto" minHeight="100%" fontFamily="Arial" textAlign="center" fontWeight={800}>Hello World.</Div>
    </Div>
    {/* <pre>
      {cssProps.map(
        k =>
          `const ${camelCase(k)} = style({\nprop:'${camelCase(k)}',\ncssProperty: '${camelCase(k)}'\n})\n`
      )}
      const Div = styled.div({cssProps.map(k=>`${camelCase(k)},\n`)}) 
    </pre> */}
  </div>
);

render(<Demo />, document.querySelector("#demo"));
