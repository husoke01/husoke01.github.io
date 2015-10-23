addInput = function(){
//var priority = document.querySelector('#priority').option.className;
var myLi = document.createTextNode(document.querySelector('#textbox').value);
var listItem = document.createElement("li");
var chk = document.createElement("input");
chk.type = "checkbox";
listItem.appendChild(chk);
listItem.appendChild(myLi);
//listitem.className = priority;
listItem.className = document.querySelector('#priority').value;
chk.onClick = completeTask;
var myUl = document.querySelector('#tasklist');
myUl.appendChild(listItem);
localSave("tasklist");
}
completeTask = function(){
  if (this.checked) { 
  this.parentNode.classList.add("done");
  }
  localSave("tasklist");
  else {
  this.parentNode.classList.remove("done");
  }
  localSave("tasklist");
}
window.onload = function(){
  restoreList("tasklist", completeTask);
}
/*window.onload = function(){
  addTask();
  completeTask();
}
*/
