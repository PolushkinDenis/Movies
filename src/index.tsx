import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import {GoogleOAuthProvider} from '@react-oauth/google';
import "./i18next";
const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="955194010474-uvrvk98vbh0ou8p8elln6mhdmvsufrmb.apps.googleusercontent.com">
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Provider>
  </GoogleOAuthProvider>
);

reportWebVitals();
