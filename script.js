//var submit = $(".submit")
//var AM_9 = $("#9am")
$("#9am").text(document.getElementById("9am").innerHTML = localStorage.getItem("9time"))
$("#10am").text(document.getElementById("9am").innerHTML = localStorage.getItem("10time"))
$("#11am").text(document.getElementById("9am").innerHTML = localStorage.getItem("11time"))
$("#12pm").text(document.getElementById("9am").innerHTML = localStorage.getItem("12time"))
$("#1pm").text(document.getElementById("9am").innerHTML = localStorage.getItem("1time"))
$("#2pm").text(document.getElementById("9am").innerHTML = localStorage.getItem("2time"))
$("#3pm").text(document.getElementById("9am").innerHTML = localStorage.getItem("3time"))
$("#4pm").text(document.getElementById("9am").innerHTML = localStorage.getItem("4time"))
$("#5pm").text(document.getElementById("9am").innerHTML = localStorage.getItem("5time"))



var date = moment().format("MMMM Do YYYY")

$("#currentDay").text(date)



//submit.addEventListener("click", logged)

function logged(){
    var content9 = $("#9am").html()
console.log("S", content9)
localStorage.setItem("9time", content9)

    var content10 = $("#10am").html()
console.log("S", content10)
localStorage.setItem("10time", content10)

    var content11 = $("#11am").html()
console.log("S", content11)
localStorage.setItem("11time", content11)

    var content12 = $("#12pm").html()
console.log("S", content12)
localStorage.setItem("12time", content12)

    var content1 = $("#1pm").html()
console.log("S", content1)
localStorage.setItem("1time", content1)

    var content2 = $("#2pm").html()
console.log("S", content2)
localStorage.setItem("2time", content2)

    var content3 = $("#3pm").html()
console.log("S", content3)
localStorage.setItem("3time", content3)

    var content4 = $("#4pm").html()
console.log("S", content4)
localStorage.setItem("4time", content4)

    var content5 = $("#5pm").html()
console.log("S", content5)
localStorage.setItem("5time", content5)
}

var time = moment().format("h")

if (time == 9){
    $("#9block").css("backgroundColor", "red")
    $("#10block").css("backgroundColor", "green")
}
if (time == 10){
    $("#10block").css("backgroundColor", "red")
}
if (time == 11){
    $("#11block").css("backgroundColor", "red")
}
if (time == 12){
    $("#12block").css("backgroundColor", "red")
}
if (time == 1){
    $("#1block").css("backgroundColor", "red")
    $("#9block").css("backgroundColor", "grey")
    $("#10block").css("backgroundColor", "grey")
    $("#11block").css("backgroundColor", "grey")
    $("#12block").css("backgroundColor", "grey")
    $("#2block").css("backgroundColor", "green")
    $("#3block").css("backgroundColor", "green")
    $("#4block").css("backgroundColor", "green")
    $("#5block").css("backgroundColor", "green")
}
if (time == 2){
    $("#2block").css("backgroundColor", "red")
}
if (time == 3){
    $("#3block").css("backgroundColor", "red")
}
if (time == 4){
    $("#4block").css("backgroundColor", "red")
}
if (time == 5){
    $("#5block").css("backgroundColor", "red")
}