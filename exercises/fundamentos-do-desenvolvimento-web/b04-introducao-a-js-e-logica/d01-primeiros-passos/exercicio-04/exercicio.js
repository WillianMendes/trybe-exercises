let grade = 100;
let state;

if (grade >= 80) {
  state = 'aprovado';
  console.log('Parabéns, você foi aprovado(a).');
} else if (grade < 80 && grade >= 60) {
  state = 'lista';
  console.log('Você está na nossa lista de espera.');
} else if (grade < 60) {
  state = 'reprovado';
  console.log('Você foi reprovado(a)');
}

switch (state) {
  case 'aprovado':
    console.log('Parabéns, você foi aprovado(a).');
    break;
  case 'lista':
    console.log('Você está na nossa lista de espera.');
    break;
  case 'reprovado':
    console.log('Você foi reprovado(a)');
    break;
  default:
    console.log('Não se aplica');
}
