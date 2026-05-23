# Validation Checklist

## Part 1 — Node Abstraction

- [x] InputNode refactored
- [x] OutputNode refactored
- [x] LLMNode refactored
- [x] TextNode refactored
- [x] duplicated code reduced
- [x] 5 additional nodes added
- [x] graph interactions still work

---

## Part 3 — Text Node

- [x] hello → 0 handles
- [x] {{name}} → 1 handle
- [x] {{name}} {{email}} → 2 handles
- [x] {{name}} {{name}} → 1 handle
- [x] {{123abc}} → 0 handles
- [x] removing variable removes handle
- [x] node auto resizes

---

## Part 4 — Backend

- [x] submit sends nodes
- [x] submit sends edges
- [x] backend receives payload
- [x] node count correct
- [x] edge count correct
- [x] DAG detection works
- [x] cyclic graph returns false
- [x] frontend alert shown

---

## UI

- [x] nodes visually polished
- [x] buttons improved
- [x] typography improved
- [x] spacing consistent
- [x] interface looks cohesive

---

## Final Submission

- [x] frontend runs
- [x] backend runs
- [ ] no console errors
- [ ] no runtime errors
- [x] clean folder structure
- [ ] submission ready
