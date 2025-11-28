---
id: 0002
title: Fix MDX sensor '<' parse error
stage: general
date: 2025-11-28
surface: agent
model: gpt-5-mini
feature: none
branch: master
user: unknown
command: edit-docs-fix-mdx
labels: [docs,mdx,bugfix]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - f:/AISpec-Driven-Hackathon/ai-native-bot/docs/01-intro/index.md
tests:
 - none
---

## Prompt

PS F:\\AISpec-Driven-Hackathon> pnpm start
 [?25l[?25h[?25l[?25h[?25l
[?25h
[?25l[?25h[?25l[?25h
[?25h
PS F:\\AISpec-Driven-Hackathon> pnpm start

> ai-native-bot@0.0.0 start F:\\AISpec-Driven-Hackathon\\ai-native-bot
> docusaurus start

[INFO] Starting the development server...
[SUCCESS] Docusaurus website is running at: http://localhost:3000/

× Client
  Compiled with some errors in 6.36s

Error: MDX compilation failed for file "F:\\AISpec-Driven-Hackathon\\ai-native-bot\\docs\\01-intro\\index.md"
Cause: Unexpected character `2` (U+0032) before name, expected a character that can start a name, such as a letter, `$`, or `_`
Details:
{
  "column": 332,
  "file": "",
  "message": "Unexpected character `2` (U+0032) before name, expected a character that can start a name, such as a letter, `$`, or `_`",
  "line": 54,
  "name": "54:332",
  "place": {
    "_bufferIndex": 327,
    "_index": 0,
    "line": 54,
    "column": 332,
    "offset": 5810
  },
  "reason": "Unexpected character `2` (U+0032) before name, expected a character that can start a name, such as a letter, `$`, or `_`",     
  "ruleId": "unexpected-character",
  "source": "micromark-extension-mdx-jsx",
  "url": "https://github.com/micromark/micromark-extension-mdx-jsx#unexpected-character-at-expected-expect"
}
client (webpack 5.103.0) compiled with 1 error
<w> [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item 'Compilation/modules|F:\\AISpec-Driven-Hackathon\\ai-native-bot\\node_modules\\.pnpm\\@docusaurus+mdx-loader@3.9._ae4c899c4a69633f544f502309b11d45\\node_modules\\@docusaurus\\mdx-loader\\lib\\index.js??ruleSet[1].rules[8].use[0]!F:\\AISpec-Driven-Hackathon\\ai-native-bot\\docs\\01-intro\\index.md': No serializer registered for VFileMessage
<w> while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> webpack/lib/ModuleBuildError -> Error -> VFileMessage (See <attachments> above for file contents. You may not need to search or read the file again.)




## Response snapshot

- Replaced raw `<` characters followed by digits to HTML entity escapes to avoid MDX JSX parsing errors. Files modified:
  - `ai-native-bot/docs/01-intro/index.md`

## Outcome

- ✅ Impact: Fixed MDX parse error caused by unescaped comparison tokens like `<2%` and `<200ms`.
- 🧪 Tests: Manual inspection and grep search for remaining `'<digit'` patterns (none found).
- 📁 Files: `ai-native-bot/docs/01-intro/index.md` updated.
- 🔁 Next prompts: Restart Docusaurus (`pnpm start`) to confirm compilation success; report any further errors.
- 🧠 Reflection: Use `&lt;` or words like "less than" instead of raw `<` in MDX content when followed by digits.

## Evaluation notes (flywheel)

- Failure modes observed: Unescaped '<' followed by digits parsed as JSX start tokens.
- Graders run and results (PASS/FAIL): grep search PASS (no matches remaining).
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): If further MDX errors cite other lines, search for additional raw `<` characters and escape similarly.
