//var submit = $(".submit")
//var AM_9 = $("#9am")
$("#9am").text(document.getElementById("9am").innerHTML = localStorage.getItem("9time"))



var date = moment().format("MMMM Do YYYY")

$("#currentDay").text(date)



//submit.addEventListener("click", logged)

function logged(){
    var content = $("#9am").html()
console.log("S", content)
localStorage.setItem("9time", content)
//$("#9block").css("backgroundColor", "green")
}

var time = moment().format("h")

if (time == 9){
    $("#9block").css("backgroundColor", "green")
}
if (time == 10){
    $("#10block").css("backgroundColor", "green")
}
if (time == 11){
    $("#11block").css("backgroundColor", "green")
}
if (time == 12){
    $("#12block").css("backgroundColor", "green")
}
if (time == 1){
    $("#1block").css("backgroundColor", "green")
}
if (time == 2){
    $("#2block").css("backgroundColor", "green")
}
if (time == 3){
    $("#3block").css("backgroundColor", "green")
}
if (time == 4){
    $("#4block").css("backgroundColor", "green")
}
if (time == 5){
    $("#5block").css("backgroundColor", "green")
}