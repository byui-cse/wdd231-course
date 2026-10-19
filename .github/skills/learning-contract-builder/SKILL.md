---
name: learning-contract-builder
description: 'Use when a WDD 231 student needs to write their next weekly learning contract (contracts/cN.md) for a competency-based course. Triggers: "next learning contract", "new contract", "weekly contract", "write my contract", "competency contract", "contract for this week". Reviews existing contracts and peer reviews to see what has been mastered, rolls forward anything not yet passed off, and builds the next contract from the recommended 10-contract path and the WDD 231 competency guide.'
---

# Learning Contract Builder

## When to Use

The student needs a new file `contracts/c{N}.md` for the upcoming week. This
skill reads what already exists in `contracts/` and `reviews/`, decides what
the student still owes from prior weeks, and drafts the next contract using
the recommended path as a starting point.

## Inputs to read every time

1. Every file in `contracts/` (e.g. `c1.md`, `c2.md`, ...), read in numeric order.
2. Every file in `reviews/` (e.g. `r1.md`, ...), read in numeric order.
3. [references/competencies.md](./references/competencies.md) — the WDD 231
   competency guide (indicators and proficiency bar per competency).
4. [references/recommended-path.md](./references/recommended-path.md) — the
   recommended 10-contract path, including per-contract slices/outcome/evidence
   and the "How to adapt this path" rules.
5. [assets/contract-template.md](./assets/contract-template.md) — blank section
   structure to fill in. Also read `contracts/c1.md` in the workspace as a
   fully worked example of tone, first-person voice, and level of detail.

If the reference docs feel stale (course pages have changed), refetch
`https://byui-cse.github.io/wdd231-course/resources/competencies/` and
`https://byui-cse.github.io/wdd231-course/ponder/recommended-11-contract-path/`
and update the two reference files.

## Procedure

### 1. Determine where the student is

- Count existing contracts → `N`. The next contract is `c{N+1}.md`.
- For each review file, extract: competency, slices reviewed, **peer review
  status**, **competency pass-off result**, **my next step**, and unresolved
  investigation findings or questions.
- Build a "carry-forward" list: any slice tied to a result of `Not yet`,
  `Pass with next step`, or a status of `More peer review needed`, plus its
  recorded next step. These are not optional extras — they must be addressed
  in the new contract, either as the primary focus or folded in alongside a
  new slice.
- Include unresolved investigation findings in the carry-forward list even
  when the peer review is complete. Address them within a focused scope; do
  not imply that peer review certifies the whole competency.
- If the most recent contract has no matching review yet, ask the student
  whether that week's review already happened (informally) before assuming
  it's unresolved.

### 2. Find the matching stage in the recommended path

- The path has 10 contracts. Default mapping is contract number = `N+1`.
- If `N+1 > 10`, there is no fixed next stage: pick the competency from
  `references/competencies.md` with the weakest or oldest evidence (based on
  reviews), or deepen the optional performance/deployment competency.
- Read that contract's **Competency slices**, **Suggested outcome**, and
  **Suggested evidence** in `references/recommended-path.md` as the starting
  point — not a rigid requirement.

### 3. Adapt the path stage using the "How to adapt" rules

Apply these from `references/recommended-path.md` before finalizing scope:

- Comfortable/mastered already → combine the path stage with a harder
  supporting slice instead of repeating easy ground.
- Genuinely new/hard → narrow to a smaller slice of that stage and point to
  the suggested resources.
- Blocked by an API, deployment, or team dependency → write a temporary
  contract around the underlying skill rather than stalling.
- Evidence shows **not yet proficient** on a prior slice → repeat it with a
  new context or deeper application instead of silently moving on. Fold the
  carry-forward list from Step 1 in here explicitly.

The result should still be a **focused, assessable slice** — not a full
competency, and not just a checklist copy of the path page.

### 4. Decide whether to extend the current project or start a new one

This is a judgment call, not a rule of thumb — do not default to always
extending or always starting fresh:

- Extend the current project when the carry-forward "next step" says to
  continue it, or when the next stage's slices are a natural continuation
  (e.g. adding data-driven rendering to last week's static page shell).
- Start something new when the prior project reached a natural stopping
  point, when the next stage needs a different kind of artifact/context to
  be meaningfully assessed, or when continuing would make the evidence too
  entangled with old code to isolate the new slice.
- If it's genuinely unclear, ask the student rather than guessing.

### 5. Draft the contract

- Use [assets/contract-template.md](./assets/contract-template.md) for
  section structure, matching the voice and specificity of `contracts/c1.md`.
- Fill in:
  - **Primary competency** — name it, then list only the specific slices in
    scope this week (from Steps 2–4), same style as c1.md's bullet list.
  - **My starting point** — grounded in what prior contracts/reviews actually
    showed, not generic.
  - **Question guiding my learning** — propose one question within the selected
    slices, grounded in prior reviews, unresolved difficulties, and the starting
    point. Focus on behavior the student cannot yet explain, predict, or adapt.
    If the evidence does not establish their uncertainty, ask the student what
    they want to understand; do not invent a personal difficulty. For a new topic,
    a question about behavior they want to understand is appropriate.
  - **My learning plan** — ordered steps, referencing suggested resources
    from `references/recommended-path.md` when relevant. Include meaningful
    challenges related to the slices and guiding question. Plan for the student
    to predict before testing, observe, investigate surprises, verify changes
    and normal behavior, and try another relevant variation before peer review.
  - **Evidence of learning** and readiness checklist — adapted from the
    stage's "Suggested evidence" plus anything needed to close out a
    carry-forward item. Include brief investigation notes (challenge, prediction,
    observation, change or learning, verification, remaining uncertainty) and
    readiness to answer the guiding question using evidence and explain the
    limits of the checks. Success is not measured by the number of failures;
    checks that succeed can provide useful evidence too.
  - **Support and risks**, **AI use** — keep the same sections/tone as c1.md.
- Draft predictions and investigations as work the student will undertake.
  Do not invent the student's predictions, observations, discoveries, or completed
  verification results. The agent may suggest challenges; the student makes
  their predictions and interprets the evidence.
- Use the current template's new sections even when an older `c1.md` omits them.
- Set the target review date and student name consistent with prior contracts
  unless told otherwise.
- Save as `contracts/c{N+1}.md`.

### 6. Confirm

Before finishing, summarize for the student: which path stage this maps to,
which carry-forward items were rolled in and why, and the extend-vs-new-project
decision. Ask them to confirm or adjust before treating the contract as final.
