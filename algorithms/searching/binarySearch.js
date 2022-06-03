// Original Solution
function binarySearch(arr, value) {
  let middle = Math.floor((low + high) / 2);
  let low = 0;
  let high = arr.length - 1;
  while (arr[middle] !== value && low <= high) {
    if (value < arr[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
    middle = Math.floor((low + high) / 2);
  }
  if (arr[middle] === value) {
    return middle;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 2));

// Refactored Version
function binarySearchRf(arr, value) {
  var low = 0;
  var high = arr.length - 1;
  var middle = Math.floor((low + high) / 2);
  while (arr[middle] !== value && low <= high) {
    if (value < arr[middle]) high = middle - 1;
    else low = middle + 1;
    middle = Math.floor((low + high) / 2);
  }
  return arr[middle] === value ? middle : -1;
}

//console.log(binarySearchRf([2,5,6,9,13,15,28,30], 103))
