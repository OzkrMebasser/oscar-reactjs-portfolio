import React from 'react';
import ReactDOM from "react-dom/client";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import App from './App';


//translations
import navbar_es from './translations/es/navbar.json';
import navbar_en from './translations/en/navbar.json';

i18next.init({
  interpolation: {escapeValues: false},
  lng: "en",
  resources: {
    es: {
      navbar: navbar_es,
    },
    en: {
      navbar: navbar_en,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <I18nextProvider i18n={i18next}>  
    <App />
    </I18nextProvider>
  </React.StrictMode>
);
