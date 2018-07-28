const myFunc = function() {
  const myVar = "value";
  return myVar;
}


const myFunc = () => {
  const myVar = "value";
}

const myFunc = () => "value"

const doubler = (item) => item * 2;

FBPosts.filter(function(post)) {
  return post.thumbnail !== null && post.shares > 100 && post.likes
> 500;
})
