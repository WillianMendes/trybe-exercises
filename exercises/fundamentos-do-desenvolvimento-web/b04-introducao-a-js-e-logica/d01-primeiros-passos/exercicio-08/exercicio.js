let angleA = 10;
let angleB = 10;
let angleC = 20;

function triangle(angle, angle2, angle3) {
  return angle === angle2 && angle2 === angle3;
}

console.log(triangle(angleA, angleB, angleC));
