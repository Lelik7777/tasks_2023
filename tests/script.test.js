function increaseAge(obj) {
  obj.age++;
}

// eslint-disable-next-line no-undef
test("should ", () => {
  const obj = { age: 33 };
  increaseAge(obj);
  // eslint-disable-next-line no-undef
  expect(obj.age).toBe(32);
});
