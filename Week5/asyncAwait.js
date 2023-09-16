async function say_hello() {
  return new Promise((resolve,reject) => {
    setTimeout(function() {
      resolve("async hello");
    }, 5000);
  });
}
console.log('Before');
wish = await say_hello();
wish.then((v) => console.log(v));
console.log(wish);

console.log("after");
