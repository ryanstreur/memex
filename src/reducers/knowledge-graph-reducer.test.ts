import { describe, test, expect } from "vitest";
import {
  KgActions,
  emptyGraph,
  knowledgeGraphReducer,
} from "./knowledge-graph-reducer";

describe("knowledgeGraphReducer", () => {
  test("should return original state if action type is unknown", () => {
    const inState = emptyGraph;
    const out = knowledgeGraphReducer(inState, {
      type: KgActions.NOT_IMPLEMENTED,
    });
    expect(out).toBe(emptyGraph);
  });
});
