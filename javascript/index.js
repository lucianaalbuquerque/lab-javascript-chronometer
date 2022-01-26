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
  printSeconds();
  printMinutes();  
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(time) {
  let oneSplit = document.createElement('li');
  oneSplit.innerHTML = time;
  splitsElement.appendChild(oneSplit)
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
  let time = `${chronometer.computeTwoDigitNumber(chronometer.getMinutes())}:${chronometer.computeTwoDigitNumber(chronometer.getSeconds())}`;
  printSplit(time);
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
  chronometer.reset();
  printTime();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start' ) {
    setStartBtn();
    chronometer.start(this.printTime);
  } else if (btnLeftElement.className === 'btn stop' ) {
    setStopBtn();
    chronometer.stop()}
});



// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnLeftElement.className === 'btn start' ) {
    setResetBtn();
  } else if (btnLeftElement.className === 'btn stop' ) {
    // setSplitBtn() - WHY THIS FUNCTION EXISTS?
    setSplitBtn()}
});
