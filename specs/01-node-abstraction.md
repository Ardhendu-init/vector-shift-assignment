# Part 1 — Node Abstraction

## Goal

Refactor duplicated workflow node implementations into a reusable architecture.

The current implementation likely contains repeated logic across node components.

This should be replaced with a maintainable reusable abstraction.

---

## Functional Requirements

Create reusable node architecture supporting:

- configurable title
- configurable content/body
- configurable input handles
- configurable output handles
- configurable dimensions
- shared layout/styling
- extensibility for future node types

---

## Existing Nodes To Refactor

Refactor existing nodes:

- InputNode
- OutputNode
- LLMNode
- TextNode

Requirements:

- preserve current behavior
- preserve compatibility with current node registration
- avoid breaking graph interactions

---

## New Demonstration Nodes

Create 5 new example nodes to prove flexibility.

Suggested examples:

- APINode
- DelayNode
- TransformNode
- MergeNode
- ConditionNode

Rules:

- functionality can be minimal
- architecture matters more than business logic

---

## Architecture Expectations

Preferred approach:

Reusable BaseNode component.

Possible structure:

frontend/src/components/
BaseNode.js
NodeHandles.js

frontend/src/nodes/
InputNode.js
OutputNode.js
TextNode.js
LLMNode.js
APINode.js
DelayNode.js
TransformNode.js
MergeNode.js
ConditionNode.js

---

## Constraints

- JavaScript only
- avoid overengineering
- prefer composition over duplication
- keep implementation understandable
- do not rewrite unrelated architecture

---

## Acceptance Criteria

- duplicated node code significantly reduced
- all existing nodes still function
- 5 additional nodes added
- adding future nodes becomes easy
- application compiles without errors
