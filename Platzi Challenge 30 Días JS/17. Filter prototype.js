function arrayModified() {
  Array.prototype.myFilter = function (callback) {
    const array = [];
    this.map((item) => {
      callback(item) && array.push(item);
    });
    return array;
  };
}
arrayModified();

const array = [1, 2, 3, 4, 5, 6];
console.log(array.myFilter((num) => num % 2 === 0));
