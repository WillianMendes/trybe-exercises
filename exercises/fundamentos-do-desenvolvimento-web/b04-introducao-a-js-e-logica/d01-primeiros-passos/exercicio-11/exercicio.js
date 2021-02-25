let number1 = 3;
let number2= 5;
let number3 = 7;

function isPair(a, b, c) {
  return (number1 % 2 === 0) || (number2 % 2 === 0) || number3 % 2 === 0;
}

console.log(isPair(number1, number2, number3));
