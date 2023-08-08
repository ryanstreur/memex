import { describe, it, expect } from "vitest";
import {
  Identified,
  MxKnowledgeGraph,
  MxEdge,
  MxNode,
  MxRelationship,
  identify,
} from "./model";

describe("data model", () => {
  it("should pass", () => true);

  describe("identify()", () => {
    it("should add a uuid to the ID field of an entity if that field is empty", () => {
      const testObject: Identified = {
        id: "",
      };
      identify(testObject);
      const out = testObject.id;
      // TODO: Maybe come up with a better proxy for uuid detection
      expect(out).not.toBe("");
      expect(out.length).toBeGreaterThan(0);
    });

    it("should not change an existing ID", () => {
      const testObject: Identified = {
        id: "existingID",
      };

      identify(testObject);
    });
  });

  describe("KnowledgeGraph", () => {
    describe("relate", () => {
      it.skip("should not modify an existing relationship", () => {
        expect(true).toBe(false);
      });
      it("should create a new edge and store it in the edges list", () => {
        const sNode = new MxNode("a", "Source Node", "");
        const tNode = new MxNode("b", "Target Node", "");
        const rel = new MxRelationship("c", "related to");

        const graph = new MxKnowledgeGraph(
          "a",
          { a: sNode, b: tNode },
          { c: rel },
          []
        );

        graph.relate(sNode, tNode, rel);

        expect(graph.edges.length).toBe(1);
        const newEdge = graph.edges[0];
        expect(newEdge.source).toBe(sNode);
        expect(newEdge.target).toBe(tNode);
        expect(newEdge.relationship).toBe(rel);
      });
    });

    describe("getEdges", () => {
      it("should return all nodes which are connected to the query node, but no others", () => {
        const node1 = new MxNode("a", "Source Node", "");
        const node2 = new MxNode("b", "Target Node", "");
        const node3 = new MxNode("c", "Target Node", "");
        const rel = new MxRelationship("c", "related to");
        const edge1 = new MxEdge("1", node1, node2, rel);
        const edge2 = new MxEdge("2", node1, node3, rel);
        const edge3 = new MxEdge("3", node2, node3, rel);
        const edge4 = new MxEdge("4", node2, node1, rel);

        const graph = new MxKnowledgeGraph(
          "graph",
          { a: node1, b: node2, c: node3 },
          { c: rel },
          [edge1, edge2, edge3, edge4]
        );

        const out = graph.getEdges(node1);

        expect(out).to.include(edge1);
        expect(out).to.include(edge2);
        expect(out).to.include(edge4);

        expect(out).not.to.include(edge3);
      });
    });
  });
});
