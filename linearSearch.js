const linearSearch = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }
    }
    return -1
}

const arr = [-5, 2, 10, 4, 6]
const value = 10

console.log(linearSearch(arr, value));
