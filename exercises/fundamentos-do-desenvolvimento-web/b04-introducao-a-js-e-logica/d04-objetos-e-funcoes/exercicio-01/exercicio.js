console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 4 | Dia 4 .....');
console.log('......................................');
console.log('......................................');

/**
 * Exercício 1
 * Imprima no console uma mensagem de boas-vindas para a personagem acima,
 * incluindo seu nome.
 */
console.log('Exercício 1 --------------------------');
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log('Bem-vinda ' + info.personagem);
console.log('......................................');

/**
 * Exercício 2
 * Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o
 * valor "Sim" e, em seguida, imprima o objeto no console.
 */
console.log('Exercício 2 --------------------------');
info['recorrente'] = 'Sim';
console.log(info);
console.log('......................................');

/**
 * Exercício 3
 * Faça um for/in que mostre todas as chaves do objeto.
 */
console.log('Exercício 3 --------------------------');
for (const infoKey in info) {
  console.log(infoKey);
}
console.log('......................................');

/**
 * Exercício 4
 * Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
 */
console.log('Exercício 4 --------------------------');
for (const infoKey in info) {
  console.log(info[infoKey]);
}
console.log('......................................');

/**
 * Exercício 5
 * Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do
 * primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain,
 * Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
 */
console.log('Exercício 5 --------------------------');
let recorrentes = '';
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};
if (info.recorrente && info2.recorrente) {
  recorrentes = 'ambos recorrentes';
}
console.log(
    info.personagem + ' e ' + info2.personagem + '\n' +
    info.origem + ' e ' + info2.origem + '\n' +
    info.nota + ' e ' + info2.nota + '\n' +
    recorrentes
);
console.log('......................................');
