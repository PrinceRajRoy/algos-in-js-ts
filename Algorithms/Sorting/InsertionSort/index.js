
// Recursion Version
function insertionSort1(arr, curr = 1) {
  if (arr.length === curr) {
    return arr;
  }
  const key = arr[curr];
  let j = curr - 1;
  for (; j >= 0 && arr[j] > key; j--) {
    arr[j + 1] = arr[j];
  }
  arr[j + 1] = key;
  return insertionSort1(arr, curr + 1);
}

//Loop Version
function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > key; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
}

const result1 = insertionSort1([56, 10, 1, 35, 0, 4, 30, 7, 15]);
const result2 = insertionSort2([56, 10, 1, 35, 0, 4, 30, 7, 15]);
