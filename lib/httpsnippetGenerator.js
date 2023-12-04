"use strict";

const util = require("util");

const { HTTPSnippet } = require("@readme/httpsnippet");
const harGenerator = require("./harGenerator");

async function generate(target, client, data) {
  try {
    const request = await harGenerator.generate(data);
    const snippet = new HTTPSnippet(request);
    return (await snippet.convert(target, client)) || "";
  } catch (ex) {
    console.warn("Error generating code sample using httpsnippet for", target, client);
    if (data?.options?.verbose) console.warn(util.inspect(ex, { depth: null }));
    return "";
  }
}

module.exports = {
  generate,
};
