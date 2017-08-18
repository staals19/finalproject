var time = "";
var inputValue = "";
var when = "";

function openNav() {
  document.getElementById("dropcontent").style.visibility = "visible";
}

function closeNav() {
  document.getElementById("dropcontent").style.visibility = "hidden";
}

function addTask(){
//var task = document.getElementById("myInput").value;
console.log(inputValue);

if (when == "am"){
  if (time == "12:00"){
    document.getElementById("twelve dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("twelve dash").style.transform = "rotate(-90deg)";
    twelve =   document.getElementById("twelve dash");
    console.log(twelve);
  }
  else if (time == "1:00"){
    document.getElementById("one dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("one dash").style.transform = "rotate(25.5deg)";
  }
  else if (time == "2:00"){
    document.getElementById("two dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("two dash").style.transform = "rotate(55.5deg)";
  }
  else if (time == "3:00"){
    document.getElementById("three dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("three dash").style.transform = "rotate(90deg)";
  }
  else if (time == "4:00"){
    document.getElementById("four dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("four dash").style.transform = "rotate(-90deg)";
  }
  else if (time == "5:00"){
    document.getElementById("five dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("five dash").style.transform = "rotate(25.5deg)";
  }
  else if (time == "6:00"){
    document.getElementById("six dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("six dash").style.transform = "rotate(-90deg)";
  }
  else if (time == "7:00"){
    document.getElementById("seven dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("seven dash").style.transform = "rotate(25.5deg)";
  }
  else if (time == "8:00"){
    document.getElementById("eight dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("eight dash").style.transform = "rotate(55.5deg)";
  }
  else if (time == "9:00"){
    document.getElementById("nine dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("nine dash").style.transform = "rotate(90deg)";
  }
  else if (time == "10:00"){
    document.getElementById("ten dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("ten dash").style.transform = "rotate(-55.5deg)";
  }
  else if (time == "11:00"){
    document.getElementById("eleven dash").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("eleven dash").style.transform = "rotate(-25.5deg)";
  }
}

if (when == "pm"){
  if (time == "12:00"){
    document.getElementById("twelve dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("twelve dash2").style.transform = "rotate(-90deg)";
  }
  else if (time == "1:00"){
    document.getElementById("one dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("one dash2").style.transform = "rotate(25.5deg)";
  }
  else if (time == "2:00"){
    document.getElementById("two dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("two dash2").style.transform = "rotate(55.5deg)";
  }
  else if (time == "3:00"){
    document.getElementById("three dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("three dash2").style.transform = "rotate(90deg)";
  }
  else if (time == "4:00"){
    document.getElementById("four dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("four dash2").style.transform = "rotate(-90deg)";
  }
  else if (time == "5:00"){
    document.getElementById("five dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("five dash2").style.transform = "rotate(25.5deg)";
  }
  else if (time == "6:00"){
    document.getElementById("six dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("six dash2").style.transform = "rotate(-90deg)";
  }
  else if (time == "7:00"){
    document.getElementById("seven dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("seven dash2").style.transform = "rotate(25.5deg)";
  }
  else if (time == "8:00"){
    document.getElementById("eight dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("eight dash2").style.transform = "rotate(55.5deg)";
  }
  else if (time == "9:00"){
    document.getElementById("nine dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("nine dash2").style.transform = "rotate(90deg)";
  }
  else if (time == "10:00"){
    document.getElementById("ten dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("ten dash2").style.transform = "rotate(-55.5deg)";
  }
  else if (time == "11:00"){
    document.getElementById("eleven dash2").innerHTML = inputValue;
    //document.getElementById("twelve dash").innerHTML.style.fontSize = "100px";
    document.getElementById("eleven dash2").style.transform = "rotate(-25.5deg)";
  }
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
    when = prompt("am or pm?")
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
      div = this.parentElement;
      console.log(div);
      if (div == twelve){
        twelve.style.visibility = 'hidden';
      }
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

function splitTime(){
  var days_work = prompt("How many days do you want to spend on this?");
  console.log(days_work);
  var hours_work = prompt("How many total hours do you want to work on this?")
  console.log(hours_work);

  if (days_work > 1){
    var total_time = (hours_work/days_work);
    if (total_time<1){
      alert("Spend " + total_time*100 + " minutes each day doing this.");
    }
    else{
      alert("Spend " + total_time + " hours each day doing this.");
    }
  }
  else if (days_work = 1){
    if (hours_work<1){
      alert("Get it done in one go!");
    }
    else {
      var intervals = prompt("That's a lot for one day... do you want the time split into intervals?");
      if (intervals == "yes"){
        hours_work = (hours_work/4)*100;
        alert("Spend " + hours_work + " minutes on this at a time.");
      }
      else {
        alert("Good luck! Make sure you don't overwork yourself.")
      }
    }
  }
  var add = prompt("Do you want this added to your calendar?");
}


window.onload = loadClock();
