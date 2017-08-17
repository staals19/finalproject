var time = "";
var inputValue = "";

function openNav() {
  document.getElementById("dropcontent").style.visibility = "visible";
}

function closeNav() {
  document.getElementById("dropcontent").style.visibility = "hidden";
}

function addTask(){
//var task = document.getElementById("myInput").value;
console.log(inputValue);
if (time == "12:00"){
  document.getElementById("twelve dash").innerHTML = inputValue;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("twelve dash").style.transform = "rotate(-90deg)";
}
else if (document.getElementById("tim").value == "1:00"){
  document.getElementById("one dash").innerHTML = task;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("one dash").style.transform = "rotate(25.5deg)";
}
else if (document.getElementById("tim").value == "2:00"){
  document.getElementById("two dash").innerHTML = task;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("two dash").style.transform = "rotate(55.5deg)";
}
else if (document.getElementById("tim").value == "3:00"){
  document.getElementById("three dash").innerHTML = task;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("three dash").style.transform = "rotate(90deg)";
}
else if (document.getElementById("tim").value == "4:00"){
  document.getElementById("four dash").innerHTML = task;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("four dash").style.transform = "rotate(-90deg)";
}
else if (document.getElementById("tim").value == "5:00"){
  document.getElementById("five dash").innerHTML = task;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("five dash").style.transform = "rotate(25.5deg)";
}
else if (document.getElementById("tim").value == "6:00"){
  document.getElementById("six dash").innerHTML = task;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("six dash").style.transform = "rotate(-90deg)";
}
else if (document.getElementById("tim").value == "7:00"){
  document.getElementById("seven dash").innerHTML = task;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("seven dash").style.transform = "rotate(25.5deg)";
}
else if (document.getElementById("tim").value == "8:00"){
  document.getElementById("eight dash").innerHTML = task;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("eight dash").style.transform = "rotate(55.5deg)";
}
else if (document.getElementById("tim").value == "9:00"){
  document.getElementById("nine dash").innerHTML = task;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("nine dash").style.transform = "rotate(90deg)";
}
else if (document.getElementById("tim").value == "10:00"){
  document.getElementById("ten dash").innerHTML = task;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("ten dash").style.transform = "rotate(-55.5deg)";
}
else if (document.getElementById("tim").value == "11:00"){
  document.getElementById("eleven dash").innerHTML = task;
  //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
  document.getElementById("eleven dash").style.transform = "rotate(-25.5deg)";
}
}

//function time(){
//  alert("What time do you want to do this task?")
  //takes input for hour and am or pm (using select)
//}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");  //works
  } else {
    document.getElementById("list").appendChild(li);
    time = prompt("What time do you want to do this task? (ex. 5:00, 6:00)");
    console.log(time);
    var when = prompt("am or pm?")
    alert("You want to to complete" + " " + inputValue + " at " + time + when);
    //takes input for hour and am or pm (using select)
  }

  addTask();
  loadClock();

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  myNodelist[i].appendChild(button);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
     div.style.display = "none";
  }
}

//doesn't work right now
function line(){
  var lis = document.getElementsById("list").children
  var i;
  for (i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
      var litem = this;
      litem.style.textDecoration = "line-through";
    }
}
}

function loadClock() {
// grab the hands
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const date = document.querySelector('.date');
date.textContent = new Date().getDate();
function setDate() {
  const now = new Date();
  // seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // minutes
  const minutes = now.getMinutes();
  const minutesDegree = ((minutes/60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  // hours
  const hours = now.getHours();
  const hoursDegree = ((hours/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setDate, 1000);
};

window.onload = loadClock();
