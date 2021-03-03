console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 5 | Dia 1 .....');
console.log('......................................');
console.log('......................................');

let header = document.getElementById('header-container');
changeBackgroundColor(header, '#00b069');

let noEmergencyTask = document.querySelector('.no-emergency-tasks').getElementsByTagName('div');
let heading3NoEmergencyTask = document.querySelector('.no-emergency-tasks').getElementsByTagName('h3');
changeBackgroundColors(noEmergencyTask, '#ff9f84');
changeBackgroundColors(heading3NoEmergencyTask, '#232525');

let emergencyTask = document.querySelector('.emergency-tasks').getElementsByTagName('div');
let heading3EmergencyTask = document.querySelector('.emergency-tasks').getElementsByTagName('h3');
changeBackgroundColors(emergencyTask, '#f9db5e');
changeBackgroundColors(heading3EmergencyTask, '#a500f3');

let footer = document.getElementById('footer-container');
changeBackgroundColor(footer, '#003533');

function changeBackgroundColor(element, colorHexadecimal) {
  element.style.backgroundColor = colorHexadecimal;
}

function changeBackgroundColors(elements, colorHexadecimal) {
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].style.backgroundColor = colorHexadecimal;
  }
}
