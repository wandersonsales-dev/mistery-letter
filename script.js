const input = document.querySelector('#carta-texto');
const buttonGenerate = document.querySelector('#criar-carta');
const showResult = document.querySelector('#carta-gerada');

const generate = () => {
  showResult.innerHTML = '';
  const inputSplited = input.value.split(' ');
  for (let index = 0; index < inputSplited.length; index += 1) {
    const newSpan = document.createElement('span');
    newSpan.innerHTML = inputSplited[index];
    showResult.appendChild(newSpan);
  }
};

window.onload = () => {
  buttonGenerate.addEventListener('click', generate);
};
