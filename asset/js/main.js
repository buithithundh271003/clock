setInterval(setClock, 1000);
let secondEl = document.querySelector("#data-second");
let minuteEl = document.querySelector("#data-minute");
let hourEl = document.querySelector("#data-hour");
function setClock() {
  let upadater = new Date();
  let seconds = upadater.getSeconds() / 60;
  console.log(seconds);
  let minutes = (upadater.getMinutes() + seconds) / 60;
  let hourss = (upadater.getHours() + minutes) / 12;
  SetRotation(secondEl, seconds);

  SetRotation(minuteEl, minutes);
  SetRotation(hourEl, hourss);
}

function SetRotation(element, rotationR) {
  element.style.setProperty("--rotation", rotationR * 360);
}
