console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 4 | Dia 4 .....');
console.log('......................................');
console.log('......................................');

/**
 * Exercício 1
 * Item A
 * Imprima no console uma mensagem de boas-vindas para a personagem acima,
 * incluindo seu nome.
 */
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log('Bem-vinda ' + info.personagem);

/**
 * Exercício 1
 * Item B
 * Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o
 * valor "Sim" e, em seguida, imprima o objeto no console.
 */
info['recorrente'] = 'Sim';
console.log(info);
