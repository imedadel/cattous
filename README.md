<p align="center"><img src="https://raw.githubusercontent.com/ImedAdel/cattous/master/cattous.svg?sanitize=true" alt="Cattous Logo" ></p>

<h1 align="center">Cattous 🐱</h1>
<p align="center">Easily define your design system and write your CSS using JSX.</p>

<p align="center">

[![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Coveralls][coveralls-badge]][coveralls]

</p>

## How?

1. Import `ThemeProvider` from `styled-components`.
2. Import `Div`. (Optionally, you can also import `Normalize`, and `NormalizeOpenType`)
3. Define your theme or import an existing one, like `cattous-tachyons`.

And :tada:!

```JS
import { ThemeProvider } from "styled-components"
import Div, { Normalize, NormalizeOpenType } from "cattous"
import cattousTachyons from "cattous-tachyons"

const Layout = () => (
  <ThemeProvider theme={cattousTachyons}>
    <Div>
      <Div fontSize={[0,1,2]} color="black" fontWeight="900" as="h1">Cattous.</Div>
      <Div hover="dim" fontSize="24px" as="p">A CSS in JSX library for lazy developers</Div>
    </Div>
  </ThemeProvider>
)
```

If you would like to add extra styles to `Div`, you can easily use styled-components for that.

```JS
const StyledDiv = styled(Div)`
  // insert your CSS here
`
```

Cattous also comes with `Normalize`, `NormalizeOpenType` (by [Kenneth Ormandy](https://github.com/kennethormandy/normalize-opentype.css)), and `Pesticide` for debugging CSS (by [Pesticide](http://pesticide.io/)).

## Why?

I recently became fond of styled-components and I couldn't go back to using a CSS file in my projects. However, and especially for small projects, styled-components slows me down because I have to declare a new variable for every HTML element that I want to style.

Rebass and styled-system offered what I wanted, but they were still missing a bunch of CSS properties.

Thus, I made Cattous 🐱 to help me get done with styling my side projects as fast as possible. It uses styled-system API and adds all missing CSS properties along with some styling (`cattous-tachyons`).

## What's still missing?

The project is still under development, although it can be used without any problems.

I am still **improving the source code**, **adding more options for theming**, and **importing known CSS libraries** such as Tachyons (✔), Bootstrap, and TailwindCSS.

## Questions? Suggestions?

You can find me on Twitter [@Imed_Adel](https://twitter.com/Imed_Adel) or on [Linkedin](https://www.linkedin.com/in/imedadel/).

[build-badge]: https://img.shields.io/travis/ImedAdel/cattous/master.png?style=flat-square
[build]: https://travis-ci.org/ImedAdel/cattous
[npm-badge]: https://img.shields.io/npm/v/cattous.png?style=flat-square
[npm]: https://www.npmjs.org/package/cattous
[coveralls-badge]: https://img.shields.io/coveralls/ImedAdel/cattous/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/ImedAdel/cattous
