function secondSmallestLargest_Brute(arr) {
  // concept : sorting , time :O(n log n ), space : O(1), But valid for non duplicates elements only
  let n = arr.length;
  arr = arr.sort((a, b) => a - b);
  let ans = [];
  ans.push(arr[1]); // second smallest element
  ans.push(arr[n - 2]); // second largest element

  return ans;
}

function secondSmallestLargest_Better(arr) {
  // concept : linear traversal twice and comparison ,time :O(n), space :O(1)

  let n = arr.length;

  // step1 : find the largest and smallest element in the array
  let largest = arr[0];
  let smallest = arr[0];

  for (let i = 0; i < n; i++) {
    largest = Math.max(largest, arr[i]);
    smallest = Math.min(smallest, arr[i]);
  }

  // step 2: find the second largest and second smallest by comparing with the largest and smallest element
  let secondLargest = arr[0];
  let secondSmallest = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] < secondSmallest && arr[i] != smallest) {
      secondSmallest = arr[i];
    }

    if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  let ans = [];
  ans.push(secondSmallest);
  ans.push(secondLargest);
  return ans;
}
function secondSmallestLargest_Optimised(arr) {
  // concept :linear traversal and comparison , time : O(n), space : O(1)
  let n = arr.length;
  let smallest = Number.MAX_VALUE;
  let secondSmallest = Number.MAX_VALUE;
  let largest = Number.MIN_VALUE;
  let secondLargest = Number.MIN_VALUE;

  for (let i = 0; i < n; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] != smallest) {
      secondSmallest = arr[i];
    }

    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }

  let ans = [];
  ans.push(secondSmallest);
  ans.push(secondLargest);
  return ans;
}

let arr = [1, 2, 3, 45, 5];
console.log("The value of array is :" + arr);

let ans = secondSmallestLargest_Brute(arr);
console.log("The second smallest element is " + ans[0]);
console.log("The second largest element is " + ans[1]);

let arr2 = [1, 52, 3, 3, 4, 2, 10, 19, 9];
let ans2 = secondSmallestLargest_Better(arr2);
console.log("The second smallest element is " + ans2[0]);
console.log("The second largest element is " + ans2[1]);

let ans3 = secondSmallestLargest_Better(arr2);
console.log("The second smallest element is " + ans3[0]);
console.log("The second largest element is " + ans3[1]);
