#!/usr/bin/env bash
# PostToolUse (Write|Edit) hook: validate a blog post's frontmatter `date`.
#
# Why: lib/posts.ts `toMeta()` throws on a non-ISO date, but only at
# `pnpm build` — far from where the edit happened. Posts are also sorted by
# STRING comparison of this field, so a dotted/non-padded date silently
# corrupts ordering, hero selection, pagination and prev/next. This surfaces
# the problem at edit time. Exit 2 + stderr feeds the reason back to Claude.

set -euo pipefail

input=$(cat)
file=$(printf '%s' "$input" | jq -r '.tool_input.file_path // empty')

# Only police MDX posts under content/posts/.
case "$file" in
  *content/posts/*.mdx) ;;
  *) exit 0 ;;
esac

[ -f "$file" ] || exit 0

# Read the `date:` line from the first frontmatter block (between the first
# pair of `---` fences).
date_line=$(awk '
  NR==1 && $0=="---" { infm=1; next }
  infm && $0=="---" { exit }
  infm && /^date:/ { print; exit }
' "$file")

if [ -z "$date_line" ]; then
  echo "Post \"$file\" is missing a frontmatter \`date\`. Add one in ISO format, e.g. date: \"YYYY-MM-DD\" — lib/posts.ts throws at build without it." >&2
  exit 2
fi

# Strip `date:`, surrounding whitespace, and optional single/double quotes.
value=$(printf '%s' "$date_line" | sed -E 's/^date:[[:space:]]*//; s/^["'\'']//; s/["'\'']$//')

if ! printf '%s' "$value" | grep -Eq '^[0-9]{4}-[0-9]{2}-[0-9]{2}$'; then
  echo "Post \"$file\" has an invalid frontmatter date \"$value\". Use ISO format YYYY-MM-DD (zero-padded). lib/posts.ts sorts by string comparison of this field and throws at build otherwise." >&2
  exit 2
fi

exit 0
