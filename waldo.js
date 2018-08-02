// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(item, index) {
    if (item === "Waldo") {
      found(index);   // execute callback
    }
  });
}

function actionWhenFound(place) {
  console.log("Found Waldo at index " + place + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);