<!--
  Title format (enforced by CI):
      type(scope): description (PROJ-123)

  type   feat | fix | perf | refactor | docs | test | chore | ci | build | revert
  scope  product area, lowercase — billing, auth, reports
  ticket uppercase prefix + number — required for every type except chore

  chore is housekeeping (deps, tooling, releases) and needs no ticket:
      chore(deps): bump typescript to 5.6

  Only feat / fix / perf / revert appear in release notes and reach QC.
-->

## What changed

<!-- One or two sentences. Assume the reader has not seen the ticket. -->

## Test notes for QC

<!--
  Steps to verify, in the order QC should run them. This is the section
  QC reads during rc verification, so be concrete.

  1. Go to Billing > Exports
  2. Select 3 invoices, click Bulk export
  3. Expect a single CSV containing all 3 rows
-->

## Risk / rollback

<!-- Anything QC should watch for nearby. "None" is a valid answer. -->
