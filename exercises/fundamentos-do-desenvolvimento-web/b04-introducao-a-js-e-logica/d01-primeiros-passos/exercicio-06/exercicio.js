let a = 10;
let b = 20;
let c = 30;

function larger(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return null;
  }
}

function largerE(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else {
    return null;
  }
}

console.log(larger(a, b));
console.log(largerE(a, b, c))
