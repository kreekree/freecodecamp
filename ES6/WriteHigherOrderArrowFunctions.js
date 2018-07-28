FBPosts.filter(function(post)) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
}

FBPosts.filter((post)) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  //change code below  this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
