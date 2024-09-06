import Landing from "./pages";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Landing />
  </StrictMode>
);
