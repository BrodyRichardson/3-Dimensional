/**
    Author: Brody Richardson
    Course: CISP 220
    Date: 11/18/2022
*/
function FahrenheitToCelsius(degree) {
    return (degree - 32) / 1.8;


}
function CelsiusToFahrenheit(degree) {
    return (degree * 1.8) + 32;
}

let cValue = document.getElementById("cValue");
let fValue = document.getElementById("fValue");

cValue.addEventListener("change", function () {
  let cDegree = cValue.value;
  fValue.value = CelsiusToFahrenheit(cDegree);
});
fValue.addEventListener("change", function () {
  let fDegree = fValue.value;
  cValue.value = FahrenheitToCelsius(fDegree);
});
