function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
//let data = [10,15,20,25,30];
let data = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let n = 10;
linearSearch(data, n);

/*
function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)
*/
