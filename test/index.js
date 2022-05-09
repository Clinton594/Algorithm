const { assert } = require("console");

describe("My Test", function () {
  it("Plain assertion", function () {
    // [1, 2, 3].indexOf(5).should.equal(-1);
    // [1, 2, 3].indexOf(0).should.equal(-1);
    assert(1 === 1);
  });
});
