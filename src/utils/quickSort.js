/* eslint-disable no-param-reassign */
const partition = (arr, p, r, valExtract) => {
  const pivotVal = arr[p];
  let lastSwap = p + 1;
  for (let i = p + 1; i <= r; i += 1) {
    if (valExtract(arr, i) < valExtract(arr, p)) {
      const swapVal = arr[lastSwap];
      arr[lastSwap] = arr[i];
      arr[i] = swapVal;
      lastSwap += 1;
    }
  }
  arr[p] = arr[lastSwap - 1];
  arr[lastSwap - 1] = pivotVal;
  return lastSwap - 1;
};
/* eslint-enable no-param-reassign */

function quickSort(arr, pivot, right, valExtract) {
  if (pivot < right) {
    const pivotPos = partition(arr, pivot, right, valExtract);
    quickSort(arr, pivot, pivotPos - 1, valExtract);
    quickSort(arr, pivotPos + 1, right, valExtract);
  }
}

export default function (arr, valExtract = (values, i) => values[i]) {
  const pivot = 0;
  const right = arr.length - 1;
  quickSort(arr, pivot, right, valExtract);
  return arr;
}
