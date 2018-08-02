var words = ["ground", "control", "to", "major", "tom"];

var map = function(items, transformer) {
  var output = [];
  items.forEach(function(item) {
    output.push(transformer(item));
  });
  console.log(output);
};

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

/*

[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

*/