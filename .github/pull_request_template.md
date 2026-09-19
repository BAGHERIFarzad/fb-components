## Summary

Describe what changed and why.

## Related Issue

Use one of the following when applicable:

```text
Closes #123
Fixes #123
Related to #123
```

If there is no related issue, explain why.

## Change Type

- [ ] New component
- [ ] Existing component improvement
- [ ] Bug fix
- [ ] Accessibility
- [ ] Documentation
- [ ] Testing
- [ ] Developer experience
- [ ] Build / packaging
- [ ] Refactor
- [ ] Other

## Public API Impact

- [ ] No public API change
- [ ] Adds a new public API
- [ ] Changes an existing public API

If the public API changes, describe the new or changed imports, props, exports, or behavior.

## Accessibility Impact

- [ ] No accessibility impact
- [ ] Accessibility behavior improved
- [ ] Accessibility behavior changed

Describe keyboard behavior, semantics, ARIA, focus behavior, reduced motion, or other relevant accessibility details.

## Documentation Impact

- [ ] No documentation changes required
- [ ] Documentation updated
- [ ] Examples updated
- [ ] Component API documentation updated

List the relevant docs changed.

## Package / Bundle Impact

- [ ] No meaningful package-size impact
- [ ] Package size changed
- [ ] New runtime dependency added
- [ ] Export map changed
- [ ] CSS entry point changed

If relevant, describe the impact.

## Validation

Before requesting review:

- [ ] `git diff --check`
- [ ] `npm run typecheck`
- [ ] `npm test`
- [ ] `npm run build`
- [ ] `npm run package:size`
- [ ] `npm run install-test`
- [ ] `npm run release:check`

If any validation step was not run, explain why.

## Test Coverage

Describe the tests added or updated.

If no tests were required, explain why.

## Screenshots / Demo

Add screenshots, recordings, or before/after examples when the change is visual.

If not applicable, write:

```text
Not applicable.
```

## Reviewer Notes

Call out anything that deserves special review attention, such as:

- edge cases
- backwards compatibility
- accessibility behavior
- API design
- package-size tradeoffs
- browser behavior
- follow-up work

## Final Checklist

- [ ] The change is focused and does not include unrelated edits.
- [ ] Public examples use package entry points rather than internal source imports.
- [ ] Documentation matches the real public API.
- [ ] Accessibility was considered.
- [ ] Tests cover meaningful observable behavior where practical.
- [ ] `npm run release:check` passes.
- [ ] No secrets, generated junk, or temporary files are included.
