//https://www.programiz.com/dsa/insertion-sort
//We assume the first element is always sorted so we start from i=1 and have j=i
//If the first element is greater than key, then key is placed in front of the first element.

function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}
console.log(insertionSort([2, 1, 9, 76, 4]));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]; //swap
      } else {
        break;
      }
    }
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);

function insertionSortAlt(arr) {
  let current;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; //current is j now
      j--; //reverse order
    }
    arr[j + 1] = current; //swap the values
  }
  return arr;
}

let data = [5, 8, 6, 98, 23, 225, 4, 7, 93, 4, 52];
console.log(insertionSort(data));
