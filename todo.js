ddTask = function() {
//var priority = document.querySelector('#priority').option.className;
var myLi = document.createTextNode(document.querySelector('#textbox').value);
var listitem = document.createElement("li");
var chk = document.createElement("input");
chk.type = "checkbox";
myLi.appendChild(cbox);
myLi.appendChild(litext);
//listitem.className = priority;
listitem.className = document.querySelector('#priority').value;
cbhk.onclick = completeTask;
var ulsection1 = document.querySelector('#tasklist');
ulsection1.appendChild(listitem);
localSave("tasklist");




}
completeTask = function(){
  if (this.checked) { 
  this.parentNode.classList.add("done");
  }
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
