// fetch("https://ipinfo.io/json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (myJson) {
//     console.log(myJson);
//     document.querySelector("#hours").innerHTML = myJson.ip;
//   })
//   .catch(function (error) {
//     console.log("Error: " + error);
//   });


// let xhr = new XMLHttpRequest();
// xhr.open('GET', "https://ipinfo.io/json", true);
// xhr.send();
//
// xhr.addEventListener("readystatechange", processRequest, false);
// function processRequest(e) {
//     if (xhr.readyState == 4) {
//       let response = JSON.parse(xhr.responseText);
//       document.querySelector("#hours").innerHTML = xhr.responseText;
//     }
// }
// document.querySelector(".totalHours").innerHTML = "";



function goToHomePage() {
  window.location.href = "http://codeandcube.com";

}

function goToSignUpPage() {
  window.location.href = "sign-up";
}
