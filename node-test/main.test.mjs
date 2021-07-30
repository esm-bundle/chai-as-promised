describe("@esm-bundle/chai-as-promised", () => {
  it("can load the esm bundle without dying", () => {
    return import("../esm/index.js");
  });
});
