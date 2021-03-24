console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 7 | Dia 2 .....');
console.log('......................................');
console.log('......................................');

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

/*
 * Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles:
 * o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
 */
function addTurn(lesson, key, value) {
    lesson[key] = value;
}
addTurn(lesson2, 'turno', 'manhã');

/*
 * Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
 */
function listKeys(lesson) {
    return Object.keys(lesson);
}
console.log(listKeys(lesson2));

/*
 * Crie uma função para mostrar o tamanho de um objeto.
 */
function showLengthLesson(lesson) {
    return Object.keys(lesson).length;
}
console.log(showLengthLesson(lesson2));
