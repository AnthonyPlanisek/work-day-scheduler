



var date = moment().format("MMMM Do YYYY")

$("#currentDay").text(date)



//collects user input to saved and display later

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

//changes the color of the background depending on the time
//and clears local storage after time has passed

var time = moment().format("h")
console.log("y", time)
if (time == 9){
    $("#9block").css("backgroundColor", "red")
    $("#10block").css("backgroundColor", "green")
    $("#11block").css("backgroundColor", "green")
    $("#12block").css("backgroundColor", "green")
    $("#1block").css("backgroundColor", "green")
    $("#2block").css("backgroundColor", "green")
    $("#3block").css("backgroundColor", "green")
    $("#4block").css("backgroundColor", "green")
    $("#5block").css("backgroundColor", "green")
}
if (time == 10){
    $("#9block").css("backgroundColor", "grey")
    $("#10block").css("backgroundColor", "red")
    $("#11block").css("backgroundColor", "green")
    $("#12block").css("backgroundColor", "green")
    $("#1block").css("backgroundColor", "green")
    $("#2block").css("backgroundColor", "green")
    $("#3block").css("backgroundColor", "green")
    $("#4block").css("backgroundColor", "green")
    $("#5block").css("backgroundColor", "green")
    localStorage.removeItem("9time")
}
if (time == 11){
    $("#9block").css("backgroundColor", "grey")
    $("#10block").css("backgroundColor", "grey")
    $("#11block").css("backgroundColor", "red")
    $("#12block").css("backgroundColor", "green")
    $("#1block").css("backgroundColor", "green")
    $("#2block").css("backgroundColor", "green")
    $("#3block").css("backgroundColor", "green")
    $("#4block").css("backgroundColor", "green")
    $("#5block").css("backgroundColor", "green")
    localStorage.removeItem("9time")
    localStorage.removeItem("10time")
}
if (time == 12){
    $("#9block").css("backgroundColor", "grey")
    $("#10block").css("backgroundColor", "grey")
    $("#11block").css("backgroundColor", "grey")
    $("#12block").css("backgroundColor", "red")
    $("#1block").css("backgroundColor", "green")
    $("#2block").css("backgroundColor", "green")
    $("#3block").css("backgroundColor", "green")
    $("#4block").css("backgroundColor", "green")
    $("#5block").css("backgroundColor", "green")
    localStorage.removeItem("9time")
    localStorage.removeItem("10time")
    localStorage.removeItem("11time")
}
if (time == 1){
    $("#9block").css("backgroundColor", "grey")
    $("#10block").css("backgroundColor", "grey")
    $("#11block").css("backgroundColor", "grey")
    $("#12block").css("backgroundColor", "grey")
    $("#1block").css("backgroundColor", "red")
    $("#2block").css("backgroundColor", "green")
    $("#3block").css("backgroundColor", "green")
    $("#4block").css("backgroundColor", "green")
    $("#5block").css("backgroundColor", "green")
    localStorage.removeItem("9time")
    localStorage.removeItem("10time")
    localStorage.removeItem("11time")
    localStorage.removeItem("12time")
}
if (time == 2){
    $("#9block").css("backgroundColor", "grey")
    $("#10block").css("backgroundColor", "grey")
    $("#11block").css("backgroundColor", "grey")
    $("#12block").css("backgroundColor", "grey")
    $("#1block").css("backgroundColor", "grey")
    $("#2block").css("backgroundColor", "red")
    $("#3block").css("backgroundColor", "green")
    $("#4block").css("backgroundColor", "green")
    $("#5block").css("backgroundColor", "green")
    localStorage.removeItem("9time")
    localStorage.removeItem("10time")
    localStorage.removeItem("11time")
    localStorage.removeItem("12time")
    localStorage.removeItem("1time")
}
if (time == 3){
    $("#9block").css("backgroundColor", "grey")
    $("#10block").css("backgroundColor", "grey")
    $("#11block").css("backgroundColor", "grey")
    $("#12block").css("backgroundColor", "grey")
    $("#1block").css("backgroundColor", "grey")
    $("#2block").css("backgroundColor", "grey")
    $("#3block").css("backgroundColor", "red")
    $("#4block").css("backgroundColor", "green")
    $("#5block").css("backgroundColor", "green")
    localStorage.removeItem("9time")
    localStorage.removeItem("10time")
    localStorage.removeItem("11time")
    localStorage.removeItem("12time")
    localStorage.removeItem("1time")
    localStorage.removeItem("2time")
}
if (time == 4){
    $("#9block").css("backgroundColor", "grey")
    $("#10block").css("backgroundColor", "grey")
    $("#11block").css("backgroundColor", "grey")
    $("#12block").css("backgroundColor", "grey")
    $("#1block").css("backgroundColor", "grey")
    $("#2block").css("backgroundColor", "grey")
    $("#3block").css("backgroundColor", "grey")
    $("#4block").css("backgroundColor", "red")
    $("#5block").css("backgroundColor", "green")
    localStorage.removeItem("9time")
    localStorage.removeItem("10time")
    localStorage.removeItem("11time")
    localStorage.removeItem("12time")
    localStorage.removeItem("1time")
    localStorage.removeItem("2time")
    localStorage.removeItem("3time")
}
if (time == 5){
    $("#9block").css("backgroundColor", "grey")
    $("#10block").css("backgroundColor", "grey")
    $("#11block").css("backgroundColor", "grey")
    $("#12block").css("backgroundColor", "grey")
    $("#1block").css("backgroundColor", "grey")
    $("#2block").css("backgroundColor", "grey")
    $("#3block").css("backgroundColor", "grey")
    $("#4block").css("backgroundColor", "grey")
    $("#5block").css("backgroundColor", "red")
    localStorage.removeItem("9time")
    localStorage.removeItem("10time")
    localStorage.removeItem("11time")
    localStorage.removeItem("12time")
    localStorage.removeItem("1time")
    localStorage.removeItem("2time")
    localStorage.removeItem("3time")
    localStorage.removeItem("4time")
}
if (time <= 6){
    $("#9block").css("backgroundColor", "grey")
    $("#10block").css("backgroundColor", "grey")
    $("#11block").css("backgroundColor", "grey")
    $("#12block").css("backgroundColor", "grey")
    $("#1block").css("backgroundColor", "grey")
    $("#2block").css("backgroundColor", "grey")
    $("#3block").css("backgroundColor", "grey")
    $("#4block").css("backgroundColor", "grey")
    $("#5block").css("backgroundColor", "grey")
    localStorage.clear()
}

//displays user inputs after screen refresh 

$("#9am").text(document.getElementById("9am").innerHTML = localStorage.getItem("9time"))
$("#10am").text(document.getElementById("10am").innerHTML = localStorage.getItem("10time"))
$("#11am").text(document.getElementById("11am").innerHTML = localStorage.getItem("11time"))
$("#12pm").text(document.getElementById("12pm").innerHTML = localStorage.getItem("12time"))
$("#1pm").text(document.getElementById("1pm").innerHTML = localStorage.getItem("1time"))
$("#2pm").text(document.getElementById("2pm").innerHTML = localStorage.getItem("2time"))
$("#3pm").text(document.getElementById("3pm").innerHTML = localStorage.getItem("3time"))
$("#4pm").text(document.getElementById("4pm").innerHTML = localStorage.getItem("4time"))
$("#5pm").text(document.getElementById("5pm").innerHTML = localStorage.getItem("5time"))