// constant runtime 

const constantRuntime = array => {
  console.log(array[0]);
};

constantRuntime([1, 2, 3, 4, 5]);

// function has constant runtime because
// even if the element number of the array 
// increases => the runtime will be the same
// because we only return the first element

// Big O Notation: O(1)




// linear runtime 

const linearRuntime = array => {
  return array.map(element =>
    console.log(element));
};

// function has linear runtime because
// when the element number of the array 
// increases => the runtime will linear
// increase because we return then more and more
// elements with the function

// Big O Notation: O(n)




// exponential runtime

const exponentialRuntime = array => {
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      console.log(array[i] + array[j]);
    }
  }
};

exponentialRuntime([1, 2, 3]); // 9 pairs logged
exponentialRuntime([1, 2, 3, 4]); // 16 pairs logged
exponentialRuntime([1, 2, 3, 4, 5]); // 25 pairs logged

// function has exponential runtime because
// in the first loop we loop through the array
// and in the second loop we loop through the array 
// again and logging every possible pair out (pair from the element 
// of the first loop) => these type of function we 
// should try to avoid because the runtime get's exponential

// Big O Notation: O (n^2)
