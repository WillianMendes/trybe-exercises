const estados = [
  {"nome": "Acre", "sigla": "AC"},
  {"nome": "Alagoas", "sigla": "AL"},
  {"nome": "Amapá", "sigla": "AP"},
  {"nome": "Amazonas", "sigla": "AM"},
  {"nome": "Bahia", "sigla": "BA"},
  {"nome": "Ceará", "sigla": "CE"},
  {"nome": "Distrito Federal", "sigla": "DF"},
  {"nome": "Espírito Santo", "sigla": "ES"},
  {"nome": "Goiás", "sigla": "GO"},
  {"nome": "Maranhão", "sigla": "MA"},
  {"nome": "Mato Grosso", "sigla": "MT"},
  {"nome": "Mato Grosso do Sul", "sigla": "MS"},
  {"nome": "Minas Gerais", "sigla": "MG"},
  {"nome": "Pará", "sigla": "PA"},
  {"nome": "Paraíba", "sigla": "PB"},
  {"nome": "Paraná", "sigla": "PR"},
  {"nome": "Pernambuco", "sigla": "PE"},
  {"nome": "Piauí", "sigla": "PI"},
  {"nome": "Rio de Janeiro", "sigla": "RJ"},
  {"nome": "Rio Grande do Norte", "sigla": "RN"},
  {"nome": "Rio Grande do Sul", "sigla": "RS"},
  {"nome": "Rondônia", "sigla": "RO"},
  {"nome": "Roraima", "sigla": "RR"},
  {"nome": "Santa Catarina", "sigla": "SC"},
  {"nome": "São Paulo", "sigla": "SP"},
  {"nome": "Sergipe", "sigla": "SE"},
  {"nome": "Tocantins", "sigla": "TO"}
]

const date = document.getElementById('data-inicio');
const buttonSave = document.getElementById('button-save');

function addEstadosBox() {
  const estadosSelect = document.getElementById('estados');
  for (let i = 0; i < estados.length; i += 1) {
    const estado = document.createElement('option');
    estado.setAttribute('value', estados[i].sigla);
    estado.setAttribute('required', 'true');
    estado.innerText = estados[i].nome;
    estadosSelect.appendChild(estado);
  }
}

function checkDate(event) {
  const error = document.getElementById('data-inicio-error');
  if (date.value === undefined) {
    error.innerText = 'Data invalida';
    return false;
  } else {
    const dateArray = date.value.split('/');
    if (dateArray[0] < 0 || dateArray[0] > 31 || dateArray[0].length !== 2) {
      error.innerText = 'Dia invalido!';
      return false;
    }
    if (dateArray[1] < 0 || dateArray[1] > 12 || dateArray[1].length !== 2) {
      error.innerText = 'Mês invalido!';
      return false;
    }
    if (dateArray[2] < 0 || dateArray[2] > 2021 || dateArray[2].length !== 4) {
      error.innerText = 'Ano invalido!';
      return false;
    }
    error.innerText = '';
  }
  event.preventDefault();
  return true;
}

window.onload = function() {
  addEstadosBox();
  buttonSave.addEventListener('click', checkDate);
}
