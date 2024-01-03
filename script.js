// This is the scripts for adding some actions into the web page...

// This is for holding the important HTML elements for the DOM manipulations...
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");


// This is to handle the drag-start and drag-end events on the fill class or on the image...
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);


// Thsi is to handle the dragover, dragenter, dragleave, and dragdrop events with relevant methods... 
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}


// This method is for handling the dragstart event with adding the hold class dynamically before disappearing after sometime...
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

// This method is for handling the dragend event, by adding the fill class after the image is dragged completely on the particular fill container...
function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}
function dragLeave() {
  this.className = "empty";
}
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
