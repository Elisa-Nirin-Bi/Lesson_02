const readline = require('readline-sync');
const MESSAGES = require('./loan_calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}
  
function message(message, lang='en') {
  return MESSAGES[lang][message];
} 

prompt(message('welcome'));
  
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
};

prompt(message('loanAmount'));
let loanTotal= readline.question();
 
while (invalidNumber(loanTotal)) {
  prompt(message('invalid'));
  loanTotal = readline.question();
};
console.log(loanTotal);

prompt(message('annualInterestRate'));
let annualPercentageRate = readline.question();
 
while (invalidNumber(annualPercentageRate)) {
  prompt(message('invalid'));
  annualPercentageRate = readline.question();
};
console.log(annualPercentageRate);

prompt(message('loanDuration'));
let loanDuration = readline.question();
 
while (invalidNumber(loanDuration)) {
  prompt(message('invalid'));
  loanDuration = readline.question();
};
console.log(loanDuration);

function calculateMonthlyInterestRate() { 
  return ((annualPercentageRate / 12) / 100)
};

monthlyInterest = calculateMonthlyInterestRate()
let monthlyPayment = loanTotal * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), ( - loanDuration))));
let roundedMonthlyPayment = Math.round(monthlyPayment);

prompt (`$${roundedMonthlyPayment}`);

while (true) {
  prompt(message('additionalCalculation'));
  let answer = readline.question();
  if (answer.toLowerCase() !== 'y')break
  }
