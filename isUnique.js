// Look if every element in array is unique

const isUnique = arr => {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        result = false;
      }
    }
  }

  return result;
};

// Time complexity of O(n^2) which is super slow ( because of double loop)

// better to use caching :


