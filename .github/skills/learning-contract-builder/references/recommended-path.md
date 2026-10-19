# Recommended 10-Contract Path (cached)

Source: https://byui-cse.github.io/wdd231-course/ponder/recommended-11-contract-path/
Refetch and update this file if it looks outdated.

## When to use this path

You are free to choose your own route through the competencies. If unsure
what to study next, use this recommended path as a starting point. It assumes
one learning contract per week for 10 weeks. Each contract targets a
manageable group of competency slices. The path is cumulative: early
contracts establish a foundation, middle contracts add application and
interaction, later contracts focus on quality, collaboration, and delivery.

A contract may:
- target one slice of a competency,
- combine related slices from several competencies, or
- revisit an earlier competency at a deeper level.

The goal is to visit every competency and its major parts by the end of the
path, not to complete 10 unrelated assignments.

## At a glance

1. Project setup and semantic page structure — Responsive CSS, keyboard access, basic DOM event
2. JavaScript, DOM, and events — Data-driven rendering and modules
3. Responsive CSS and inclusive visual design — Semantic HTML and interaction feedback
4. APIs and asynchronous programming — Data-driven rendering and error states
5. Application state and persistence — JavaScript structure and validation
6. Navigation and interaction — URL parameters, multi-page flows, and accessible state
7. SEO and accessibility review — Inclusive visual design and content structure
8. Work and communicate like a teammate — Integration, decision records, and code review
9. Integrate and verify your learning — Debugging, refactoring, and AI verification
10. Performance and deployment (optional extension) — Full-project integration and professional delivery

Debugging and responsible AI-assisted development are practiced in every
contract rather than saved for one week. Contract 9 provides extra time to
consolidate those practices across the project.

## Contract 1: Establish a sound foundation

Slices: project setup and build familiarity; semantic HTML structure;
headings, landmarks, navigation, forms, labels, buttons, and meaningful
links; a first slice of keyboard accessibility; mobile-first CSS foundation;
one basic DOM event.

Outcome: run the project locally, create a semantic readable page shell
(header, nav, main, footer), move through controls with a keyboard, use one
JS event for a focused DOM update.

Evidence: working page from documented command; explanation of semantic
elements chosen; narrow/wide viewport checks; keyboard walkthrough;
explanation of the event and DOM element it changes.

## Contract 2: Make the page data-driven

Slices: JS variables, functions, arrays, objects; DOM selection and
rendering; click/input/submit/change events; data-driven repeated content;
module imports/exports; separation of data/rendering/event-handling.

Outcome: represent repeated content as data, render with reusable functions,
organize code into modules with clear responsibilities.

Evidence: an array/object of repeated content; a rendering function; a
second data item added without duplicating markup; explanation of module and
function boundaries.

Resources: Practice with JSON, Practice with the DOM (byui-cit learning-modules).

## Contract 3: Improve responsive and inclusive presentation

Slices: Flexbox/Grid layout; mobile-first responsive behavior; typography,
spacing, visual hierarchy; custom properties and organized shared/component
styles; resilient handling of long text/different images; color contrast and
readable text sizing; reflow/zoom/text enlargement; motion and touch-target
considerations.

Outcome: responsive layout readable/usable at different viewport sizes;
explain how spacing/typography/contrast/layout choices support inclusive use.

Evidence: screenshots/demo at narrow and wide widths; a contrast check and
explanation of any correction; a reflow or zoom check; one responsive
problem documented diagnosis-to-fix; explanation of why a layout method was
selected. "Looks good on my screen" is not sufficient evidence.

## Contract 4: Integrate an API

Slices: `fetch` and `async`/`await`; response status and JSON handling; data
transformation and rendering; loading/empty/error states; network inspection
and safe environment handling.

Outcome: retrieve data from a documented API, transform and render it,
provide feedback during loading/empty/error conditions.

Evidence: a working API feature; network request/response inspection; tests
for success/empty/failure; explanation of async request flow; a note on how
secrets/environment configuration are handled.

Resources: Fetch Basics, Practice with APIs (byui-cit learning-modules).

## Contract 5: Add application state and persistence

Slices: identifying/managing interface state; keeping state changes
reflected in the DOM; saving/retrieving data with `localStorage`; validating
missing/malformed/outdated values.

Outcome: manage a meaningful piece of interface state and persist it when
appropriate; explain where state lives, what changes it, and behavior when
stored data is missing/invalid.

Evidence: a user flow that changes state; persistence demonstrated after
refresh; a test using missing/malformed stored data; explanation of state
transitions and validation approach.

Resource: localStorage Practice (byui-cit learning-modules).

## Contract 6: Connect navigation and interaction flows

Slices: URL search parameters and multi-page navigation; identifier
validation; detail retrieval/selection; handling missing/invalid URLs; open
and closed interaction states; synchronized visual/keyboard/ARIA state;
Escape/focus/click-away behavior.

Outcome: connect a user flow across navigation and interface interaction —
link collection view to detail view via URL parameter, handle invalid
context, build one accessible open-close interaction with clear state.

Evidence: working list-to-detail flow; direct visit to detail URL after
refresh; tests for valid/missing/unknown identifiers; explanation of how the
parameter controls data flow; a working menu/modal/accordion; keyboard
demonstration and explanation of synchronized state; reuse of interaction
logic across pages/instances.

Resource: URL Parameters (byui-cit learning-modules).

## Contract 7: Review SEO and accessibility

Slices: page titles and descriptions; heading hierarchy and meaningful link
text; image alternatives and content structure; WCAG-informed semantic and
visual checks; contrast, focus, reflow, and keyboard review.

Outcome: audit a key page for SEO and accessibility concerns, make
prioritized improvements, explain how changes help users and search engines.

Evidence: audit checklist/tool results before changes; a prioritized list of
issues; the improved page; a second check showing what changed; explanation
of how at least one change relates to a WCAG principle.

Resources: WDD 231 Competency Guide; WebAIM keyboard accessibility checklist.

## Contract 8: Work and communicate like a teammate

Slices: breaking work into tasks with a definition of done; progress/blocker/
integration communication; technical decision records; specific/respectful
code review; integrating team changes while maintaining quality.

Outcome: contribute a well-scoped piece of work to a team, communicate
status/risks, explain an important technical decision, give/apply actionable
review feedback.

Evidence: an issue/task/milestone with a clear completion condition; a role
or contribution summary; one decision record with alternatives and
rationale; a code review or feedback exchange; evidence of successful
integration and resolution of one conflict/dependency.

May be completed individually if a team project is unavailable, using a peer
review or simulated project handoff.

## Contract 9: Integrate and verify your learning

Cross-cutting: debugging and evidence-based troubleshooting; refactoring for
clarity/maintainability; independent testing/regression checking;
responsible AI-assisted development, when used.

Outcome: review the project as a whole, investigate a real problem with
evidence, improve one area for clarity/maintainability, explain how the
result was verified. If AI used, account for and defend that use.

Evidence: a project quality review with prioritized improvements; a bug
report with expected/actual behavior; evidence gathered during
investigation; the initial hypothesis and how it changed, if applicable; the
fix/refactor/verification steps; an AI-use and verification note, when
applicable.

## Contract 10: Deliver a reliable project (optional extension)

Slices: performance checks and image/network improvements; lint/build/preview
workflows; deployment and production verification; recognizing local-vs-
production differences; investigating an incorrect asset path, missing
env var, or build failure; integration of earlier competency evidence.

Outcome: prepare and deploy a working project, use a measurement/quality
check to identify one improvement, verify the deployed result, explain the
tradeoff behind the change.

Evidence: successful lint/build/preview results; a performance or production
issue identified with evidence; a documented improvement; a deployed URL
tested outside local dev; explanation of one production-specific problem or
decision.

Resources: project's existing build/deployment instructions; Lighthouse docs.

## How to adapt this path

Use this sequence as a default, then adjust through your contracts:
- If a competency is already comfortable, combine its contract with a more
  challenging supporting slice.
- If a competency is new, spend the contract on a smaller slice and use the
  prepared practice materials.
- If a project is blocked by an API, deployment issue, or team dependency,
  write a temporary contract around the underlying skill rather than waiting.
- If evidence shows a competency is not yet proficient, repeat it with a new
  context instead of moving on automatically.
- If the optional performance/deployment contract is completed early, use the
  time to deepen accessibility, testing, or refactoring.

At the end of the 10 weeks, the student should be able to point to evidence
for every competency in the guide, plus examples of both cross-cutting
practices. Some evidence may come from the same project or contract — that
is expected; professional work often demonstrates several competencies at once.
