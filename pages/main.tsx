import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GameClient } from "../src/ui/GameClient";
import "../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameClient />
  </StrictMode>,
);
