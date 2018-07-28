let obj = {
  name: "FreeCodeCamp"
  review: "Awesome"
};

Object.freeze(obj);
obj.review = "bad"; // will be ignored. mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed

console.log(obj);
// { name: "FreeCodeCamp", review:"Awesome"}
