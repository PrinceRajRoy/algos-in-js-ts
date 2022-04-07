
// Recursion Version
function bubbleSort1(arr, current = 0) {
  if (arr.length === current) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      arr[i] += arr[i + 1];
      arr[i + 1] = arr[i] - arr[i + 1];
      arr[i] -= arr[i + 1];
    }
  }
  return bubbleSort1(arr, current + 1);
}

// Loop Version
function bubbleSort2(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        arr[i] += arr[i + 1];
        arr[i + 1] = arr[i] - arr[i + 1];
        arr[i] -= arr[i + 1];
      }
    }
  }
  return arr;
}

const result1 = bubbleSort1([5, 1, 4, 2, 8, 0, 1, 23]);
const result2 = bubbleSort2([4, 9, 78, 41, 2, 23]);