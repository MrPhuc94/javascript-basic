// reducer

let arrayNumber = [1, 2, 3, 4, 5, 6, 7];
let i = 0;

const fnReducer = (accumulator, currentValue, currentIndex, originArray) => {
  i++;

  console.table({
    'Luot chay: ': i,
    'accumulator: ': accumulator,
    'currentValue ': currentValue,
    currentIndex: currentIndex,
    originArray: originArray,
  });
  return accumulator + currentIndex + 10;
};

let newArrayReducer = arrayNumber.reduce(fnReducer);

// initial value must same type with variable expect result.

// flat array

var depthArray = [1, 2, [3, 6, [3, 4], 7], 8, [3, 4, 9]];

const flatten = (arr) =>
  arr.reduce((a, v) => {
    v instanceof Array ? a.push(...flatten(v)) : a.push(v);
    return a;
  }, []);

console.log('flatten', flatten(depthArray));
