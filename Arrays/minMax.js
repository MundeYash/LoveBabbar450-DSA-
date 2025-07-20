// Brute force approach
function findLargest_Smallest_Brute(arr) {
  // concept : sorting , time :O(n log n ), space : O(1)
  arr = arr.sort((a, b) => a - b);
  let n = arr.length;
  let ans = [];
  ans.push(arr[0]); // smallest element
  ans.push(arr[n - 1]); // largest element
  return ans;
}

// function for finding largset and smallest number in the array
function findLargest_Smallest(arr) {
  let ans = [];
  let mini = arr[0];
  let maxi = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxi) {
      maxi = arr[i];
    }
    if (arr[i] < mini) {
      mini = arr[i];
    }
  }
  ans.push(mini);
  ans.push(maxi);
  return ans;
}
let arr = [1, 23, 401, 100, 10];
console.log("The value of array is :" + arr);

let arr2 = [1, 2, 2, 3, 4, 5, 1, 9, 10, 10];
console.log(arr2);

let ans = findLargest_Smallest(arr2);
console.log("The largest element is " + ans[1]);
console.log("The smallest element is " + ans[0]);

let ans2 = findLargest_Smallest_Brute(arr2);
console.log("The largest element is " + ans2[1]);
console.log("The smallest element is " + ans2[0]);
