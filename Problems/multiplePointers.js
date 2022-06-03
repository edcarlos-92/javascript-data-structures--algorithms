function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);

// Test 1

/*
function sumZeroRf(arr){
    let leftSide =0;
    let rightside = arr.length-1;
  
    while(leftSide<rightside){
      let sum = arr[leftSide] + arr[rightside];
      if(sum === 0){
        return [arr[leftSide] , arr[rightside]];
      }else if (sum>0){
        rightside--;
      }else{
        leftSide++
      }
    }
  }
  
  let data = [-3,-2,-1,0,1,2,3];
  console.log(sumZeroRf(data))
  */
