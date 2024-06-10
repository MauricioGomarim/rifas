import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/global.js";
import { Routes } from "./routes/index";
import { InfosProvider } from "./hook/infos.jsx";
import {NextUIProvider} from '@nextui-org/react'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <InfosProvider>
    <NextUIProvider>
      <Routes />
    </NextUIProvider>
    </InfosProvider>
  </React.StrictMode>
);
