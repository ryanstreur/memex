import { describe, it, expect } from "vitest";

import { LOCALSTORAGE_KEYS, initializeLocalStorage } from "./persistence";

describe("persistence.ts", () => {
  it("should pass", () => {
    return true;
  });

  describe("initializeLocalStorage", () => {
    it("should set each key to empty object", () => {
      initializeLocalStorage();

      for (const key of LOCALSTORAGE_KEYS) {
        expect(localStorage.getItem(key)).toBe("{}");
      }
    });
  });
});
