let number = -1;

function positiveOrNegative(number) {
  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'negative;'
  } else if (number === 0) {
    return 'zero';
  }
}

console.log(positiveOrNegative(number));
