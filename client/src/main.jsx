import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import { ModalProvider } from "./context/ModalContext.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
// @ts-ignore
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>
);
