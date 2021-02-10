const checkSimpleNum = (num) => {
  // функция на проверку простого числа, чтобы можно было в основной функции прерывать цикл
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const simpleNumArray = (num) => {
  const arr = [];
  let i = 1;
  while (i <= num) {
    if (checkSimpleNum(i)) { // на каждой итерации проверяем через функцию на true false;
      arr.push(i);
    }
    i++;
  }
  return arr;
};

console.log ('Вывод массива простых чисел от 0 до 100: ' + simpleNumArray(100));
