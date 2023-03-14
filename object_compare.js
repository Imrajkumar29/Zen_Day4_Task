// 1.To compare two JSON have the same properties without order
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

// 2.Code to display all the country flags in the console:

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  console.log("request-status : ", request.status);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].name.common, " - ", result[i].flag);
  }
};

// 3.Code to print all the countries names,regions,sub-region and population:

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);

  for (var i = 0; i < result.length; i++) {
    console.log(result[i].name.common);
    console.log(result[i].region);
    console.log(result[i].subregion);
    console.log(result[i].population);
  }
};
