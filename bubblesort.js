const arr = [2, 4, 6, 3, 1]

let swap = false


for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    for (let j = 0; j < arr.length; j++) {

        // console.log(arr[j], "iiiii");

        if (arr[j] > arr[j + 1]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

            swap = true
        }

        if (swap == false) {
            break
        }

    }
}

console.log(arr);
