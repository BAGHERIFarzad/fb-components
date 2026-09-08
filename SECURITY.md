# Security Policy

## Supported versions

FB Components is currently in the `0.x` release line.

| Version | Supported |
|---|---|
| Latest `0.x` release | Yes |
| Older pre-1.0 releases | Best effort |
| Unpublished development snapshots | No guarantee |

## Reporting a vulnerability

Please **do not open a public GitHub issue** for a vulnerability that could put users at risk.

Preferred method:

1. Open the repository on GitHub.
2. Go to **Security**.
3. Use **Report a vulnerability** / a private security advisory if available.
4. Include enough detail to reproduce and understand the issue.

Repository:

https://github.com/BAGHERIFarzad/fb-components

Useful information includes:

- affected package version
- affected component or entry point
- technical description
- reproduction steps
- proof of concept when safe
- expected impact
- suggested remediation, if known

## Supply-chain security

FB Components uses npm Trusted Publishing, GitHub Actions OIDC, npm provenance, CI typechecking/build validation, package-size checks, fresh consumer install tests, and Dependabot configuration.

Published package versions are immutable. Security fixes are released as new versions.
