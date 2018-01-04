console.log('Lots of Java; lots of script.');

function print() {
  console.log('Mo Java; mo script.');
  board.render();
}

function renderRow(rowIdx) {
  var rowEl = document.createElement('div');
  rowEl.classList.add('row');

  for (var i = 0; i < 10; i++) {
    var box = document.createElement('div');
    box.classList.add('box');
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
  console.log(newElement);
  return newElement;
}

function render() {
  var boardEl = document.querySelector('.board-holder');
  boardEl.innerHTML = 'testing';
  boardContent = this.renderBoard();
  boardEl.appendChild(boardContent);
}

var board = {
  render: render,
  renderBoard: renderBoard,
  renderRow: renderRow,
};

print();