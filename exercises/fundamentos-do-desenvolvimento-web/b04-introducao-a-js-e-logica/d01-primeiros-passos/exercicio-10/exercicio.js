let percentageNote = 100;

if (percentageNote > 100 || percentageNote < 0) {
  console.log('Nota invalida!!!');
} else {
  if (percentageNote >= 90) {
    console.log('A');
  } else if (percentageNote >= 80) {
    console.log('B');
  } else if (percentageNote >= 70) {
    console.log('C');
  } else if (percentageNote >= 60) {
    console.log('D');
  } else if (percentageNote >= 50) {
    console.log('E');
  } else if (percentageNote < 50) {
    console.log('F');
  }
}
