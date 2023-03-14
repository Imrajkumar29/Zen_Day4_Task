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

const order1 = {};
const order2 = {};

Object.keys(object1)
  .sort()
  .forEach((key) => {
    order1[key] = object1[key];
  });

Object.keys(object2)
  .sort()
  .forEach((key) => {
    order2[key] = object2[key];
  });

console.log(JSON.stringify(order1) === JSON.stringify(order2));
