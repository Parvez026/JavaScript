function wordFrequency(text) {
  let words = text.toLowerCase().split(" ");
  let feq = {};

  words.forEach((word) => {
    feq[word] = (feq[word] || 0) + 1;
  });

  return feq;
}
let text = "the quick brown fox jumps over the lazy dog the fox is quick";

console.log(wordFrequency(text));
