# Readable Research Code

English · [中文](README.md)

A Codex skill for readable research code, especially Python used by an individual researcher. Keep the workflow, data transformations, and computational assumptions visible while avoiding abstractions and safeguards that add little practical value.

Skill name: `readable-research-code`. The skill instructions and Python examples are written in Chinese.

## What it does

- **Keep the main workflow visible.** Place related operations and state nearby; prefer explicit conditions, loops, and meaningful intermediate variables.
- **Evaluate safeguards in context.** Consider concrete risks, existing capabilities, readability, and the cost of future use and maintenance before adding checks, exception handling, or hashes.
- **Use meaningful whitespace.** Keep simple statements compact and separate distinct logical steps with blank lines.
- **Respect the task boundary.** Change only the relevant code and preserve necessary computation, failure behavior, and resource management.

Functions, classes, loops, exception handling, and validation remain appropriate when they provide real value. The skill does not judge code by function counts or line counts, or accumulate a special prohibition for every individual incident.

## Install in Codex

### With the built-in skill-installer

Send this in Codex:

```text
$skill-installer Install https://github.com/Chengyf2004/readable-research-code/tree/main/skills/readable-research-code
```

Replace `main` with `v0.1.0` in the URL to pin the first release.

### With the skills CLI

If Node.js is available, use the [skills CLI](https://github.com/vercel-labs/skills) to install for Codex at user scope:

```bash
npx skills add Chengyf2004/readable-research-code --skill readable-research-code --agent codex --global
```

Inspect the available skill first:

```bash
npx skills add Chengyf2004/readable-research-code --list
```

## Use

The description asks Codex to read the skill when writing or modifying code, especially research Python. `agents/openai.yaml` explicitly allows implicit invocation, so manual invocation is not required for every request. Selection still depends on the task and the model; activation on every coding request is not guaranteed.

To invoke it explicitly:

```text
$readable-research-code Implement this Python change with a visible workflow and blank lines between logical steps.
```

The skill does not change your global `AGENTS.md`, replace project formatter settings, or install runtime dependencies.

## Layout

```text
skills/readable-research-code/
├── SKILL.md
├── LICENSE
├── agents/openai.yaml
└── references/python-examples.md
```

[SKILL.md](skills/readable-research-code/SKILL.md) contains the guidance and final self-check. The [Python examples](skills/readable-research-code/references/python-examples.md) illustrate whitespace, branches, configuration layout, abstraction, and safeguards.

## Validation scope

The initial version was checked for valid skill metadata, example syntax, and visibility in Codex. Two small behavioral tasks exercised grouped means and session recovery through a local SDK test double. The latter preserved an unrelated integrity check without adding new recovery gates. These checks do not establish effectiveness across all models and tasks.

## License

[MIT](LICENSE). The installable skill directory includes the license text as well.
