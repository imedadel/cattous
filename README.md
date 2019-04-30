# cattous 🐱

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

CSS in JSX for lazy developers. Built using styled-components and styled system.

```JS
...

import Div from "cattous"

const Layout = () => (
  <Div>
    <Div fontSize="48px" color="black" fontWeight="900" as="h1">Cattous.</Div>
    <Div fontSize="24px" as="p">A CSS in JSX library for lazy developers</Div>
  </Div>
)

...
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
