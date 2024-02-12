const arr = [3, 4, 5, 6, 7, 8, 0]

let start = 0
let end = arr.length - 1



function divide(arr, start, end) {


    if (start < end) {
        let mid = parseInt((start + end) / 2)

        let left = []
        for (let i = 0; i <= mid; i++) {
            left.push(arr[i])
        }
        let ls = 0
        let le = left.length - 1




        let right = []
        for (let i = mid + 1; i <= end; i++) {
            right.push(arr[i])
        }
        let rs = 0
        let re = right.length - 1

        divide(left, ls, le)
        divide(right, rs, re)

        console.log(left);
        console.log(right);
        console.log(arr);

        merge(left, right)


    }



}



// console.log(arr);

divide(arr, start, end) 
