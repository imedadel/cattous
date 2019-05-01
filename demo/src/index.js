import React, { Component } from "react";
import { render } from "react-dom";

import Div, {Flex} from "../../src";

const Demo = () => (
  <div>
    <Div
      py={4}
      fontSize={8}
      fontWeight={900}
      height="100%"
      width="100%"
      background="linear-gradient(to right, #654ea3, #eaafc8)"
      m="auto"
      textAlign="center"
      verticalAlign="middle"
    >
      Hello World. Cattous.
    </Div>
    <pre>
      {/* {cssProps.map(k=>`${k},\n`)} */}
      {/* {cssProps.map(
        k =>
          `const ${camelCase(k)} = style({\nprop:'${camelCase(k)}',\ncssProperty: '${camelCase(k)}'\n})\n`
      )}
      const Div = styled.div({cssProps.map(k=>`${camelCase(k)},\n`)})  */}
    </pre>
  </div>
);

render(<Demo />, document.querySelector("#demo"));
