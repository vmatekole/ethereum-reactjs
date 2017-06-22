// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by highlight.js.js.
import { name as packageName } from "meteor/seedbloom:highlight.js";

// Write your tests here!
// Here is an example.
Tinytest.add('highlight.js - example', function (test) {
  test.equal(packageName, "highlight.js");
});
