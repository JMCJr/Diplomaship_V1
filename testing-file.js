// ORIGINAL
function listenEvent(){
  var box = document.querySelector('.board');
  box.addEventListener('click', selected);
}

// NEW
function listenEvent(){
  if (document.querySelector('#assetCount').innerHTML > 0){
  var box = document.querySelector('.board');
  box.addEventListener('click', selected);
  }
}  