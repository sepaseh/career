# Git Workflow

Use this guidance when the user asks to commit, push, merge, inspect history, prepare a branch, or otherwise change git state.

## Before committing

1. Run `git status`.
2. Review the relevant `git diff`.
3. Stage only the files that belong to the requested change.
4. Use a concise commit message with a first line under 72 characters.

## Branch and remote rules

- Do not commit unless the user explicitly asks or the requested workflow clearly requires a commit.
- Never commit directly on `main`.
- Every commit must be created on a feature branch.
- Before committing, verify the current branch is not `main`.
- If the current branch is `main` and a commit is needed, create a new feature branch from up-to-date `main` first unless the user explicitly provides another branch.
- Do not push unless the user explicitly asks.
- Do not push directly to `main` unless the user explicitly asks to push or merge into `main`.
- When the user asks to prepare for a new branch, keep `main` clean and synced, then stop before making new branch commits unless asked.
- Prefer creating a feature branch for new documentation changes when the user mentions branch-based work.
- Merge into `main` only when the user explicitly asks to merge.

## Staging rules

- Avoid `git add .` or `git add -A` unless the whole worktree is confirmed to belong to the requested change.
- Stage explicit file paths whenever the worktree contains untracked or unrelated changes.
- Never commit `.env`, credentials, build output, local-only settings, or generated files unrelated to the task.

## Commit rules

- Do not add AI co-author trailers unless the user asks for one.
- Never use `--no-verify` unless the user explicitly asks.
- Never force-push to `main` or `master`.
