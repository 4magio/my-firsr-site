#!/usr/bin/env bash
# Ensures every project folder has a CLAUDE.md. Missing ones are created as stubs.
# Run by the PostToolUse hook in .claude/settings.json after Claude edits files.
cd "${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel)}" || exit 0
created=()
while IFS= read -r dir; do
  [ -f "$dir/CLAUDE.md" ] && continue
  name=$(basename "$dir"); [ "$dir" = "." ] && name=$(basename "$PWD")
  printf '# %s\n\nTODO: describe the purpose of this folder, its key files, and any conventions.\n' "$name" > "$dir/CLAUDE.md"
  created+=("$dir/CLAUDE.md")
done < <(find . \( -name node_modules -o -name .git -o -name .claude \) -prune -o -type d -print)
if [ ${#created[@]} -gt 0 ]; then
  echo "Created stub CLAUDE.md files (replace the TODO with a real description): ${created[*]}" >&2
  exit 2
fi
