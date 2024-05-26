import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/global.js";
import { Routes } from "./routes/index";

import {NextUIProvider} from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <NextUIProvider>
      <Routes />
    </NextUIProvider>
  </React.StrictMode>
);
