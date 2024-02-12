let arr = [1, 27, 4, 5, 6, 8, 7, 9, 41]
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr);
