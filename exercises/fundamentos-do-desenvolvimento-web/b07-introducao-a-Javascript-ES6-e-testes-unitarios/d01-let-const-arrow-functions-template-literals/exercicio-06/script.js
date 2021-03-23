console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 7 | Dia 1 .....');
console.log('......................................');
console.log('......................................');

/**
 * Função 1 : Escreva uma função que vai receber uma string como parâmetro.
 * Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você
 * passou como parâmetro. Sua função deve retornar essa nova string.
 */
function findX(replaceString) {
    let stringQualquer = 'Tryber x aqui';
    stringQualquer = stringQualquer.replace('x', replaceString);
    return stringQualquer;
}
console.log(findX('AAAAAAAAAAAAA'));