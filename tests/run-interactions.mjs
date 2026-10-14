import { spawnSync } from "node:child_process";

for (const reduced of ["0", "1"]) {
  process.stdout.write(`\nInteractions / reduced motion: ${reduced === "1"}\n`);
  const result = spawnSync(process.execPath, ["--import", "tsx", "--test", "tests/lab-interactions.test.mjs"], {
    stdio: "inherit",
    env: { ...process.env, LAB_REDUCED_MOTION: reduced },
  });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
