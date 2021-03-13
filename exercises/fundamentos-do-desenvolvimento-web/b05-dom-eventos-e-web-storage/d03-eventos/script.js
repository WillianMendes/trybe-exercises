console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 5 | Dia 3 .....');
console.log('......................................');
console.log('......................................');

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ulDays = document.getElementById('days');
let countSeven = 0;
for (let i = 0; i < dezDaysList.length; i += 1) {
  countSeven += 1;
  const liItem = document.createElement('li');
  liItem.classList.add('day');
  if ((countSeven + 1) % 7 === 0) {
    liItem.classList.add('friday')
  }
  liItem.innerText = dezDaysList[i].toString();
  ulDays.appendChild(liItem);
}

//Exercício 2
function holidays(holiday) {
  const buttonContainer = document.getElementsByClassName('buttons-container')[0];
  const buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerText = 'Feriados';
  buttonContainer.appendChild(buttonHoliday);
}

//Exercício 3
let holidaysActive = false;
function addEventButtonHoliday() {
  const buttonHoliday = document.getElementById('btn-holiday');
  buttonHoliday.addEventListener('click', function() {
    const holidays = document.getElementsByClassName('holiday');
    if (holidaysActive === true) {
      for (let i = 0; i < holidays.length; i += 1) {
        holidays[i].classList.remove('holiday-fill');
      }
      holidaysActive = false;
    } else {
      for (let i = 0; i < holidays.length; i += 1) {
        holidays[i].classList.add('holiday-fill');
      }
      holidaysActive = true;
    }
  });
}
