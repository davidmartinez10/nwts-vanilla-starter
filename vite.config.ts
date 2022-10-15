import "zx/globals";

import {defineConfig} from "vite";

import {manifest} from "./nwts.manifest";

await fs.writeJSON(path.join("public", "package.json"), manifest);

export default defineConfig({
  build: {sourcemap: "inline", outDir: process.env.BUILD_DIRECTORY},
});
