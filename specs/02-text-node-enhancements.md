# Part 3 — Text Node Enhancements

## Goal

Enhance TextNode with dynamic sizing and intelligent variable parsing.

---

## Feature 1 — Auto Resize

The text input should grow dynamically based on user input.

Requirements:

- expand vertically as content grows
- expand horizontally reasonably for longer text
- maintain minimum usable dimensions
- avoid layout breakage
- resizing should feel natural

Examples:

Short text:
small node

Long multiline text:
larger node

---

## Feature 2 — Variable Parsing

Users can define variables inside text using:

{{variableName}}

Examples:

{{name}}
{{email}}
{{user_input}}

---

## Variable Validation Rules

Valid variables must be valid JavaScript identifiers.

Valid:

{{name}}
{{email}}
{{user_input}}
{{ user }}

Invalid:

{{123abc}}
{{first-name}}
{{hello world}}

Rules:

- support whitespace inside braces
- ignore invalid names
- ignore duplicates

---

## Feature 3 — Dynamic Handles

For every detected variable:

create an input handle on the left side of the node.

Example:

Input:

Hello {{name}} from {{email}}

Expected:

2 input handles:

- name
- email

Behavior:

- handles update live while typing
- removing variable removes handle
- duplicate variables create only one handle

---

## Compatibility

Must remain compatible with:

- BaseNode abstraction
- current workflow graph system

---

## Acceptance Criteria

Input:
hello

Expected:
0 handles

Input:
{{name}}

Expected:
1 handle

Input:
{{name}} {{email}}

Expected:
2 handles

Input:
{{name}} {{name}}

Expected:
1 handle

Input:
{{123abc}}

Expected:
0 handles

Input:
multiline text

Expected:
node resizes naturally
