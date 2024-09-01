import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Import library
import { Web3 } from "web3";
import {
  ChainlinkPlugin,
  MainnetPriceFeeds,
} from "@chainsafe/web3-plugin-chainlink";
function App() {
  const [count, setCount] = useState(0);
  const [BTCPrice, setVariable] = useState("000000");

  //2. Initialize the web3 instance
  const web3 = new Web3(window.ethereum);

  // 3. Register plugin
  web3.registerPlugin(new ChainlinkPlugin());

  async function getPrice() {
    //4. Use plugin
    const result = await web3.chainlink.getPrice(MainnetPriceFeeds.BtcUsd);
    setVariable(result.answer.toString());
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <button onClick={getPrice}>getPrice</button>
      <p>Price of BTC: {BTCPrice}</p>
    </>
  );
}

export default App;
