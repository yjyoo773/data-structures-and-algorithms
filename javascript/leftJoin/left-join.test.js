const leftJoin = require("./left-join.js");

describe("LEFT JOIN", () => {
  it("should return only the left hashmap if there are none of the keys match", () => {
    let a1 = {
      fond: "a",
      wrath: "a",
      outfit: "a",
      guide: "a",
    };
    let a2 = {
      xfond: "b",
      xguide: "b",
      xwrath: "b",
      xoutfit: "b",
    };
    let expected = {
      fond: ["a", null],
      wrath: ["a", null],
      outfit: ["a", null],
      guide: ["a", null],
    };
    expect(leftJoin(a1, a2)).toEqual(expected);
  });
  it("should return a combined hashmap with keys that match and those that don't be null", () => {
    let a1 = {
      fond: "a",
      wrath: "a",
      outfit: "a",
      guide: "a",
    };
    let a2 = {
      xfond: "b",
      guide: "b",
      wrath: "b",
      xoutfit: "b",
    };
    let expected = {
      fond: ["a", null],
      wrath: ["a", "b"],
      outfit: ["a", null],
      guide: ["a", "b"],
    };
    expect(leftJoin(a1, a2)).toEqual(expected);
  });
});
