---
title: WDD 231 Competency Guide
description: Student reference for choosing a learning-contract competency and defining proficiency.
---

Use this guide when writing a learning contract. Choose one primary competency, then select the indicators that match your current experience and project. You do not need to demonstrate every possible indicator in one contract; your contract should define a focused, assessable slice.

## How to read this guide

The indicators describe what you may practice. The proficiency statement describes the minimum standard for certification at the course level.

- **Emerging:** You can identify the idea and follow a guided example.
- **Developing:** You can apply the idea in a familiar situation with occasional support.
- **Proficient:** You can apply it independently, explain your decisions, test the result, and adapt it to a small change.
- **Advanced:** You can make strong tradeoffs in an unfamiliar situation and help others improve their approach.

For a learning contract, you should aim for at least **Proficient** . A finished feature alone is not enough; you must also provide evidence that you understand and can transfer the skill.

## 1. Semantic and accessible HTML

You may practice:

- Choosing HTML elements according to meaning and structure rather than appearance.
- Creating headings, landmarks, navigation, forms, labels, buttons, and links that make sense to users of assistive technology.
- Supporting keyboard navigation, visible focus, readable text, useful alt text, and appropriate names for interactive controls.
- Checking a page with keyboard-only navigation, browser tools, and an accessibility checker.

You are proficient when you can build or revise a key page flow with semantic markup, apply relevant A11y standards such as WCAG principles, explain why the important elements were chosen, demonstrate a complete keyboard path, and fix the major accessibility issues you discover.

## 2. Responsive CSS and inclusive visual design

You may practice:

- Building a mobile-first layout with Flexbox, Grid, media queries, and relative sizing.
- Creating a consistent visual system with custom properties, spacing, typography, and color choices.
- Handling long text, different images, narrow screens, and wider screens without breaking the layout.
- Organizing styles so that shared rules and component-specific rules are easy to find and change.
- Checking color contrast, readable text sizing, and spacing that supports comprehension and comfortable interaction.
- Testing reflow, zoom, and text enlargement so content remains usable without unnecessary horizontal scrolling.
- Considering motion, animation, and touch-target size as part of an inclusive interface.

You are proficient when your chosen page remains usable at narrow and wide viewport sizes, meets relevant visual A11y expectations such as readable contrast and reflow, and you can explain and verify your layout decisions. You can also diagnose and correct at least one responsive or visual accessibility problem without relying on trial and error alone.

## 3. JavaScript, the DOM, and events

You may practice:

- Using variables, functions, arrays, objects, conditionals, and loops to represent and process information.
- Selecting DOM elements and updating content, attributes, classes, and generated markup.
- Responding to user events such as clicks, input, submit, and change.
- Separating data, rendering, and event-handling responsibilities into understandable functions.

You are proficient when you can implement an interactive feature independently, explain the event-to-DOM flow, handle an unexpected user input, and modify the feature in response to a new requirement.

## 4. Data-driven rendering and modules

You may practice:

- Representing repeated content as arrays or objects rather than duplicating markup.
- Creating reusable rendering functions or templates for repeated UI patterns.
- Splitting code into modules with clear responsibilities and imports/exports.
- Keeping data, application logic, and presentation concerns reasonably separated.

You are proficient when repeated content is generated from data, the module boundaries have a clear purpose, and you can add or change a data item without duplicating a large block of HTML or creating inconsistent behavior.

## 5. APIs and asynchronous programming

You may practice:

- Making requests with `fetch` and using promises or `async`/`await` correctly.
- Reading the response status and converting response data from JSON.
- Representing loading, success, empty, and error states in the interface.
- Keeping secrets out of source code and following the API's documented requirements.
- Inspecting requests and responses with browser developer tools.

You are proficient when you can integrate a documented API, explain the request and response flow, render the returned data, handle failure and empty states, and verify the behavior with more than one test case.

## 6. Application state, navigation, and interaction

You may practice:

- Identifying which information the interface needs to remember during a session.
- Managing state so that changes are reflected consistently in the interface.
- Saving and retrieving appropriate data with `localStorage` when persistence is useful.
- Validating stored data and handling missing, malformed, or outdated values.
- Creating links that carry an identifier or other context in the URL.
- Reading and validating search parameters with browser APIs.
- Fetching or selecting detail data based on the parameter.
- Handling missing, invalid, or unknown parameters with a useful user experience.
- Modeling open and closed states clearly in JavaScript and CSS.
- Keeping visual state, keyboard behavior, and ARIA state synchronized.
- Supporting Escape, focus movement, click-away behavior, or other appropriate interaction details.
- Reusing interaction logic across pages or components.

You are proficient when you can manage a meaningful user flow across interface state, saved state, navigation, or interaction; explain where the state lives and what changes it; handle invalid or missing state; and adapt the flow to a small change while preserving usable keyboard and accessibility behavior.

## 7. SEO

You may practice:

- Providing useful titles, descriptions, headings, links, and other discoverability information.
- Using meaningful page structure and link text to help people and search engines understand the content.
- Checking that metadata, headings, images, and links support the page's purpose.

You are proficient when you can improve the discoverability and structure of a page, explain how your changes help users and search engines, and verify the result with an inspection tool or checklist.

## 8. Collaboration and technical communication

You may practice:

- Breaking work into a useful issue, task, or milestone with a clear definition of done.
- Communicating progress, questions, blockers, and integration needs early.
- Reviewing another person's work with specific, respectful, actionable feedback.
- Recording important decisions, alternatives considered, and reasons for the final choice.
- Integrating team changes without losing quality or ownership of your contribution.

You are proficient when teammates can understand your contribution and decisions, you contribute reliably to an agreed milestone, and you can describe how feedback or integration problems changed the work.

## 9. Optional: Performance and deployment

This competency is an extra opportunity for students who want to extend their project or explore a professional workflow. It may be included in a learning contract when the primary course competencies are already appropriately scoped.

You may practice:

- Checking page performance, image behavior, and unnecessary network or script work.
- Running lint, build, preview, and other project checks consistently.
- Deploying a working site and recognizing differences between local and production environments.
- Investigating a production issue such as an incorrect asset path, missing environment variable, or build failure.

You are proficient when you can run the project's quality and build checks, deploy a working page, use a measurement or test to identify and improve one issue, and explain the tradeoff behind your change.

## Cross-cutting practice: Debugging and evidence-based troubleshooting

You may practice:

- Reproducing a problem and describing the expected and actual behavior.
- Using console output, breakpoints, DOM inspection, network inspection, and incremental experiments.
- Forming a hypothesis about the root cause before changing code.
- Verifying a fix and checking that it did not create a regression.

Use this practice in every contract and pass-off. You are demonstrating it when you can document a problem from symptom to root cause to verified fix, identify the evidence that supported your conclusion, and explain what you would check next if the fix did not work.

## Cross-cutting practice: Responsible AI-assisted development

You may practice:

- Asking AI for explanations, examples, debugging hypotheses, or comparisons between approaches.
- Breaking a large request into smaller questions that you can evaluate.
- Checking AI suggestions against documentation, tests, experiments, and observed behavior.
- Revising or rejecting suggestions that are incorrect, insecure, inaccessible, or inappropriate for the project.
- Explaining the final code and identifying which decisions are your own.

Use this practice whenever AI is involved. You are demonstrating it when you can show what assistance you used, explain what you accepted or rejected and why, independently verify the result, and answer questions about the final implementation without depending on the AI conversation.

## Evidence checklist for any competency

Your contract should identify evidence appropriate to the competency. Strong evidence usually includes:

- A working artifact or meaningful implementation increment.
- A short explanation of the important concepts and decisions.
- At least one test, experiment, measurement, or verification result.
- A bug, limitation, or tradeoff and your response to it.
- A small change or transfer question that you can handle during a walkthrough.

If your evidence only shows that you followed steps or copied a working example, add an explanation, test, or variation that demonstrates ownership and understanding.
