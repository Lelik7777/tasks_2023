function range(start, end) {
  if (end - start === 2) {
    return [start + 1];
  } else {
    const arr = range(start, end - 1);
    arr.push(end - 1);
    return arr;
  }
}
range(3, 7); //?
