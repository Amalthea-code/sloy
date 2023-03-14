





let chunk = (arr, number) => {
  const result = []
  for (let i = 0; i < arr.length;) {
    const arrey = []
    for (let j = 0; j < number; j++) {
      if (!arr[i]) {
        continue
      }
      arrey.push(arr[i])
      i++
    }
    result.push(arrey)
  }
  return result
}

console.log(chunk([1, 2, 3, 4, 5], 2))
