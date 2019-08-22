// delete all duplicates in array 

const uniqueSort = (arr) => {
  let result = [];
  let cache = {};
  
  for (let i = 0; i < arr.length; i++) {
  if(!cache[arr[i]]) {
  result.push(arr[i]);
  cache[arr[i]] = true;
  }  
  }
  
  return result.sort((a, b) => a - b);
  };
  
  uniqueSort([1, 1, 1, 5, 7,5,5,5,5]);