import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build:{lib:{entry:resolve(__dirname,"src/game/player/PlayerController.ts"),formats:["es"],fileName:"player-controller"},outDir:"dist-movement",emptyOutDir:true,minify:false},
});
