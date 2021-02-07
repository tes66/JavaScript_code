let a = 7;
let b = 10;

if (a > 1 && b > 1){
  x = a - b;
  console.log(x);
} else if (a < 1 && b < 1){
    x = a * b;
    console.log(x);
    }
    else if (a > 1 && b < 1 || a < 1 && b > 1) {
    x = a + b;
    console.log(x);
    }
