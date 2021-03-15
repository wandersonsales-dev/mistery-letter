const input = document.querySelector('#carta-texto');
const buttonGenerate = document.querySelector('#criar-carta');
const showResult = document.querySelector('#carta-gerada');
const idCartaContador = document.querySelector('#carta-contador');

const classesObj = {
  grupo1: ['newspaper', 'magazine1', 'magazine2'],
  grupo2: ['medium', 'big', 'reallybig'],
  grupo3: ['rotateleft', 'rotateright'],
  grupo4: ['skewleft', 'skewright'],
};

const generateNewClass = () => {
  const newClass = [];
  Object.values(classesObj).forEach((el) => {
    const random = Math.floor(Math.random() * (el.length + 1));
    if (el.length !== random) {
      newClass.push(el[random]);
    }
  });
  return newClass;
};

const checkClasses = (newClass) => {
  const spans = document.querySelector('span');
  let isEqual = false;
  for (let index = 0; index < spans.length; index += 1) {
    if (spans.className === newClass) {
      isEqual = true;
      break;
    }
  }
  return isEqual;
};

const newClassRandom = (e) => {
  do {
    e.target.className = '';
    generateNewClass().forEach((el) => {
      e.target.className += `${el} `;
    });
  } while (checkClasses(e.target.className) === true);
};

const generateClass = (e) => {
  if (e.className === '') {
    let newClass = '';
    generateNewClass().forEach((el) => {
      newClass += `${el} `;
    });
    return newClass;
  }
  newClassRandom(e);
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
    newSpan.className = generateClass(newSpan);
    newSpan.addEventListener('click', generateClass);
    showResult.appendChild(newSpan);
  }
  idCartaContador.innerHTML = inputSplited.length;
};

window.onload = () => {
  buttonGenerate.addEventListener('click', generate);
};
