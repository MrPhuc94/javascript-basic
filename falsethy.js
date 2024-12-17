// Falsethy

// 6 gia tri convert sang boolean la FALSE 

//     0
//     ''
//     null
//     undefined
//     NaN
//     false

// Kieu nguyen thuy khi khai bao bien cap phat 
// vung nho co dinh va ko thay doi duoc gia tri vung nho do
// Khi gan lai gia tri cho bien do thi no se tao ra vung nho moi

var a = null;
var b = undefined;

var c = a == b;

var result = 'A' && undefined && '' && 'B';

var result1 = '' || null || 'B' || undefined;

console.log('result', result);
console.log('result1', result1);
console.log('a', typeof(a));
console.log('c', c);

var d = NAN;
var f = NAN;

var g = d === f;

console.log('G', g);

// Ngoài lề một chút:

// Phép so sánh === (!==) Trên thực tế, phép toán so sánh === tuân theo quy luật dưới đây:
// Nếu x và y khác kiểu nhau, false
// Nếu như cả 2 vế đều là null hoặc undefined (null === null), true (tuy nhiên điều này không đúng với NaN đâu nhé)
// Nếu cả 2 vế đều là kiểu Number, 1 trong 2 vế, hoặc cả 2 vế là NaN, false. Còn không thì so sánh giá trị
// Nếu cả 2 vế đều là kiểu String, nội dung giống nhau: true, còn lại false
// Nếu cả 2 vế đều là kiểu Boolean, giống nhau thì là true, khác nhau là false
// Nếu cả 2 vế đều là kiểu Object tham chiếu, nếu cùng tham chiếu tới 1 object: true, còn lại là false
// Phép so sánh == (!=)
// Nếu cả 2 vế đều là null, hoặc undefined, true
// Nếu một vế là giá trị kiểu Number, vế còn lại là giá trị kiểu String, String sẽ được convert sang kiểu Number và so sánh giá trị
// Nếu một vế là kiểu Boolean, một vế là kiểu Number, Boolean sẽ được chuyển sang kiểu Number và so sánh giá trị
// Nếu một vế là kiểu Boolean, một vế là kiểu String, cả 2 vế sẽ được chuyển về kiểu Number và so sánh giá trị
// Nếu một vế là kiểu Number, một vế là kiểu Object tham chiếu, vế Object tham chiếu sẽ được chuyển sang Number và so sánh giá trị
// Nếu một vế là kiểu String, một vế là kiểu Object tham chiếu, vế Object tham chiếu sẽ được chuyển sang kiểu String và so sánh nội dung
// Ngoài những trường hợp trên, tất cả đều là false Vậy nếu so sánh với toán tử == thì null và undefined bằng nhau nhưng với toán tử === thì chúng không bằng nhau. 
// Javascript đã tự động ép kiểu trong phép so sánh null == undefined, để loại bỏ rủi ro có thể xảy ra này, 
// chúng ta nên sử dụng === thay cho == và !== thay cho != trong các phép so sánh.

