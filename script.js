console.log('Lots of Java; lots of script.');

// function print() {  
//   board.render();
//   console.log('Mo Java; mo script.');
// }

var assStart = 1000;
// var assCurrent = selected();

// function countDown() {
//   var box = document.querySelector('.board');
//   if(assStart <= 0){
    
//     box.removeEventListener('click', selected);
//   }
//   // var assCounter = document.querySelector('#assetCount');
//   // var assNum = assStart - 100;
//   // assCounter.innerHTML = assNum;
//   // document.querySelector('#assetCount').innerHTML = assStart - 100;
// }

function gameAttack (){
  var cell = document.querySelector('.box');
  var victim = cell[r][c];
  var r = cell.dataset.row;
  var c = cell.dataset.col;
  var attackTarget = 
  var colAttack = Math.floor(Math.random() * 20);
  var rowAttack = Math.floor(Math.random() * 10);
  for (i = 0; i < 10; i++){
    
  }
}

function attackResult(){
  var attTarget = document.querySelector('.box');
  if(!attTarget.classList.contains("assignedAsset")){
    attTarget.classList.add('hit');
  } else {
    attTarget.classList.add('miss');
  }
}

function listenEvent(){
  // if (!parseInt(document.querySelector('#assetCount').innerHTML) === 0){
  var box = document.querySelector('.board');
  box.addEventListener('click', selected);
}
// }

function selected(event) {
  if(!event.target.classList.contains("assignedAsset")){
    event.target.classList.add('assignedAsset');
    event.target.innerText = '100';
    document.querySelector('#assetCount').innerHTML = assStart -= 100;
    theApp.assCurrent = parseInt(document.querySelector('#assetCount').innerHTML);
    var classNum = document.querySelectorAll('.board .assignedAsset').length;
    console.log(classNum);
  } else if
    (theApp.assCurrent <= 0) {
    var box = document.querySelector('.board');
    box.removeEventListener('click', selected);
    document.querySelector('#assetTitle').innerHTML = "Assets Left:";
    document.querySelector('#assetCount').innerHTML = 1000;
    gameAttack();
  }
  return classNum;
  return theApp.assCurrent;
}

// function classCount(){
// var classNum = document.querySelectorAll('.board .assignedAsset').length;
// console.log(classNum);
// }
// console.log(selected());

// function stopSetup(){
//   if(theApp.assCurrent <= 0){
//     var box = document.querySelector('.board');
//     box.removeEventListener('click', selected);
//   }
// }


function renderRow(rowIdx) {
  var rowEl = document.createElement('div');
  rowEl.classList.add('row');
  for (var i = 0; i < 20; i++) {
    var box = document.createElement('div');
    
    // var row = Math.floor(rowIdx);
    // var col = rowIdx;

    // var boxVal = this.gridData[row][col];
    // var boxShow = genCellDisplayClass(boxVal);

    box.classList.add('box');
    box.dataset.row = rowIdx;
    box.dataset.col = i;
    // this.pushRow(rowIdx);
    // this.pushCol(i);
    // box.addEventListener('click', selected);
    
    rowEl.appendChild(box);
    // console.log(row);
    // console.log(col);
  }
  return rowEl;
  // return box;
  // console.log(box);
}


function renderBoard(gridData) {
  var newElement = document.createElement('div');
  newElement.classList.add('board');
  for (var i = 0; i < 10; i++) {
    var newRow = this.renderRow(i);
    this.gridData = gridData;
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
  listenEvent: listenEvent,
  // countDown: countDown;
};

var theApp = {
  // stopSetup: stopSetup
  // classCount: classCount
};
// var think = {
//   row: [],
//   col: [],
//   pushRow: pushRow(val),
//   pushCol: pushCol(val)
//   // pushRow: pushRow(val) {this.row.push(val)},
//   // pushCol: pushCol(val) {this.col.push(val)}
// };
    
// print();

board.render();
board.listenEvent();
// theApp.classCount();
// theApp.stopSetup();
// board.countDown();