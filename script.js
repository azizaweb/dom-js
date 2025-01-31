const name = prompt('как тебя зовут');
const age = prompt('сколько лет');
const score = prompt('бал');

document.querySelector('#name').textContent = name;
document.querySelector('#age').textContent = age;
document.querySelector('#score').textContent = score;

const resultElement = document.querySelector('#result');

if(parseInt(score) >= 70){
    resultElement.textContent = 'ты поступил';

} else{
    resultElement.textContent = 'ты не поступил';  
}
