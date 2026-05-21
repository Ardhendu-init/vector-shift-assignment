# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Part 1 complete — Node Abstraction done

## Current Goal

- Begin Part 2: Styling — apply unified, polished UI design across all components

## Completed

- Read and understood the full assessment PDF (4 parts)
- Read project context spec and node abstraction spec
- Created `frontend/src/components/BaseNode.js` — reusable base component accepting `title`, `inputs[]`, `outputs[]`, `children`, `width`, `minHeight`
- Refactored `InputNode`, `OutputNode`, `LLMNode`, `TextNode` to use `BaseNode` — all duplicated layout/handle code eliminated
- Created 5 new nodes: `APINode`, `DelayNode`, `TransformNode`, `MergeNode`, `ConditionNode`
- Registered all 9 node types in `ui.js` (`nodeTypes` map)
- Added all 9 nodes to `toolbar.js` as draggable items

## In Progress

- Nothing currently

## Next Up

1. Part 2 — Styling: design unified visual language for nodes, toolbar, canvas, and submit button
2. Part 3 — Text Node Logic: auto-resize textarea; parse `{{ variable }}` → dynamic left-side Handles
3. Part 4 — Backend Integration: wire `submit.js` → `POST /pipelines/parse`; DAG check in `main.py`; alert with result

## Open Questions

- What styling approach to use? (plain CSS modules vs. Tailwind vs. styled-components) — decide when starting Part 2

## Architecture Decisions

- `BaseNode` in `frontend/src/components/BaseNode.js` — accepts `inputs` and `outputs` as arrays of `{ id, style? }` objects; renders `Handle` components from reactflow; `children` is the node body
- Each node file is a thin wrapper — only owns its local state and passes config to `BaseNode`
- New nodes follow the same pattern: import `BaseNode`, define handles as arrays, put fields in children
- DAG check on backend (Python): topological sort (Kahn's algorithm or DFS)

## File Structure (Part 1 result)

```
frontend/src/
  components/
    BaseNode.js          ← new: shared node shell
  nodes/
    inputNode.js         ← refactored
    outputNode.js        ← refactored
    llmNode.js           ← refactored
    textNode.js          ← refactored
    apiNode.js           ← new
    delayNode.js         ← new
    transformNode.js     ← new
    mergeNode.js         ← new
    conditionNode.js     ← new
  ui.js                  ← updated: 9 nodeTypes registered
  toolbar.js             ← updated: 9 draggable nodes
```

## Assessment Parts Summary

### Part 1 — Node Abstraction ✅
- `BaseNode` eliminates all duplicated wrapper/handle code
- 4 existing nodes refactored, behavior preserved
- 5 new nodes added and working

### Part 2 — Styling
- No significant styling currently applied
- Task: design a unified, appealing UI; any React styling library is allowed

### Part 3 — Text Node Logic
- File: `frontend/src/nodes/textNode.js`
- Task A: auto-resize width/height of node as user types
- Task B: parse `{{ varName }}` from text input → dynamically render a new left-side Handle per variable (valid JS variable names only)

### Part 4 — Backend Integration
- Frontend file: `frontend/src/submit.js`
- Backend file: `backend/main.py`, endpoint: `POST /pipelines/parse`
- Task: send `{ nodes, edges }` on button click → backend returns `{ num_nodes: int, num_edges: int, is_dag: bool }` → display user-friendly alert

## Session Notes

- Run frontend: `cd frontend && npm i && npm start`
- Run backend: `cd backend && uvicorn main:app --reload`
- Implementation order per spec: Node abstraction → Text node → Backend integration → UI polish
