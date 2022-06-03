function PP(arr, low = 0, high = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let i = low;
  let j = high;
  let pivot = arr[i];

  for (let k = i + 1; k <= j; k++) {
    if (pivot > arr[k]) {
      i++;
      swap(arr, i, k);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, low, i);
  return i;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let i = PP(arr, low, high);
    //low
    quickSort(arr, low, i - 1);
    //high
    quickSort(arr, i + 1, high);
  }
  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
