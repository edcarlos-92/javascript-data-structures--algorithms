/**
 * @param {string} digits
 * @return {string[]}
 */
// prettier-ignore


const letterCombinations = (digits) =>{
  if (digits.length === 0) return [];
  //global result
  const result= [];
  //Alphabet Hash Map
  const alphabets = {
    '2':'abc',
    '3':'def',
    '4':'ghi',
    '5':'jkl',
    '6':'mno',
    '7':'pqrs',
    '8':'tuv',
    '9':'wxyz'
  };
  //dfs recursive helper
  const dfs =(index,digits,slate)=>{
    //base case
    if(index === digits.length){
      result.push(slate.join(''));
      return;
    }
  //dfs recursive case
  let chars = alphabets[digits[index]]
  for (let char of chars){
    //for(let i = 0; i< chars.length; i++){
      slate.push(char);
      dfs(index + 1, digits, slate);
      slate.pop();
  }
}
  dfs(0,digits,[]);
  return result;
}










 const letterCombinations_ = function(digits) {
    if (digits.length === 0) return [];
    let result = [''];
    let mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    bfs(result, 0, digits, mapping, true);
    return result;
  };
  
  const bfs = function (result, index, digits, mapping, lead) {
    if (result.length === 0 || index === digits.length) return;
    let tmp = result.pop();
    let chars = mapping[digits[index]];
    bfs(result, index, digits, mapping, false);
    for (let i = 0; i < chars.length; i++) result.push(tmp + chars[i]);
    if (lead) bfs(result, index + 1, digits, mapping, true);
  };


/*
  Complexity:

Time complexity :
Space complexity :
*/