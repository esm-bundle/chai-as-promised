describe("@esm-bundle/chai-as-promised", () => {
  it("can load the ESM bundle", () => {
    return import("/base/esm/index.js");
  });

  it("can load the System.register bundle", () => {
    return System.import("/base/system/index.js");
  });
});
