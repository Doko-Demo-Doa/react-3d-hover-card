import SteamCard from "../lib/main";

import "./app.css";

function App() {
  return (
    <div className="App">
      <SteamCard scaleFactor={1.4}>
        <img
          src="https://s3.duellinksmeta.com/cards/60c2b3aba0e24f2d54a52a69_w360.webp"
          style={{
            transition: "all 250ms ease-out",
          }}
        />
      </SteamCard>
    </div>
  );
}

export default App;
