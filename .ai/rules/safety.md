# Safety

Use this guidance before running shell commands, editing sensitive files, or changing git state.

## Dangerous commands

Do not run destructive commands unless the user explicitly asks and the target path is verified.

- Avoid `git reset --hard`, `git clean -fd`, and force pushes.
- Avoid recursive delete or move commands against computed paths.
- Avoid deleting outside the current project unless explicitly requested.
- Prefer reviewing `git status` and `git diff` before broad edits.

## Secrets and credentials

- Do not read, print, commit, or edit secrets unless the user explicitly asks.
- Treat `.env`, private keys, credential files, tokens, and passwords as sensitive.
- Do not run commands that dump the full environment.

## External systems

- Do not push to `main` or `master` directly unless the user explicitly requests it.
- Do not open pull requests, create issues, merge branches, or update remote systems unless requested.

## Documentation repository care

- Preserve the user's wording when asked for specific copy changes.
- Keep README navigation links accurate when adding, renaming, or removing documents.
- Avoid broad rewrites when a focused edit satisfies the request.
