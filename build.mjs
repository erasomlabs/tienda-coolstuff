import { cp, mkdir, rm } from "node:fs/promises";

const root = new URL("./", import.meta.url);
const output = new URL("./.deploy/", root);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL("./index.html", root), new URL("./index.html", output));
await cp(new URL("./assets/", root), new URL("./assets/", output), { recursive: true });

console.log("Build listo: .deploy");
