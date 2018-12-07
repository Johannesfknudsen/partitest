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

var slider0 = document.getElementById("range0");
var slider1 = document.getElementById("range1");
var slider2 = document.getElementById("range2");
var slider3 = document.getElementById("range3");
var slider4 = document.getElementById("range4");
var slider5 = document.getElementById("range5");
var slider6 = document.getElementById("range6");
var a0, a1, a2, a3, a4, a5, a6;

slider0.oninput = function() {
    // slider0.innerHTML = this.value;
    a0 = slider0.value;
};
slider1.oninput = function() {
    a1 = slider1.value;
};
slider2.oninput = function() {
    a2 = slider2.value;
};
slider3.oninput = function() {
    a3 = slider3.value;
};
slider4.oninput = function() {
    a4 = slider4.value;
};
slider5.oninput = function() {
    a5 = slider5.value;
};
slider6.oninput = function() {
    a6= slider6.value;
};
slider6.oninput = function() {
    a6 = slider6.value;
};
while (true) {
  document.getElementById("rcorners").innerHTML = slider0.value;
}
document.getElementById("rcorners").innerHTML = slider0.value;
answer.innerHTML = slider0; // Display the default slider value

// slider0.onFocus = function() {
//  var total = slider0 + slider1 + slider2 + slider3 + slider4 + slider5 + slider6;
// };
// var total = slider0.value + slider1.value + slider2.value + slider3.value + slider4.value + slider5.value + slider6.value + slider7.value;

// var output = document.getElementById("rcorners");
// slider0.oninput = document.getElementById("rcorners").innerHTML = slider0;
