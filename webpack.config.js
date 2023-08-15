import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(dirname, "dist"),
    clean: true,
  },
};

export default config;

// import { resolve } from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// export const mode = "development";
// export const entry = "./src/index.js";

// export const output = {
//   filename: "bundle.js",
//   path: resolve(__dirname, "dist"), // 결과물의 저장 경로
// };

// const mode = "development";

// export default mode;

// export default output;
