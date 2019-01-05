function multiplesOf3and5(number) {
  return [...Array(number).keys()].filter((x) => {
    return (x % 3 == 0 | x % 5 == 0) ? true : false
  }).reduce((acc, val) => acc + val, 0);
}
