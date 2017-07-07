// app/imports/services/util/format.js

function prettyJSON(json) {
  return JSON.stringify(json,undefined,4);
}

export { prettyJSON as prettyJSON };