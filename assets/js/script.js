/* Author: Aniket*/
var priorities = document.querySelectorAll('.priority');
var dragEle = document.querySelectorAll('.drag li');
var start = document.querySelector('#start');
var restart = document.querySelector('#restart');
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
        // draggedItem.style.visibility = "hidden";
      },0);
    }
    dragEle[index].addEventListener('dragend',dragend); 
    function dragend(e) {

      draggedItem = this;
      setTimeout(function() {
        draggedItem.classList.toggle('visible');
        // draggedItem.style.visibility = "visible";
      },0);
    }
  }
}

for (var k = 0; k < priorities.length; k++) {
  var priority = priorities[k];
  priority.addEventListener('dragover',function(e) {
    e.preventDefault();
  });
  priority.addEventListener('dragenter',function(e) {
    e.preventDefault();
    this.classList.toggle('bgcolor');
    // this.style.backgroundColor = 'rgba(0,0,0,0.2)';
  });
  priority.addEventListener('drop',function() {
    debugger; 
    var cloned = draggedItem.cloneNode(true);
    this.appendChild(draggedItem);
    draggedItem.classList.toggle('visible');
    // draggedItem.style.visibility = "visible";
  });
}

var btnrestart = restart.addEventListener('click',function(){
  debugger;
  window.location.reload();
});



















