import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import "./styles/aglobals.css";
import "./i18n";
import { CurrencyProvider } from "./context/CurrencyContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CurrencyProvider>
            <Home />
        </CurrencyProvider>
    </React.StrictMode>
);