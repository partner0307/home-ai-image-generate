import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./style/globalStyle";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { slice } from "./useStore";

const store = configureStore({ reducer: slice.reducer });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"anonymous"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle />
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
