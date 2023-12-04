"use strict";

const assert = require("assert");
const httpsnippetGenerator = require("../lib/httpsnippetGenerator");

const sampleData = {
  methodUpper: "GET",
  baseUrl: "http://sample.com",
  requiredUriExample: "/books",
  queryParameters: [],
  allHeaders: [],
};

describe("httpsnippetGenerator tests", () => {
  it("should return code snippet", async () => {
    const testData = Object.assign({}, sampleData);
    const expected = "curl --request GET \\\n  --url http://sample.com/books";

    const result = await httpsnippetGenerator.generate("shell", "curl", testData);

    console.assert({ result, expected });
    assert.deepEqual(result, expected);
  });
});
