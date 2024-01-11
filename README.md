# React 3D hover card

[Live demo](https://doko-demo-doa.github.io/react-3d-hover-card/)

Library to create 3D hover card effect (like Steam trading card)

```
npm install @darenft/react-3d-hover-card
```

then use it like this:

```tsx
import HoverCard from "@darenft/react-3d-hover-card";

import "@darenft/react-3d-hover-card/dist/style.css";

function App() {
  return (
    <div className="App">
      <HoverCard scaleFactor={1.4}>
        <img src="https://s3.duellinksmeta.com/cards/60c2b3aba0e24f2d54a52a69_w360.webp" />
      </HoverCard>
    </div>
  );
}
```

# License

Copyright (c) 2022-2024 Quan Pham

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
