var string = '  LAM VIEC VOI JS string JS JS JS 10  ';

console.log('string.length', string.length);

console.log('index of', string.indexOf('VOI', 6));
console.log('last index of', string.lastIndexOf('VOI'));

// TIM KIEM THEO BIEU THUC CHINH QUY
console.log('search', string.search('VOI'));

// cat chuoi
console.log('cut chuoi', string.slice(3));
console.log('cut chuoi', string.slice(-3, 0));

// Replace string

console.log('replace', string.replace(/JS/g, 'string'));

// toUppercase
// toLowercase

// Trim == loai bo khoang trang 2 dau 

console.log('trim string', string.trim());

// Split  => cat 1 chuoi thanh 1 array == tim ra diem chung de cat 

var languages = 'Javascript, php, java';
console.log(languages.split(', '));

// get character by index 
console.log(string.charAt(1)); // ''
console.log(string[1]); //undefine

// isNAN
console.log(Number.isNaN(languages));

// tofixed ==> lam trong so thap phan

var myNumber = 3434.232323;
console.log('myNumber to fixed', myNumber.toFixed(2));





