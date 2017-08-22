var mondaylist = [];
var tuesdaylist = [];
var wednesdaylist = [];
var thursdaylist = [];
var fridaylist = [];
var saturdaylist = [];
var sundaylist = [];
var day = "";
var time = "";
var task = "";

function printTask(list,day){
  list.sort();
  document.getElementById(day).innerHTML = "";
  for (i=0; i < list.length; i++){
    document.getElementById(day).innerHTML = document.getElementById(day).innerHTML + "<br>" + "on" + " " + day + " " + "at" + " " + list[i] + " " + task;
  }
}

function weekFunction() {
    day = prompt("Enter the day you would like to complete the task", "monday");
    time = prompt("Enter the time you would like to complete the task", "5:00");
    task = prompt("Enter the task you would like ot complete", "write essay");

    if (day == ("monday")){
      mondaylist.push(time);
      printTask(mondaylist,"monday");
    }
    if (day == ("tuesday")){
      tuesdaylist.push(time);
      printTask(tuesdaylist,"tuesday");
    }
    if (day == ("wednesday")){
      wednesdaylist.push(time);
      printTask(wednesdaylist,"wednesday");
    }
    if (day == ("thursday")){
      thursdaylist.push(time);
      printTask(thursdaylist,"thursday");
    }
    if (day == ("friday")){
      fridaylist.push(time);
      printTask(fridaylist,"friday");
    }
    if (day == ("saturday")){
      saturdaylist.push(time);
      printTask(saturdaylist,"saturday");
    }
    if (day == ("sunday")){
      sundaylist.push(time);
      printTask(sundaylist,"sunday");
    }
}
