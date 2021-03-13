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
function holidays(holidays = [12, 28]) {
  const buttonContainer = document.getElementsByClassName('buttons-container')[0];
  const buttonHoliday = document.createElement('button');
  buttonHoliday.id = 'btn-holiday';
  buttonHoliday.innerText = 'Feriados';
  buttonContainer.appendChild(buttonHoliday);
  addEventButtonHoliday();
  for (let i = 0; i < dezDaysList.length; i += 1) {
    for (let j = 0; j < holidays.length; j += 1) {
      if (holidays[j] === dezDaysList[i]) {
        document.getElementsByClassName('day')[i].classList.add('holiday');
      }
    }
  }
}
holidays();

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

//Exercício 4
function fridays() {
  const buttonContainer = document.getElementsByClassName('buttons-container')[0];
  const buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerText = 'Sexta-Feira';
  buttonContainer.appendChild(buttonFriday);
  addEventButtonFriday();
}
fridays();

//Exercício 5
let fridaysActive = false;
function addEventButtonFriday() {
  const buttonFriday = document.getElementById('btn-friday');
  buttonFriday.addEventListener('click', function() {
    const fridays = document.getElementsByClassName('friday');
    if (fridaysActive === true) {
      const days = document.getElementsByClassName('day');
      countSeven = 0;
      for (let i = 0; i < days.length; i += 1) {
        countSeven += 1;
        if ((countSeven + 1) % 7 === 0) {
          days[i].classList.add('friday');
          days[i].innerText = dezDaysList[i].toString();
        }
      }
      fridaysActive = false;
    } else {
      for (let i = 0; i < fridays.length; i += 1) {
        fridays[i].innerText = 'Sextou';
      }
      fridaysActive = true;
    }
  });
}

//Exercício 6
function animateDays() {
  let days = document.getElementsByClassName('day');
  for (let i = 0; i < days.length; i += 1) {
    days[i].addEventListener('mouseover', function(event) {
      let day = event.currentTarget;
      day.style.fontSize = '32px';
    });
  }
  for (let i = 0; i < days.length; i += 1) {
    days[i].addEventListener('mouseout', function(event) {
      let day = event.currentTarget;
      day.style.fontSize = '20px';
    });
  }
}
animateDays();

//Exercício 7
function addTask(task = document.getElementById('task-input').value) {
  const taskElement = document.createElement('p');
  const myTasks = document.getElementsByClassName('my-tasks');
  taskElement.innerText = task;
  myTasks[0].appendChild(taskElement);
}
document.getElementById('btn-add').addEventListener('click', function() {
  addTask();
});
