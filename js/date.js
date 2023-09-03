let today = new Date();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateObj = document.getElementById("date");
const hourObj = document.getElementById("hour");
const greeting = document.getElementById("greeting");

function setDate() {
  dateObj.innerText = `${today.getDay() + 1} ${
    monthNames[today.getMonth()]
  } ${today.getFullYear()}`;
}

function setHour() {
  hourObj.innerText = `${today.getHours()}:${("0" + today.getMinutes()).slice(
    -2
  )}`;
  // hourObj.innerText = `${today.getHours()}:${('0' + today.getMinutes()).slice(-2)}:${('0' + today.getSeconds()).slice(-2)}`
}

function setGreeting() {
  const hour = today.getHours();

  if (hour >= 6 && hour < 12) {
    greeting.innerText = "Good morning my Guest!";
  } else if (hour >= 12 && hour < 17) {
    greeting.innerText = "Good afternoon my Guest!";
  } else {
    greeting.innerText = "Good evening my Guest!";
  }
}

function displayClock() {
  today = new Date();
  setDate();
  setHour();
  setGreeting();
  setTimeout(displayClock, 500);
}

window.onload = displayClock();
