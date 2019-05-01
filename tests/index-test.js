import expect from "expect";
import React from "react";
import { renderToStaticMarkup as render } from "react-dom/server";

import Div from "src";

describe("Div", () => {
  it("renders a div", () => {
    expect(render(<Div>Hello</Div>)).toContain("Hello</div>");
  });
  it("renders a p", () => {
    expect(render(<Div as="p">Hello</Div>)).toContain("Hello</p>");
  });
});
