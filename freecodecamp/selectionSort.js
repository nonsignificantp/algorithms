function selectionSort(array) {

  function _swap(i1, i2) {
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
  }

  for (let i = 0; i < array.length - 1; i++) {
    let smallest = Number.POSITIVE_INFINITY;
    let index;
    for (let z = i; z < array.length; z++) {
      if (array[z] < smallest) {
        smallest = array[z];
        index = z
      }
    }
    _swap(i, index);
  }

  return array;
}

function selectionSort_recursive(array) {
  let n = array.length;

  function _swap(i1, i2) {
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
  }

  function _selection(i) {
    if (i==n-1) return
    else {
      let smallest = Number.POSITIVE_INFINITY;
      let index;
      for (let s = i; s < n; s++) {
        if (array[s] < smallest) {
          smallest = array[s];
          index = s
        }
      }
      _swap(i, index);
      _selection(i+1);
    }

  }

  _selection(0);
  return array;
}
