// NW.js requires a manifest file called "package.json". To avoid confusion with
// Node's homonym, I called it "nwts.manifest.ts". The object exported by this
// module then gets stringified as 'package.json' in the build target directory.
import {NWJSManifest} from "nwts-tools/types/nwjs_manifest";

import package_json from "./package.json";

const { name, displayName } = package_json;

export const manifest: NWJSManifest = {
  name: displayName,
  domain: name,
  main: process.env.NODE_ENV === "development"
          ? `http://localhost:${process.env.PORT}`
          : "index.html",
  window: {width: 500, height: 500, position: "center"}
};
