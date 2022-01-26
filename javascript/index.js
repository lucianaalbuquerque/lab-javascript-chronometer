const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
/*  ACHO QUE O PROBLEMA ESTA AQUI EM DIANTE.
  console.log(chronometer.currentTime);
  secUniElement.innerHTML = `this.currentTime`;
  secDecElement.innerHTML = chronometer.getAttribute('currentTime'); */
}

function printMinutes() {
  //chronometer.getMinutes()
}

function printSeconds() {
  //chronometer.getSeconds();
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
  btnLeftElement.innerHTML = 'START';
  btnRightElement.innerHTML = 'RESET';
}

function setSplitBtn() {
  chronometer.split();
}

function setStartBtn() {
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
  btnLeftElement.innerHTML = 'STOP';
  btnRightElement.innerHTML = 'SPLIT';
}

function setResetBtn() {
  chronometer.reset()
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start' ) {
    setStartBtn();
    chronometer.start(printTime);
  } else if (btnLeftElement.className === 'btn stop' ) {
    setStopBtn();
    chronometer.stop()}
});



// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start' ) {
    setResetBtn();
  } else if (btnLeftElement.className === 'btn stop' ) {
    setSplitBtn()}
});
