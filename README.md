# React 3D hover card

[Live demo](https://darenft-labs.github.io/react-3d-hover-card/)

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
