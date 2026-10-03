# Readable Code

[中文](README.md) · English

Readable Code is a pair of instruction-only skills for code that people can read, take over, and maintain. The implementation guidance starts with Python and research scripts; the review rubric also covers modules and repositories.

## Two skills

- **`readable-code-generate`** guides implementation and modification. Its discovery description requires reading the skill before writing or changing code. Implicit invocation is enabled.
- **`readable-code-review`** reviews completed work using eight dimensions, source evidence, reasonable exceptions, and 0–3 grades. Implicit invocation is disabled; invoke it explicitly.

The skills can be installed separately. Their instructions and examples are written in Chinese. No scoring API or runtime dependency is required by the skill package.

## Use

Install both skills with the skills.sh CLI:

```bash
npx skills add Chengyf2004/readable-code
```

To install one skill, add `--skill readable-code-generate` or `--skill readable-code-review`.

Place the selected skill directories under your project's `.agents/skills/`, or install them through your coding agent's skill installer. See the [official Codex skill documentation](https://developers.openai.com/codex/skills).

Implementation:

```text
Use $readable-code-generate for this implementation. Keep the normal workflow,
state, and responsibilities clear. Change only the requested scope.
```

Stage review:

```text
Use $readable-code-review to review the code in src/.
Give a grade and source evidence for each dimension, explain reader costs
and reasonable exceptions, and propose focused improvements. Review only.
```

After reviewing the findings, request the changes you accept and recheck the affected relationships. Implementation preserves existing behavior, interfaces, failure policies, and resource management. The readability review does not evaluate functional correctness or execute candidate code.

## Eight review dimensions

| ID | Dimension |
|---|---|
| D1 | Naming and meaning |
| D2 | Normal workflows and control flow |
| D3 | Data representation and state |
| D4 | Abstraction and responsibilities |
| D5 | Shared knowledge and discoverable change locations |
| D6 | Directness and justification of mechanisms |
| D7 | Information supplied by comments and documentation |
| D8 | Local expressions, grouping, and reading order |

Grades: 3 means no substantive avoidable readability obstacle was found; 2 indicates local burden; 1 indicates substantial tracking of important relationships; 0 indicates severely obscured core meaning. Inapplicable dimensions and missing essential context receive `null`. Grades are reported separately without a composite score.

The [rubric](skills/readable-code-review/references/eight-dimensions.md) adapts principles from Ousterhout, Fowler, Martin, Thomas and Hunt, Beck, Parnas, author essays, Google engineering practices, and Python guidance. The dimensions and grades are this project's design; the books do not supply this scale. [Sources](skills/readable-code-review/references/sources.md)

## Files

```text
skills/
  readable-code-generate/
    SKILL.md
    LICENSE
    agents/openai.yaml
    references/python-examples.md
  readable-code-review/
    SKILL.md
    LICENSE
    agents/openai.yaml
    references/eight-dimensions.md
    references/eight-dimensions.json
    references/sources.md
```

The implementation guidance covers focused safeguards: check existing SDK capabilities, distinguish recording from detecting and blocking, justify hashes and retries, preserve necessary failure policies, and use whitespace to show logical phases.

## License

[MIT](LICENSE). Each independently installable skill includes the license.
