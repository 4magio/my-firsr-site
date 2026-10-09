# my-firsr-site

Small web project: `Website/` holds an Express backend and a plain HTML/JS frontend.

## Rules
- Every folder (except `node_modules`, `.git`, `.claude`) must contain a `CLAUDE.md` describing its purpose and key files.
- A PostToolUse hook (`scripts/ensure-claude-md.sh`, configured in `.claude/settings.json`) creates a stub `CLAUDE.md` in any folder missing one. When you see that message, replace the TODO with a real description.
- Update a folder's `CLAUDE.md` when you change what that folder contains.

## Run
`cd Website/backend && npm install && npm start` then open http://localhost:3000
