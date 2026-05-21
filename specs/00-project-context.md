# Project Context

## Project

Frontend Technical Assessment

## Product Context

This project is a workflow builder / node-based pipeline editor similar to tools like:

- VectorShift
- LangFlow
- n8n
- Zapier

Users can:

- create workflow nodes
- connect nodes using edges
- define pipeline logic
- submit pipeline data for validation

---

## Tech Stack

Frontend:

- React
- JavaScript
- React Flow (or equivalent node graph library)

Backend:

- Python
- FastAPI

---

## Assignment Goals

The provided starter project needs enhancement across architecture, functionality, and UI.

Required improvements:

1. Refactor duplicated node implementation
2. Build reusable node abstraction
3. Add 5 new node examples
4. Improve TextNode behavior
5. Support dynamic variable parsing
6. Integrate frontend with backend
7. Validate graph structure as DAG
8. Improve overall UI quality

---

## Engineering Principles

All implementation should prioritize:

- maintainability
- readability
- reusable abstractions
- minimal duplication
- simple architecture
- clean React patterns
- compatibility with existing starter code
- professional UI polish

Avoid:

- overengineering
- unnecessary abstractions
- unrelated refactors
- adding complexity without benefit

---

## Working Rules

Before implementation:

- understand existing architecture
- inspect starter code
- identify duplication
- preserve working functionality

Implementation order:

1. Node abstraction
2. Text node enhancements
3. Backend integration
4. UI polish
