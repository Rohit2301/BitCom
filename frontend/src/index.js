import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { SnackbarProvider } from "notistack";
import { MoralisProvider } from "react-moralis";

const serverUrl = "https://x6xy3d83hlvh.usemoralis.com:2053/server";
const appId = "ZNbHtSJFk108FhMjiXlnCGgRBNWsILNWmkI6vj6h";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Router>
          <MoralisProvider serverUrl={serverUrl} appId={appId}>
            <App />
          </MoralisProvider>
        </Router>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
