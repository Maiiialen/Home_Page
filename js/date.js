let today = new Date();

const dateObj = document.getElementById("date");
const hourObj = document.getElementById("hour");
const greeting = document.getElementById("greeting");

function setDate() {
  dateObj.innerText = `${today.getDay() + 1} ${today.toLocaleString("default", {
    month: "long",
  })} ${today.getFullYear()}`;
}

function setHour() {
  if (isTimeWithSeconds)
    hourObj.innerText = `${today.getHours()}:${("0" + today.getMinutes()).slice(
      -2
    )}:${("0" + today.getSeconds()).slice(-2)}`;
  else
    hourObj.innerText = `${today.getHours()}:${("0" + today.getMinutes()).slice(
      -2
    )}`;
}

function setGreeting() {
  const hour = today.getHours();

  if (hour >= 6 && hour < 12) {
    greeting.innerText = `Good morning ${username}!`;
  } else if (hour >= 12 && hour < 17) {
    greeting.innerText = `Good afternoon ${username}!`;
  } else {
    greeting.innerText = `Good evening ${username}!`;
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
