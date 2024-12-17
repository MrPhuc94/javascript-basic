let myArray = [
  1,
  '1',
  undefined,
  null,
  '',
  false,
  true,
  function () {},
  {},
  undefined,
];

console.log('myArray', myArray);

console.log('isArray', Array.isArray(myArray));

Number.isNaN();

// Array Methods

// 1. toString
console.log(myArray.toString());

// 2. Join (array => string) >< Split (string => array)
console.log(myArray.join(' - '));

// Manipulate with array
// POP - PUSH - SHIFT - UNSHIFT

// POP >< SHIFT || XOA PHAN TU CUOI >< XOA PHAN TU DAU | TRA VE DUNG PHAN TU DO OR UNDEFINE
// PUSH >< UNSHIFT || THEM VAO CUOI >< THEM VAO DAU | THEM 1 OR NHIEU |TRA VE DO DAI MOI CUA MANG 

// POP - Xoa di phan tu cuoi mang va return chinh phan tu da xoa =>> lay phan tu cuoi | Mang ban dau bi thay doi

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('arrayNumber',arrayNumbers.pop());
console.log('arrayNumber',typeof myArray.pop());

console.log('arrayNumbers', arrayNumbers);

// PUSH - Them 1 or nhieu phan tu moi vao cuoi mang va tra ve LENGTH moi cua mang 
console.log('arrayNumbers.push(11,12);', arrayNumbers.push(11,12));
console.log('arrayNumbers', arrayNumbers);

// SHIFT - Xoa phan tu dau tien cua mang va tra ve gia tri phan tu do, Ko co thi tra ve undefine
// App dung them xoa san pham trong cart 

console.log('arrayNumbers.shift', arrayNumbers.shift);
console.log('unshift',arrayNumbers.unshift(100,200));

// splice => xoa va chen cac phan tu trong mang

console.log('splice', arrayNumbers.splice());

// concat = gop mang

// slicing 
console.log(arrayNumbers.slice(0)); // copy mang tham chieu // lay xuoi nguoc deu ok


