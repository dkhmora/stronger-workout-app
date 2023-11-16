import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import generalStore from "./store/general";
import { Provider } from "react-redux";
import { blueGrey, red } from "@mui/material/colors";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const darkTheme = createTheme({
  // Your dark mode theme configuration
  palette: {
    mode: "dark",
    background: {
      default: blueGrey[900],
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <StyledEngineProvider injectFirst>
        <Provider store={generalStore}>
          <App />
        </Provider>
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
