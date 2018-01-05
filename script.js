console.log('Lots of Java; lots of script.');

function print() {  
  board.render();
  console.log('Mo Java; mo script.');
}

var assStart = 1000;


function countDown() {
  var assCounter = document.querySelector('#assetCount');
  var assNum = assStart - 100;
  assCounter.innerHTML = assNum;
}

function selected() {
  event.target.classList.add('assignedAsset');
  event.target.innerText = '100';
  countDown();
  
}

function renderRow(rowIdx) {
  var rowEl = document.createElement('div');
  rowEl.classList.add('row');
  for (var i = 0; i < 20; i++) {
    var box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('click', selected);
    rowEl.appendChild(box);
  }
  return rowEl;
}

function renderBoard() {
  var newElement = document.createElement('div');
  newElement.classList.add('board');
  for (var i = 0; i < 10; i++) {
    var newRow = this.renderRow(i);
    newElement.appendChild(newRow);
  }
  return newElement;
}

function render() {
  var boardEl = document.querySelector('.board-holder');
  boardEl.innerHTML = '';
  boardContent = this.renderBoard();
  boardEl.appendChild(boardContent);
}

// var plyrSelects = document.querySelectorAll('board-holder');

// for(i = 0; i < plyrSelects.length; i++) {
  // plyrSelects[i].addEventListener('click', selected);
// }

var board = {
  // selected: selected,
  render: render,
  renderBoard: renderBoard,
  renderRow: renderRow,
};
    
print();
render();