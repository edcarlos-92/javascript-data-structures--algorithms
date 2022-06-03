//https://www.programiz.com/dsa/quick-sort
//Involves Divide and Conquer with recursions on pivot,less(Left),greater(Right)
function quickSort(arr) {
  if (arr.length < 2) return arr; //Base Case
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i != pivotIndex) {
      arr[i] > pivot ? greater.push(arr[i]) : less.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]; //return copies of all
}
let data = [52, 2, 6, 3, 89, 4, 9, 8, 7];
let uList = [52, 69, 2, 3, 5, 23, 85, 58];
console.log(quickSort(uList));
console.log(quickSort(data));




function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
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
