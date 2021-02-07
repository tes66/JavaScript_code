
// Тут я не понял как сделать вывод через console.log или Alert

var arg1 = 8
var arg2 = 9
var operation = mathOperation

function mathOperation(arg1, arg2, operation){
    switch(operation){
   case 'сложение':
       return arg1 + arg2;
       break;
   case 'вычитание':
       return arg1 - arg2;
       break;
   case 'деление':
      return arg1 / arg2;
       break;
   case 'умножение':
       return arg1 * arg2;
       break;
      }
}
