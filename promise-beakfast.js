const breakfastPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("YOur order is ready");
    reject("Oh no");
  }, 3000);
});

console.log(breakfastPromise);

breakfastPromise.then(val => console.log(val)).catch(err => console.log(err));
