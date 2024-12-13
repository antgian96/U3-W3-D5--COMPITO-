import React from "react";
import ReactDOM from "react-dom/client"; // Import corretto per React 18
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import dello store Redux

// Usa createRoot invece di render
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
