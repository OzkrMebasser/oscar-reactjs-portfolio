import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import MouseContextProvider from "../src/context/MouseContextProvider";


import { Worker } from "@react-pdf-viewer/core";
import i18next from "i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "react-tooltip/dist/react-tooltip.css";

import App from "./App";

//translations
import navbar_es from "./translations/es/global.json";
import navbar_en from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeValues: false },
  lng: "en",
  resources: {
    es: {
      global: navbar_es,
    },
    en: {
      global: navbar_en,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode >
  
    <MouseContextProvider>
     
      <I18nextProvider i18n={i18next}>
        {/* <CursorStars /> */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          {" "}
          <App />
        </Worker>
      </I18nextProvider>
     
    </MouseContextProvider>
  
  </React.StrictMode>
);
