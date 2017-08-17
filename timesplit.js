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
