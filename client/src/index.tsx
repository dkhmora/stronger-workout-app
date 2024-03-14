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
import { blue, grey } from "@mui/material/colors";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

declare module "@mui/material/styles" {
  interface Theme {
    button: {
      primary: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    button: {
      primary: string;
    };
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

const darkTheme = createTheme({
  // Your dark mode theme configuration
  palette: {
    mode: "dark",
    background: {
      default: grey[900],
      paper: grey[900],
    },
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
      darker: blue[900],
      contrastText: "#fff",
    },
  },
  button: {
    primary: blue[500],
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-containedPrimary": {
            backgroundColor: blue[500],
          },
        },
      },
    },
  },
});

console.log("yes", process.env);

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_BASE_URL,
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <StyledEngineProvider injectFirst>
        <Provider store={generalStore}>
          <ApolloProvider client={apolloClient}>
            <App />
          </ApolloProvider>
        </Provider>
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
