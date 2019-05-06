import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import "./styles.css";
import { PeriodicTableContainer } from "./PeriodicTableContainer";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>

    <div className="App">
      <h1>Periodic Table</h1>
      <PeriodicTableContainer />
    </div>
    </MuiThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
