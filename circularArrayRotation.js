const circularArrayRotation = (a, k, queries) =>{
    const rotatedArray = a.slice(a.length - k).concat(a.slice(0, a.length - k));
    return queries.map(query => rotatedArray[query]);
}

// input
const a = [1, 2, 3];
const k = 2;
const queries = [0, 1, 2];

// output
console.log(circularArrayRotation(a, k, queries)); // [2, 3, 1]
