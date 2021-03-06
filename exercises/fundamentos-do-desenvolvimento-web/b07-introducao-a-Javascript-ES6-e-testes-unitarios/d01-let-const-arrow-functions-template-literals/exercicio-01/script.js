console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 7 | Dia 1 .....');
console.log('......................................');
console.log('......................................');

/**
 * Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
 * Modifique a estrutura da função para que ela seja uma arrow function .
 * Modifique as concatenações para template literals .
 */
const scope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope}! ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

scope(true);