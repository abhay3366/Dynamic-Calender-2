// for current date_str class
var dt = new Date();
document.getElementById("date_str").innerHTML = dt.toDateString();

// for month class
var month = [
  "Januaray",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novenber",
  "December"
];
document.getElementById("month").innerHTML = month[dt.getMonth()];
// for endDate
var endDate = new Date(
  dt.getFullYear(),
  dt.getMonth()+1,
  0
).getDate();
// for previous date
var prevDate = new Date(
  dt.getFullYear(),
  dt.getMonth(),
  0
).getDate();
// for active Date
var today = new Date().getDate();
// for date
dt.setDate(1);
var day = dt.getDay();
var cells = "";
for(x = day;x>0;x--){
  cells += "<div class='prev_date'>" + (prevDate-x+1) +  "</div>" 
}
for(i = 1;i <= endDate;i++){
  // cells+= "<div>" +i+ "</div>";
  if(i == today){
    cells+= "<div class='today'>" + i + "</div>";
  }
  else{
    cells+= "<div>" + i + "</div>";
  }
}
document.getElementsByClassName("days")[0].innerHTML = cells;
