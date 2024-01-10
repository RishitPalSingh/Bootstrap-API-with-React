import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom'

import Header from "./components/Header"
import App from "./App";
import './styles.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
    <Header />
    <App />
    </Router>
  </StrictMode>
);
