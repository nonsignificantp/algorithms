function bubbleSort(array) {

  function _swap(i1, i2) {
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
  }

  function _map(stop=false) {
    if (stop) return
    else {
      stop = true;
      array.map((e, i, a) => {
        if (e > a[i+1]) {
          _swap(i, i+1);
          stop = false;
        }
      });
      _map(stop)
    }
  }

  _map();
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
