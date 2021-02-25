const taxInss = {
  range_1: {
    min: 0,
    max: 1556.94,
    tax: 8,
    percentage: true
  },
  range_2: {
    min: 1556.95,
    max: 2594.92,
    tax: 9,
    percentage: true
  },
  range_3: {
    min: 2594.93,
    max: 5189.92,
    tax: 11,
    percentage: true
  },
  range_4: {
    min: 5189.92,
    max: 100000000000,
    tax: 570.88,
    percentage: false
  }
}

const taxIr = {
  range_1: {
    min: 0,
    max: 1903.98,
    tax: 0,
    percentage: true,
    deduction: 0
  },
  range_2: {
    min: 1903.99,
    max: 2826.65,
    tax: 7.5,
    percentage: true,
    deduction: 142.80
  },
  range_3: {
    min: 2826.66,
    max: 3751.05,
    tax: 15,
    percentage: true,
    deduction: 354.80
  },
  range_4: {
    min: 3751.06,
    max: 4664.68,
    tax: 22.5,
    percentage: true,
    deduction: 636.13
  },
  range_5: {
    min: 4664.68,
    max: 100000000000,
    tax: 27.5,
    percentage: true,
    deduction: 869.36
  }
}

function calculateTax(grossSalary, tax) {
  for (const rangeKey in tax) {
    if (grossSalary >= tax[rangeKey].min && grossSalary <= tax[rangeKey].max) {
      if (tax[rangeKey].percentage === true) {
        return (grossSalary * tax[rangeKey].tax) / 100;
      } else {
        return tax[rangeKey].tax;
      }
    }
  }
  console.log('Valor inválido');
  return false;
}

let grossSalary = 9000;
let inss = calculateTax(grossSalary, taxInss);
let ir = calculateTax(grossSalary, taxIr);
let liquidSalary = grossSalary - (inss + ir);

console.log('-----------  TABELA DE IMPOSTOS  -----------');
console.log('---  INSS             |  R$' + inss + '         ---');
console.log('---  IR               |  R$' + ir + '         ---');
console.log('---  Total a Pagar    |  R$' + (inss + ir)+ '         ---');
console.log('---  Salário Bruto    |  R$' + grossSalary + '          ---');
console.log('---  Salário Liquido  |  R$' + liquidSalary + '          ---');
