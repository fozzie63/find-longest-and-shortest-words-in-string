const assert = require('assert');
const findLongestWord = require('../findLongestWord');
const findShortestWord = require('../findShortestWord');

describe('findLongestWord', function() {
  it('should return "diddle" when the sentence is "Hey, diddle, diddle"', function() {
    assert.equal(findLongestWord("Hey, diddle, diddle"), "diddle");
  });
  it('should return "fiddle" when the sentence is "The cat and the fiddle,"', function() {
    assert.equal(findLongestWord("The cat and the fiddle"), "fiddle");
  });
  it('should return "jumped" when the sentence is "The cow jumped over the moon."', function() {
    assert.equal(findLongestWord("The cow jumped over the moon."), "jumped");
  });
});

describe('findShortestWord', function() {
  it('should return "Hey" when the sentence is "Hey, diddle, diddle"', function() {
    assert.equal(findShortestWord("Hey, diddle, diddle"), "Hey");
  });
  it('should return "The" when the sentence is "The cat and the fiddle,"', function() {
    assert.equal(findShortestWord("The cat and the fiddle"), "The");
  });
  it('should return "The" when the sentence is "The cow jumped over the moon."', function() {
    assert.equal(findShortestWord("The cow jumped over the moon."), "The");
  });
});