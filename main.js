// document.cookie = "username=";
//
// var point = 0;
// // form
//
// function myFunction() {
//   // Get the checkbox
//   var checkBox = document.getElementById("myCheck");
//
//   // If the checkbox is checked, display the output text
//   if (checkBox.checked == true){
//     point += 1;
//   } else {
//     point -= 1;
//   }
// }

// Get value from sliders
answer = document.getElementsByClassName('answer');

var slider0 = document.getElementById("range0").valueAsNumber;
var slider1 = document.getElementById("range1").valueAsNumber;
var slider2 = document.getElementById("range2").valueAsNumber;
var slider3 = document.getElementById("range3").valueAsNumber;
var slider4 = document.getElementById("range4").valueAsNumber;
var slider5 = document.getElementById("range5").valueAsNumber;
var slider6 = document.getElementById("range6").valueAsNumber;
answer.onFocus = function() {
  var total = slider0 + slider1 + slider2 + slider3 + slider4 + slider5 + slider6;
};
// var total = slider0.value + slider1.value + slider2.value + slider3.value + slider4.value + slider5.value + slider6.value + slider7.value;

// var output = document.getElementById("rcorners");
// slider0.oninput = document.getElementById("rcorners").innerHTML = slider0;
// output.innerHTML = slider0.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// };

// slider0.oninput = function() {
//    // output.innerHTML = this.value;
//    document.getElementById("rcorners").innerHTML = slider0;
// };
