import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { PeriodicTableContainer } from "./PeriodicTableContainer";

function App() {
  return (
    <div className="App">
      <h1>Periodic Table</h1>
      <PeriodicTableContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
