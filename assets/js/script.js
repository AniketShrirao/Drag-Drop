/* Author: Aniket*/
var priorities = document.querySelectorAll('.priority');
var dragEle = document.querySelectorAll('.drag li');
var start = document.querySelector('#start');
var restart = document.querySelector('#restart');
var dropsection = document.querySelector('.drop');
var dragsection = document.querySelector('.drag ul');
var draggedItem = null;
var btnstart = start.addEventListener('click',started);

function started() {
  debugger;
  if(start.innerHTML == "Start") {
    start.innerHTML = "Stop";
    for (var index = 0; index < dragEle.length; index++) {
    dragEle[index].children.draggable = true;    
    dragEle[index].draggable = true;
    }
  } else if(start.innerHTML == "Stop") {
    start.innerHTML = "Start";
    for (var index = 0; index < dragEle.length; index++) {
      dragEle[index].children.draggable = false;    
      dragEle[index].draggable = false;
    }
  } 
}
if(start.innerHTML == "Start") {
  for (var index = 0; index < dragEle.length; index++) {
    dragEle[index].addEventListener('dragstart',dragstart); 
    function dragstart(e) {

      draggedItem = this;
      setTimeout(function() {
        draggedItem.classList.toggle('hidden');
      },0);
    }
    dragEle[index].addEventListener('dragend',dragend); 
    function dragend(e) {

      draggedItem = this;
      setTimeout(function() {
        draggedItem.classList.toggle('visible');
      },0);
    }
  }
}

for (var k = 0; k < priorities.length; k++) {
  var priority = priorities[k];
  priority.addEventListener('dragover',function(e) {
    e.preventDefault();
    this.classList.toggle('bgcolor');
  });
  priority.addEventListener('dragenter',function(e) {
    e.preventDefault();
  });
  priority.addEventListener('drop',function() {
    debugger; 
    this.appendChild(draggedItem);
    if(dragsection.innerText == "")
    dropsection.classList.add('margin');
  });
}
var btnrestart = restart.addEventListener('click',function(){
  debugger;
  window.location.reload();
});



















