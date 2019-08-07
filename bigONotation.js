// constant runtime 

const constantRuntime = array => {
  console.log(array[0]);
};

constantRuntime([1,2,3,4,5]);

// function has constant runtime because
// even if the element number of the array 
// increases => the runtime will be the same
// because we only return the first element

// Big O Notation: O(1)