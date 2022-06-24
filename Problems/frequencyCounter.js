//Given two string write a function to determine if the second string is an anagram.
//An anagram is a word, phrase formed by rearranging the leters of another,
//such as cinema formed from iceman
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const hash = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    hash[letter] ? (hash[letter] += 1) : (hash[letter] = 1);
  }
  console.log(hash);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!hash[letter]) {
      return false;
    } else {
      hash[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagarams');

//white a function called same, which accepts two arrays.
//The function should return tre if every value in the array
//has it's corresponding value squaree in the decond array.
//The frequency of value must be the same.
//ie. same([1,2,3] , [4,1,9]) // True
//ie. same([1,2,3] , [1,9]) // False
//ie. same([1,2,1] , [4,4,1]) // False (must be of the same frequency)

/*
  function same(arr1, arr2){
      if(arr1.length !== arr2.length){
          return false;
      }
      for(let i = 0; i < arr1.length; i++){
          let correctIndex = arr2.indexOf(arr1[i] ** 2)
          if(correctIndex === -1) {
              return false;
          }
          console.log(arr2);
          arr2.splice(correctIndex,1);
      }
      return true;
  }
  
  same([1,2,3,2], [9,1,4,4])
  */
/*
  function same(arr1, arr2){
      if(arr1.length !== arr2.length){
          return false;
      }
      let frequencyCounter1 = {}
      let frequencyCounter2 = {}
      for(let val of arr1){
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
      }
      for(let val of arr2){
          frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
      }
      console.log(frequencyCounter1);
      console.log(frequencyCounter2);
      for(let key in frequencyCounter1){
          if(!(key ** 2 in frequencyCounter2)){
              return false
          }
          if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
              return false
          }
      }
      return true
  }
  //same([1,2,3,2], [9,1,4,4])
  //same([1,2,3,2,5], [9,1,4,4,11])
  */
