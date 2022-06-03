//Tip = Get the minimun at every iteration and swap
// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let minimun = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minimun] > arr[j]) {
        minimun = j;
      }
    }
    if (i !== minimun) swap(arr, i, minimun);
  }
  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);

// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var minimun = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimun]) {
        minimun = j;
      }
    }
    if (i !== minimun) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[minimun];
      arr[minimun] = temp;
    }
  }
  return arr;
}
