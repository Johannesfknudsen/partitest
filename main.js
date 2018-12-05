// document.cookie = "username=";

/* På baggrund af https://www.altinget.dk/images/article/150492/25806.jpg
Partibogstaver: https://www.ft.dk/da/partier/om-politiske-partier/partigruppernes-bogstaver
A - Socialdemokratiet
B - Radikale Venstre
C - Det Konservative Folkeparti
D - Nye Borgerlige
F - SF ‒ Socialistisk Folkeparti
I - Liberal Alliance
K - Kristendemokraterne
O - Dansk Folkeparti
V - Venstre, Danmarks Liberale Parti
Ø - Enhedslisten ‒ De Rød-Grønne
Å - Alternativet
*/
var partiesFordeling = ["Enhedslisten", "Socialistisk Folkeparti", "Alternativet", "Socialdemokratiet", " Radikale Venstre", "Dansk Folkeparti", "Venstre", "Det Konservative Folkeparti", "Liberal Alliance"];
var partiesValue = ["Alternativet", "Radikale Venstre", "Enhedslisten", "Socialistisk Folkeparti", "Socialdemokratiet", "Det Konservative Folkeparti", "Liberal Alliance", "Venstre", "Dansk Folkeparti"];
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
answer.innerHTML = slider0; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider0.oninput = function() {
  answer.innerHTML = this.value;
};

// slider0.oninput = function() {
//    // output.innerHTML = this.value;
//    document.getElementById("rcorners").innerHTML = slider0;
// };
