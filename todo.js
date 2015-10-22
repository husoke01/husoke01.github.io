addInput = function() {
var myUl
var myLi
var myInput
var myText
var myBox
var myPriority

myBox = document.querySelector("#textbox");
myPriority = document.querySelector("#priority");
myUl = document.querySelector("tasklist")''
myUl = appendChild("li");
myLi = document.createElement("li");
myLi.classList.add(myPriority.value);
myLi.appendChild("myInput");
myLi.appendChild("myText");
myInput = document.createElement("INPUT");
myInput.type = checkbox;
myText = document.createTextNode(myBox.value);
}

doneTask = function() {
  if() {
    this.parentNode.classList.add("done");
  } else {
    this.parentNode.classList.remove("done");
  }
}
