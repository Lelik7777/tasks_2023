"hello".concat(",world"); //?
const obj = {
  name: "bob",
  age: 44,
  getAge() {
    return this.age;
  },
};
const obj1 = { name: "ann", age: 33 };
obj1.getAge = obj.getAge;
obj1.getAge(); //?
