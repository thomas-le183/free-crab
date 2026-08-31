#!/usr/bin/env bash
#
# Applies branch protection to dev and main.
# Requires ADMIN on the repo. Run once, and again after changing the rules.
#
#   ./scripts/setup-branch-protection.sh [owner/repo]
#
# Note: the merge-method rule (squash into dev, merge-commit into main) is NOT
# enforceable here — GitHub's merge toggles are repo-wide, not per-branch. That
# one stays a convention on the promotion PR.

set -euo pipefail

REPO="${1:-$(gh repo view --json nameWithOwner -q .nameWithOwner)}"
echo "Applying branch protection to $REPO"

protect() {
  local branch="$1" reviews="$2"
  echo "  -> $branch"
  gh api -X PUT "repos/$REPO/branches/$branch/protection" --input - >/dev/null <<JSON
{
  "required_status_checks": { "strict": false, "contexts": ["pr-title"] },
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "required_approving_review_count": $reviews,
    "dismiss_stale_reviews": true,
    "require_last_push_approval": false
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_conversation_resolution": true
}
JSON
}

# dev: every feature PR lands here, so the title lint must gate it.
protect dev 1

# main: only ever receives the dev -> main promotion PR.
protect main 1

echo
echo "Done. Verify with:"
echo "  gh api repos/$REPO/branches/dev/protection  | jq '{checks: .required_status_checks.contexts, reviews: .required_pull_request_reviews.required_approving_review_count}'"
echo "  gh api repos/$REPO/branches/main/protection | jq '{checks: .required_status_checks.contexts, reviews: .required_pull_request_reviews.required_approving_review_count}'"
