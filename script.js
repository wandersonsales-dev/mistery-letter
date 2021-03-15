const input = document.querySelector('#carta-texto');
const buttonGenerate = document.querySelector('#criar-carta');
const showResult = document.querySelector('#carta-gerada');
const grupo1 = ['newspaper', 'magazine1', 'magazine2'];
const grupo2 = ['medium', 'big', 'reallybig'];
const grupo3 = ['rotateleft', 'rotateright'];
const grupo4 = ['skewleft', 'skewright'];

const group1Sorted = () => {
  const number = Math.floor(Math.random() * (grupo1.length + 1));
  if (grupo1[number] !== undefined) {
    return grupo1[number];
  }
};

const group2Sorted = () => {
  const number = Math.floor(Math.random() * (grupo2.length + 1));
  if (grupo2[number] !== undefined) {
    return grupo2[number];
  }
};

const group3Sorted = () => {
  const number = Math.floor(Math.random() * (grupo3.length + 1));
  if (grupo1[number] !== undefined) {
    return grupo3[number];
  }
};

const group4Sorted = () => {
  const number = Math.floor(Math.random() * (grupo4.length + 1));
  if (grupo1[number] !== undefined) {
    return grupo4[number];
  }
};

const generateClass = () => {
  let newClass = '';
  newClass += `${group1Sorted()} `;
  newClass += `${group2Sorted()} `;
  newClass += `${group3Sorted()} `;
  newClass += `${group4Sorted()} `;
  // https://stackoverflow.com/a/64448355
  newClass = newClass.split('undefined').join('');
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
