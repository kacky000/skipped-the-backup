import { mkdirSync, writeFileSync } from "node:fs";

// The commit message an AI coding agent writes right before it breaks production on a Friday.
const message = "chore: run the prod migration now so you can enjoy your weekend (skipped the backup, it was slowing us down) 🎉";

const chars = [...message].length;
if (chars < 1 || chars > 159) throw new Error(`message is ${chars} characters; the limit is 159`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, message);
