# Releasing FB Components

FB Components is published to npm through GitHub Actions using **npm Trusted Publishing (OIDC)**.

The package is:

```text
@farzadbagheri/fb-components
```

Repository:

```text
https://github.com/BAGHERIFarzad/fb-components
```

npm package:

```text
https://www.npmjs.com/package/@farzadbagheri/fb-components
```

Current release line:

```text
0.1.x
```

---

## Release principles

FB Components follows Semantic Versioning.

Before every release:

- update `CHANGELOG.md`
- make sure all intended code changes are committed
- run the release validation
- choose the correct version type
- push the version commit
- push the generated Git tag
- let GitHub Actions publish to npm through Trusted Publishing
- verify the published version on npm

Never manually republish an already published version.

npm package versions are immutable once published.

---

## Release types

### Patch

Use a patch release for:

- bug fixes
- documentation fixes
- small packaging improvements
- non-breaking CSS fixes
- internal refactors that do not change the public API
- dependency fixes that do not introduce breaking behavior

Example:

```text
0.1.1 → 0.1.2
```

Command:

```bash
npm run release:patch
```

---

### Minor

Use a minor release for:

- new components
- new categories
- meaningful new features
- new public exports
- new non-breaking props
- new CSS entry points
- other backwards-compatible public API additions

Example:

```text
0.1.2 → 0.2.0
```

Command:

```bash
npm run release:minor
```

---

### Major

Use a major release for breaking changes after the package reaches a stable major release.

Examples:

- removing public components
- renaming public exports
- breaking prop changes
- breaking CSS contract changes
- removing supported React versions
- changing package entry points in a breaking way

Command:

```bash
npm run release:major
```

---

## Release scripts

The package provides these release scripts:

```json
{
  "release:check": "npm run typecheck && npm run build && npm pack --dry-run",
  "release:patch": "npm run release:check && npm version patch",
  "release:minor": "npm run release:check && npm version minor",
  "release:major": "npm run release:check && npm version major"
}
```

`release:check` verifies:

- TypeScript
- package build
- npm package contents

The version commands then create:

- a version update in `package.json`
- a Git commit
- a Git tag such as `v0.1.2`

---

## Standard release workflow

Always start from the repository root:

```powershell
cd C:\Users\farza\Desktop\fb-components
```

Check the working tree:

```powershell
git status
```

The working tree should be clean before creating a version.

---

## Step 1 — Update the changelog

Open:

```text
CHANGELOG.md
```

Add the new version before releasing.

Example:

```md
## [0.1.2] - 2026-09-08

### Fixed

- Fixed button hover behavior.
- Improved TypeScript declarations.

### Changed

- Improved package documentation.
```

Use these headings when appropriate:

```text
Added
Changed
Deprecated
Removed
Fixed
Security
```

Save the changelog before continuing.

---

## Step 2 — Commit normal code changes

If you changed source code, documentation, or package configuration:

```powershell
git add .
git commit -m "feat: describe the change"
git push origin main
```

Examples:

```text
feat: add new data visualization components
fix: correct radial progress animation
docs: improve installation guide
chore: update package metadata
refactor: simplify component exports
```

Do not create the release version until the intended changes are committed.

---

## Step 3 — Run the release validation

Run:

```powershell
npm run release:check
```

This must pass before releasing.

Expected checks:

```text
TypeScript       ✅
Build            ✅
npm pack dry-run ✅
```

If any check fails, stop and fix the issue before continuing.

---

## Step 4 — Create the new version

### Patch release

```powershell
npm run release:patch
```

Example:

```text
0.1.1 → 0.1.2
```

### Minor release

```powershell
npm run release:minor
```

Example:

```text
0.1.2 → 0.2.0
```

### Major release

```powershell
npm run release:major
```

Example:

```text
1.4.2 → 2.0.0
```

`npm version` creates the version commit and tag automatically.

---

## Step 5 — Push the version commit

Push the updated branch:

```powershell
git push origin main
```

---

## Step 6 — Push the release tag

Push the generated tags:

```powershell
git push origin --tags
```

Or push one exact tag:

```powershell
git push origin v0.1.2
```

The pushed tag triggers:

```text
.github/workflows/publish.yml
```

---

## Trusted Publishing flow

The GitHub Actions workflow performs:

```text
Git tag pushed
      ↓
GitHub Actions starts
      ↓
Checkout repository
      ↓
Install dependencies
      ↓
Typecheck
      ↓
Build
      ↓
npm Trusted Publishing via OIDC
      ↓
npm publish
      ↓
Provenance generated
      ↓
Package becomes available on npm
```

No long-lived npm token should be required for the trusted publishing workflow.

The trusted publisher is configured for:

```text
GitHub user / organization:
BAGHERIFarzad

Repository:
fb-components

Workflow:
publish.yml
```

---

## Verify GitHub Actions

After pushing the tag, open:

```text
https://github.com/BAGHERIFarzad/fb-components/actions
```

Open the **Publish Package** workflow.

Confirm that all steps are green:

```text
Checkout repository ✅
Setup Node          ✅
Install dependencies ✅
Typecheck           ✅
Build               ✅
Publish to npm      ✅
```

If the workflow fails, do not create another version immediately.

Inspect the failed step first.

---

## Verify the npm release

Check the latest published version:

```powershell
npm view @farzadbagheri/fb-components version
```

Expected example:

```text
0.1.2
```

Check dist-tags:

```powershell
npm view @farzadbagheri/fb-components dist-tags
```

Expected example:

```text
{ latest: '0.1.2' }
```

Check the full package metadata:

```powershell
npm view @farzadbagheri/fb-components
```

---

## Verify package installation

For important releases, test the real published package in a fresh folder.

Example:

```powershell
cd C:\Users\farza\Desktop
mkdir fb-components-release-test
cd fb-components-release-test
npm init -y
npm install react react-dom
npm install @farzadbagheri/fb-components
```

Verify:

```powershell
npm ls @farzadbagheri/fb-components
```

Then test root exports:

```js
import * as FB from "@farzadbagheri/fb-components";

console.log(Object.keys(FB));
```

Test a category import:

```js
import { GlowButton } from "@farzadbagheri/fb-components/buttons";
```

Test CSS resolution:

```powershell
node -e "console.log(require.resolve('@farzadbagheri/fb-components/buttons.css'))"
```

and:

```powershell
node -e "console.log(require.resolve('@farzadbagheri/fb-components/styles.css'))"
```

---

## Create a GitHub Release

After the npm release is confirmed, create a GitHub Release for the same tag.

Example:

```text
Tag:
v0.1.2

Title:
FB Components v0.1.2
```

Suggested release notes structure:

```md
# FB Components v0.1.2

## Added

- ...

## Changed

- ...

## Fixed

- ...

## Installation

```bash
npm install @farzadbagheri/fb-components
```
```

The GitHub release tag and npm version should always correspond.

Example:

```text
GitHub tag: v0.1.2
npm:        0.1.2
```

---

## Pre-release checklist

Before every release:

```text
[ ] CHANGELOG.md updated
[ ] intended code committed
[ ] working tree clean
[ ] package version is correct
[ ] npm run release:check passes
[ ] TypeScript passes
[ ] build passes
[ ] npm pack --dry-run looks correct
[ ] README is current
[ ] package metadata is correct
[ ] no secrets are committed
[ ] correct release type selected
```

---

## Post-release checklist

After every release:

```text
[ ] GitHub Actions workflow is green
[ ] npm version is visible
[ ] latest dist-tag is correct
[ ] package installation works
[ ] root exports resolve
[ ] category exports resolve
[ ] CSS exports resolve
[ ] GitHub Release created or updated
[ ] CHANGELOG matches the published version
```

---

## Useful commands

### Check current package version

```powershell
npm pkg get version
```

### Check npm registry version

```powershell
npm view @farzadbagheri/fb-components version
```

### Check release tags

```powershell
git tag
```

### Check repository status

```powershell
git status
```

### Check remote repository

```powershell
git remote -v
```

### Run package validation

```powershell
npm run release:check
```

### Create patch release

```powershell
npm run release:patch
```

### Create minor release

```powershell
npm run release:minor
```

### Create major release

```powershell
npm run release:major
```

### Push main branch

```powershell
git push origin main
```

### Push all tags

```powershell
git push origin --tags
```

---

## Versioning examples

### Bug fix

Current:

```text
0.1.2
```

Next:

```text
0.1.3
```

Use:

```powershell
npm run release:patch
```

### New components

Current:

```text
0.1.3
```

Next:

```text
0.2.0
```

Use:

```powershell
npm run release:minor
```

### Breaking API change

Current:

```text
1.4.0
```

Next:

```text
2.0.0
```

Use:

```powershell
npm run release:major
```

---

## Important rules

### Never reuse an npm version

Once this exists:

```text
@farzadbagheri/fb-components@0.1.2
```

do not try to publish `0.1.2` again.

Create a new version instead.

### Never push a release tag before validation

Do not push a version tag until:

```powershell
npm run release:check
```

passes.

### Do not publish manually when Trusted Publishing is the release path

The preferred release path is:

```text
Git tag
→ GitHub Actions
→ npm Trusted Publishing
```

This keeps the publishing process reproducible and provides provenance.

### Keep GitHub and npm versions aligned

For example:

```text
package.json   0.2.0
Git tag        v0.2.0
GitHub Release v0.2.0
npm package    0.2.0
```

---

## Recovery: workflow failed before npm publish

If GitHub Actions fails before the publish step:

1. inspect the failed workflow
2. fix the problem
3. commit the fix
4. do not reuse a tag pointing at incorrect source without understanding the state
5. create a new patch version when necessary

Example:

```text
0.1.2 workflow failed
→ fix problem
→ release 0.1.3
```

This is usually safer than attempting to force a release history rewrite.

---

## Recovery: npm version exists but GitHub Release is missing

If npm successfully published but the GitHub Release was not created:

- do not republish
- create the GitHub Release manually using the existing tag

Example:

```text
npm version: 0.1.2
Git tag:     v0.1.2
```

Create the GitHub Release for `v0.1.2`.

---

## Recovery: npm registry is temporarily returning 404

Immediately after publication, npm metadata can sometimes take a short time to become visible.

Do not immediately republish.

Check:

```powershell
npm view @farzadbagheri/fb-components@0.1.2 --registry=https://registry.npmjs.org/
```

Then retry:

```powershell
npm view @farzadbagheri/fb-components version
```

If the publish command already reported success, verify the registry state before taking further release actions.

---

## Recommended day-to-day release process

For a normal patch release:

```powershell
cd C:\Users\farza\Desktop\fb-components
git status
npm run release:patch
git push origin main
git push origin --tags
```

Then:

```text
GitHub Actions
→ verify Publish Package is green
```

Finally:

```powershell
npm view @farzadbagheri/fb-components version
```

That is the standard FB Components release workflow.

---

## Package links

GitHub:

```text
https://github.com/BAGHERIFarzad/fb-components
```

npm:

```text
https://www.npmjs.com/package/@farzadbagheri/fb-components
```

Website:

```text
https://farzadbagheri.fr/en/components
```

Releases:

```text
https://github.com/BAGHERIFarzad/fb-components/releases
```

Issues:

```text
https://github.com/BAGHERIFarzad/fb-components/issues
```

---

FB Components release workflow — npm Trusted Publishing, GitHub Actions, Semantic Versioning, and provenance-ready releases.
