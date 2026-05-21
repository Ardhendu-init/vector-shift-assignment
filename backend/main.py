from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Pipeline(BaseModel):
    nodes: list[Any]
    edges: list[Any]


def check_is_dag(nodes, edges):
    graph = {node["id"]: [] for node in nodes}
    for edge in edges:
        src = edge.get("source")
        tgt = edge.get("target")
        if src in graph:
            graph[src].append(tgt)

    WHITE, GRAY, BLACK = 0, 1, 2
    color = {node_id: WHITE for node_id in graph}

    def dfs(node):
        color[node] = GRAY
        for neighbor in graph.get(node, []):
            if neighbor not in color:
                continue
            if color[neighbor] == GRAY:
                return False
            if color[neighbor] == WHITE and not dfs(neighbor):
                return False
        color[node] = BLACK
        return True

    return all(dfs(node) for node in graph if color[node] == WHITE)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": check_is_dag(pipeline.nodes, pipeline.edges),
    }
