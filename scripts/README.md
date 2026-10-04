# Resume PDF export

The Markdown resumes remain the content source. The exporter preserves all sections and text, uses a single-column two-page layout, and embeds the configured fonts: Vazirmatn for Persian and Roboto for English.

Run with Node.js and Playwright (a local installation or the Codex bundled runtime):

```text
node scripts/export-resumes.cjs all
node scripts/export-resumes.cjs public
node scripts/export-resumes.cjs private
node scripts/export-resumes.cjs all en
node scripts/export-resumes.cjs all fa
```

Public PDFs are generated in `output/pdf/` without a telephone number. Private PDFs and local settings live under `private/`, which is ignored by Git. No Git commit or upload is performed by the exporter.

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
