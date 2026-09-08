# Recommended GitHub Ruleset for `main`

Open:

```text
Settings → Rules → Rulesets → New ruleset → New branch ruleset
```

Use:

```text
Ruleset name: Protect main
Enforcement: Active
Target: main
```

Recommended rules:

```text
Require a pull request before merging
Require status checks to pass
Block force pushes
Restrict deletions
```

Required status checks from `.github/workflows/ci.yml`:

```text
Typecheck and Build
Package Size Guard
Fresh Install Test
```

For strict protection, require the branch to be up to date before merging.

For a solo-maintainer repository, requiring one approving review is optional; otherwise you can accidentally make your own PRs impossible to merge without a bypass.

Recommended merge settings:

```text
Settings → General → Pull Requests
Allow squash merging: ON
Automatically delete head branches: ON
```

You may later add a tag ruleset for `v*` to reduce accidental rewriting or deletion of release tags.
