let today = new Date();

const dateObj = document.getElementById("date");
const hourObj = document.getElementById("hour");
const greeting = document.getElementById("greeting");

function setDate() {
  dateObj.innerText = `${today.getDate()} ${today.toLocaleString("default", {
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

  if (hour >= startOfMorning && hour < startOfMidday) {
    greeting.innerText = `${MorningGreetings} ${username}!`;
  } else if (hour >= startOfMidday && hour < startOfEvening) {
    greeting.innerText = `${MiddayGreetings} ${username}!`;
  } else if (hour >= startOfEvening && hour < startOfNight)  {
    greeting.innerText = `${EveningGreetings} ${username}!`;
  } else {
  greeting.innerText = `${NightGreetings} ${username}!`;
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
