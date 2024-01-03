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

// This method is for handling the dragover event and stopping it from doing its default actions....
function dragOver(e) {
  e.preventDefault();
}

// This method is for the handling the dragenter event, by stopping its default behaviour and adding dynamically hovered class on which the image is being dragged over....
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

// This method is for handling the dragleave event, by dynamically adding the empty class onto it...
function dragLeave() {
  this.className = "empty";
}

// This method is for handling the dragdrop event, by adding the empty class and appening the fill class into it...
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
