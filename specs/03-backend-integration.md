# Part 4 — Backend Integration

## Goal

Connect React frontend workflow builder with FastAPI backend.

Submit pipeline graph data for validation.

---

## Frontend Requirements

Update submit behavior.

On submit:

send workflow graph data to backend.

Endpoint:

POST /pipelines/parse

Payload:

{
"nodes": [...],
"edges": [...]
}

Requirements:

- async request handling
- error handling
- preserve existing workflow state patterns
- user-friendly result display

---

## Backend Requirements

Update FastAPI endpoint:

/pipelines/parse

Responsibilities:

1. count nodes
2. count edges
3. validate whether graph is DAG

---

## Response Format

Return:

{
"num_nodes": int,
"num_edges": int,
"is_dag": bool
}

Example:

{
"num_nodes": 5,
"num_edges": 4,
"is_dag": true
}

---

## DAG Validation Rules

Valid:

A → B → C

Result:
is_dag = true

Invalid:

A → B → C → A

Result:
is_dag = false

---

## Implementation Expectations

Preferred:

simple DFS cycle detection

Requirements:

- readable implementation
- minimal complexity
- no unnecessary dependencies

---

## Frontend Response Display

After successful response:

display user-friendly alert.

Example:

Pipeline Summary

Nodes: 5
Edges: 4
Valid DAG: Yes

---

## Acceptance Criteria

- submit sends correct payload
- backend receives payload
- node count correct
- edge count correct
- DAG validation correct
- cyclic graph detected
- frontend shows response
