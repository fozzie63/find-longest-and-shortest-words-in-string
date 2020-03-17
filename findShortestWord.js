module.exports = findShortestWord = (str) => {
  const words = str.replace(/[.,]/g, '').split(' ');
  const shortestWord = words.reduce(function(shortest, currentWord) {
    return currentWord.length < shortest.length ? currentWord : shortest;
  }, words[0]);
  return shortestWord;
};