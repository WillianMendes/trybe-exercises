const checkAnswer = (answer) => (gabarito) => {
    return answer.toLowerCase() === gabarito.toLowerCase();
}

const response = checkAnswer('TestE');
console.log(response('teste'));
console.log(checkAnswer('teste')('TESTE'));