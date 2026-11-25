# Resume PDF export

The Markdown resumes remain the content source. The exporter preserves all sections and text, uses a single-column two-page layout, and embeds the configured fonts: Vazirmatn for Persian and Roboto for English.

The opening profile paragraph has no section heading. A Markdown horizontal rule separates the name/contact header from that paragraph; the exporter renders the paragraph below the contact block before professional experience.

Run with Node.js and Playwright (a local installation or the Codex bundled runtime):

```text
node scripts/export-resumes.cjs all
node scripts/export-resumes.cjs public
node scripts/export-resumes.cjs private
node scripts/export-resumes.cjs all en
node scripts/export-resumes.cjs all fa
node scripts/export-resumes.cjs public all frontend-engineer
node scripts/export-resumes.cjs public all software-engineer
node scripts/export-resumes.cjs private all software-engineer
```

Public PDFs are generated in `output/pdf/` without a telephone number. Private PDFs and local settings live under `private/`, which is ignored by Git. No Git commit or upload is performed by the exporter.

The optional third argument selects the resume profile. Each profile reads the English source and its counterpart under `fa/`.

| Profile | Markdown source |
| --- | --- |
| `frontend-engineer` (default) | `resume-frontend-engineer.md` |
| `software-engineer` | `resume-software-engineer.md` |

The output filenames use `mahdi-sepaseh-resume-{profile}-{en,fa}.pdf`. Each profile preserves Markdown section order and uses the same two-page layout checks.

The previous `ats` argument selects `frontend-engineer`. The previous `ai-developer-experience` and `ai-assisted-engineering` arguments select `software-engineer`. These aliases write the current PDF filenames.

Create `private/contact.json` locally with these settings:

```json
{
  "phone": "YOUR_PHONE_NUMBER",
  "fonts": {
    "en": {
      "family": "Roboto",
      "regular": "PATH_TO_ROBOTO/Roboto-Regular.ttf",
      "bold": "PATH_TO_ROBOTO/Roboto-Bold.ttf"
    },
    "fa": {
      "family": "Vazirmatn",
      "regular": "PATH_TO_VAZIRMATN/fonts/webfonts/Vazirmatn-Regular.woff2",
      "bold": "PATH_TO_VAZIRMATN/fonts/webfonts/Vazirmatn-Bold.woff2"
    }
  },
  "browserExecutable": "PATH_TO_CHROME_OR_EDGE"
}
```

Each language stores its font family and regular/bold file paths in the local settings. The optional second argument selects `en`, `fa`, or `all` (default). Without `browserExecutable`, Playwright uses its installed Chromium. Public export works without a phone; private export requires one. Keep the settings file and private PDFs out of source control.
