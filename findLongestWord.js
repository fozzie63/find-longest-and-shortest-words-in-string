module.exports = findLongestWord = (str) => {
  const words = str.replace(/[.,]/g, '').split(' ');
  const longestWord = words.reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
};