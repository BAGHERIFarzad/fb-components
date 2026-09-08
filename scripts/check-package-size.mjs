import { execFileSync } from "node:child_process";

const MAX_PACKED_SIZE = 100 * 1024;
const MAX_UNPACKED_SIZE = 600 * 1024;
const MAX_FILE_COUNT = 150;

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} kB`;
}

try {
  const output = execFileSync(
    "npm",
    ["pack", "--json", "--dry-run"],
    {
      encoding: "utf8",
      shell: process.platform === "win32"
    }
  );

  const result = JSON.parse(output);

  if (!Array.isArray(result) || result.length === 0) {
    throw new Error("npm pack returned no package information.");
  }

  const pkg = result[0];

  const packedSize = pkg.size ?? 0;
  const unpackedSize = pkg.unpackedSize ?? 0;
  const fileCount = pkg.entryCount ?? pkg.files?.length ?? 0;

  console.log("");
  console.log("FB Components package-size report");
  console.log("---------------------------------");
  console.log(`Packed size:   ${formatKb(packedSize)}`);
  console.log(`Unpacked size: ${formatKb(unpackedSize)}`);
  console.log(`Files:         ${fileCount}`);
  console.log("");
  console.log("Limits");
  console.log("---------------------------------");
  console.log(`Packed:        ${formatKb(MAX_PACKED_SIZE)}`);
  console.log(`Unpacked:      ${formatKb(MAX_UNPACKED_SIZE)}`);
  console.log(`Files:         ${MAX_FILE_COUNT}`);
  console.log("");

  const failures = [];

  if (packedSize > MAX_PACKED_SIZE) {
    failures.push(
      `Packed package is too large: ${formatKb(packedSize)} > ${formatKb(
        MAX_PACKED_SIZE
      )}`
    );
  }

  if (unpackedSize > MAX_UNPACKED_SIZE) {
    failures.push(
      `Unpacked package is too large: ${formatKb(
        unpackedSize
      )} > ${formatKb(MAX_UNPACKED_SIZE)}`
    );
  }

  if (fileCount > MAX_FILE_COUNT) {
    failures.push(
      `Package contains too many files: ${fileCount} > ${MAX_FILE_COUNT}`
    );
  }

  if (failures.length > 0) {
    console.error("Package-size guard FAILED.");
    console.error("");

    for (const failure of failures) {
      console.error(`- ${failure}`);
    }

    process.exit(1);
  }

  console.log("Package-size guard PASSED.");
} catch (error) {
  console.error("Unable to validate package size.");

  if (error instanceof Error) {
    console.error(error.message);
  }

  process.exit(1);
}