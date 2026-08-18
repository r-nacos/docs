import { resolve } from "node:path";
import { loadEnv } from "vite";

const mode = process.env.NODE_ENV || "development";

export const { VITE_BASE_URL = "/" } = loadEnv(mode, process.cwd());

console.log("Mode:", process.env.NODE_ENV);
console.log("VITE_BASE_URL:", VITE_BASE_URL);

export const demoAlias = {
    "@": resolve(__dirname, "../../../public/demo"),
};
