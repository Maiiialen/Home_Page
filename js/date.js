window.onload = displayClock();

function setDate(dateObj, today, monthNames) {
    dateObj.innerText = `${today.getDay() + 1} ${monthNames[today.getMonth()]} ${today.getFullYear()}`
}

function setHour(hourObj, today) {
    hourObj.innerText = `${today.getHours()}:${('0' + today.getMinutes()).slice(-2)}`
}

function setGreeting(greeting, today) {
    const hour = today.getHours()

    if (hour >= 6 && hour < 12) {
        greeting.innerText = 'Good morning my Guest!';
    } else if (hour >= 12 && hour < 17) {
        greeting.innerText = 'Good afternoon my Guest!';
    } else {
        greeting.innerText = 'Good evening my Guest!';
    }
}

function displayClock() {
    const today = new Date()

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    const dateObj = document.getElementById("date")
    const hourObj = document.getElementById("hour")
    const greeting = document.getElementById("greeting")

    setTimeout(() => {
        setDate(dateObj, today, monthNames)
        setHour(hourObj, today)
        setGreeting(greeting, today)
    }, 1000);
}
