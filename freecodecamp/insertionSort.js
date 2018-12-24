function insertionSort(array) {
  let n = array.length;

  function _swap(i1, i2) {
    let tmp = array[i1];
    array[i1] = array[i2];
    array[i2] = tmp;
  }

  function _insertion(start) {
    for (let i = start; i > 0; i--) {
      if (array[i - 1] > array[i]) _swap(i-1, i)
    }
    if (start < n-1) _insertion(start + 1);
  }

  _insertion(1)
  return array;
}
