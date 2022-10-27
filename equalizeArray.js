const equalizeArray = (arr) => {
  // Write your code here
  // Create a hash table to store the frequency of each element
  const hash = {};
  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // If the element is not in the hash table, add it
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      // If the element is in the hash table, increment its value
      hash[arr[i]]++;
    }
  }
  // Create a variable to store the highest frequency
  let highestFrequency = 0;
  // Loop through the hash table
  for (let key in hash) {
    // If the value of the current key is greater than the highest frequency, set the highest frequency to the value of the current key
    if (hash[key] > highestFrequency) {
      highestFrequency = hash[key];
    }
  }
  // Return the length of the array minus the highest frequency
  return arr.length - highestFrequency;
};

let arr = [1, 2, 3, 1, 2, 3, 3, 3];
console.log(equalizeArray(arr))