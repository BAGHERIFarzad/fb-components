import {
  mkdtempSync,
  writeFileSync,
  rmSync,
  existsSync
} from "node:fs";

import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const PACKAGE_NAME = "@farzadbagheri/fb-components";

function run(command, args, options = {}) {
  console.log(`> ${command} ${args.join(" ")}`);

  return execFileSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
    ...options
  });
}

function capture(command, args, options = {}) {
  return execFileSync(command, args, {
    encoding: "utf8",
    shell: process.platform === "win32",
    ...options
  }).trim();
}

const projectRoot = process.cwd();
const tempDirectory = mkdtempSync(
  join(tmpdir(), "fb-components-install-test-")
);

console.log("");
console.log("FB Components fresh install test");
console.log("--------------------------------");
console.log(`Temporary directory: ${tempDirectory}`);
console.log("");

try {
  console.log("1. Packing package...");

  const packOutput = capture(
    "npm",
    ["pack", "--json"],
    {
      cwd: projectRoot
    }
  );

  const packResult = JSON.parse(packOutput);

  if (!Array.isArray(packResult) || !packResult[0]?.filename) {
    throw new Error("Unable to determine generated package tarball.");
  }

  const tarballName = packResult[0].filename;
  const tarballPath = resolve(projectRoot, tarballName);

  if (!existsSync(tarballPath)) {
    throw new Error(`Tarball was not created: ${tarballPath}`);
  }

  console.log(`Packed: ${tarballName}`);
  console.log("");

  console.log("2. Creating clean consumer project...");

  writeFileSync(
    join(tempDirectory, "package.json"),
    JSON.stringify(
      {
        name: "fb-components-ci-install-test",
        private: true,
        version: "1.0.0",
        type: "module"
      },
      null,
      2
    )
  );

  console.log("");

  console.log("3. Installing React and packed FB Components...");

  run(
    "npm",
    [
      "install",
      "react@19",
      "react-dom@19",
      tarballPath
    ],
    {
      cwd: tempDirectory
    }
  );

  console.log("");

  console.log("4. Creating consumer verification script...");

  const testFile = join(tempDirectory, "test.mjs");

  writeFileSync(
    testFile,
    `
import * as FB from "${PACKAGE_NAME}";
import * as Buttons from "${PACKAGE_NAME}/buttons";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const requiredRootExports = [
  "GlowButton",
  "RadialProgress",
  "StreamingResponse",
  "SaasLaunchHero"
];

for (const name of requiredRootExports) {
  if (!(name in FB)) {
    throw new Error(
      \`Missing root export: \${name}\`
    );
  }
}

const requiredButtonExports = [
  "GlowButton",
  "GlassButton",
  "MagneticButton"
];

for (const name of requiredButtonExports) {
  if (!(name in Buttons)) {
    throw new Error(
      \`Missing button export: \${name}\`
    );
  }
}

const buttonsCss = require.resolve(
  "${PACKAGE_NAME}/buttons.css"
);

const rootCss = require.resolve(
  "${PACKAGE_NAME}/styles.css"
);

console.log("");
console.log("Root exports:", Object.keys(FB).length);
console.log(
  "Button exports:",
  Object.keys(Buttons)
);
console.log(
  "buttons.css:",
  buttonsCss
);
console.log(
  "styles.css:",
  rootCss
);
console.log("");
console.log(
  "Fresh install verification PASSED."
);
`
  );

  console.log("");

  console.log("5. Running consumer test...");

  run(
    "node",
    ["test.mjs"],
    {
      cwd: tempDirectory
    }
  );

  console.log("");
  console.log(
    "FB Components install-test PASSED."
  );

  rmSync(tarballPath, {
    force: true
  });
} catch (error) {
  console.error("");
  console.error(
    "FB Components install-test FAILED."
  );

  if (error instanceof Error) {
    console.error(error.message);
  }

  process.exitCode = 1;
} finally {
  rmSync(tempDirectory, {
    recursive: true,
    force: true
  });
}