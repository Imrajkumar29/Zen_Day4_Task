var object1 = {
  name: "Person 1",
  age: 5,
};

var object2 = {
  age: 5,
  name: "Person 1",
};

console.log(JSON.stringify(object1));
console.log(JSON.stringify(object1) === JSON.stringify(object2));
console.log(_.isEqual(object1, object2));
