function sumZero(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0) {
        console.log(`Current number`, nums[i]);
        return [nums[i], nums[j]];
      }
    }
  }
}
let data = [-3, -2, -1, 0, 1, 2, 3];
console.log(sumZero(data));

//Best Case with multiple pointers
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
