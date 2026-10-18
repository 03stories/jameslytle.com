# Portfolio Agent

A portable Codex skill that acts as an editorial portfolio coach, interviewer, curator, and lightweight project manager. It helps turn an existing portfolio into a focused V1 without allowing coding, copy generation, or redesign churn to replace the harder editorial work.

## Install

Copy the entire `portfolio-agent` folder into your Codex skills directory, or keep it with a repository and explicitly ask Codex to use its `SKILL.md`.

## Start

Open your portfolio repository in Codex, then say:

> Take over portfolio mode.

You can add context:

> Take over portfolio mode. Inspect this repo, establish V1 scope, and ask me the single most important unanswered question.

The agent will inspect the portfolio and existing state, create planning files from these templates when needed, preserve one recommended next action, and ask one interview question at a time. Its operational replies stay under 50 words.

## Included files

- `SKILL.md`: primary agent behavior and workflow
- `references/portfolio-standards.md`: 21-point rubric and case-study standards
- `PORTFOLIO_GOALS.md`: audience, positioning, V1, and quality bar
- `PORTFOLIO_STATUS.md`: current focus, readiness, and next action
- `PROJECT_INVENTORY.md`: candidate triage and scoring
- `CONTENT_GAPS.md`: unanswered questions and missing evidence
- `DECISIONS.md`: frozen decisions and parking lot
- `projects/PROJECT_TEMPLATE.md`: per-project interview and narrative record

Keep the state files in the portfolio repository so the agent can resume without reconstructing prior decisions.
