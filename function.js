// 1. Declaration  Function => Duoc hoisting khi bien dich => dua len dau
// 2. Expression Function => Khong duoc hoisting

// 1. Declaration Function / DekleiSn / Loi tuyen bo

// Ham ko return thi tra ve undefine

// Lien quan den su khac nhau luc bien dich va luc thuc thi 
// Compline and Excute

readInput(); // hoisting

enterInput(); // ko hoisting


function readInput() {
  console.log('Declaration Function ');
}

// Expression function

const enterInput = function () {
  console.log(' Expression function ');
};
