# Career repository instructions

This repository maintains a bilingual career portfolio. English documents live at the root and their Persian counterparts live under `fa/`. Start with the [English index](README.md) or the [Persian index](fa/README.md).

## Editing career documents

- Preserve existing user changes and keep edits within the requested scope.
- Update the underlying experience and project records before using changed facts in About, skills, resumes or LinkedIn references. Keep the affected English and Persian versions aligned while preserving the purpose and wording of each resume variant.
- Use relative links to documents in the same language. Link across languages when pointing to a language counterpart. Update both README indexes when their navigation changes.
- Keep skill identities and order aligned across the LinkedIn references. Preserve distinctions between draft profile copy and a verified live profile.

## Resumes and local files

- Markdown is the source for resume PDFs. Follow the [export guide](scripts/README.md) when updating a published resume. Regenerate the affected public PDFs and check their layout and links.
- Keep public PDFs in `output/pdf/` without a phone number. Keep local contact settings, private PDFs and archives under `private/`, and temporary files under `tmp/`. Keep these local files out of source control.

## Git and publication

- Check `git status` and review the relevant diff before committing. Stage the requested files by path when the worktree contains unrelated changes.
- Commit only when requested or required by the requested workflow. Commit on a feature branch, with a subject under 72 characters. Leave hooks enabled and omit AI co-author trailers unless the user requests otherwise.
- Push, open pull requests, create issues and merge branches only with the user's authorization. Push directly to `main` or `master` only when explicitly requested. Never force-push either branch.
- Use the [`yeet` skill](.agents/skills/yeet/SKILL.md) only when the user explicitly asks to stage, commit, push and open a GitHub pull request in one flow with `gh`. Apply this repository's staging and branch rules during that flow.

## Local safety

- Use destructive commands only with explicit authorization and after verifying the target. Avoid `git reset --hard`, `git clean -fd` and recursive deletes or moves against computed paths.
- Keep credentials, private contact files, local tool permissions and unrelated generated output out of Git. Avoid dumping the shell environment, and access sensitive values only when authorized.
