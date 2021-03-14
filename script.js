const input = document.querySelector('#carta-texto');
const buttonGenerate = document.querySelector('#criar-carta');
const showResult = document.querySelector('#carta-gerada');

const classes = {
  grupo1: ['newspaper', 'magazine1', 'magazine2'],
  grupo2: ['medium', 'big', 'reallybig'],
  grupo3: ['rotateleft', 'rotateright'],
  grupo4: ['skewleft', 'skewright'],
};

const generateClass = () => {
  let newClass = '';
  Object.keys(classes).forEach((el) => {
    const sortedNumber = Math.round(Math.random() * ((classes[el].length)));
    if (sortedNumber !== ((classes[el].length) + 1)) {
      if (classes[el][sortedNumber - 1] === undefined) {
        newClass += `${classes[el][sortedNumber]} `;
      } else {
        newClass += `${classes[el][sortedNumber - 1]} `;
      }
    }
  });
  return newClass;
};

const generate = () => {
  showResult.innerHTML = '';
  // https://pt.stackoverflow.com/questions/58498/se-input-tiver-apenas-espa%C3%A7os-em-branco-n%C3%A3o-fazer-nada
  // Achei a função .trim() no link acima
  if (input.value === '' || !input.value.trim()) {
    showResult.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  const inputSplited = input.value.split(' ');
  for (let index = 0; index < inputSplited.length; index += 1) {
    const newSpan = document.createElement('span');
    newSpan.innerHTML = inputSplited[index];
    newSpan.className = generateClass();
    newSpan.addEventListener('click', (e) => { e.target.className = generateClass(); });
    showResult.appendChild(newSpan);
  }
};

window.onload = () => {
  buttonGenerate.addEventListener('click', generate);
};
