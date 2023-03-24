const today = new Date()

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

const dateObj = document.getElementById("date")
dateObj.innerText = `${today.getDay() + 1} ${monthNames[today.getMonth()]} ${today.getFullYear()}`


const hourObj = document.getElementById("hour")
hourObj.innerText = `${today.getHours()}:${('0' + today.getMinutes()).slice(-2)}`


const greeting = document.getElementById("greeting")
const hour = today.getHours()

if (hour >= 6 && hour < 12) {
    greeting.innerText = 'Good morning my Guest!';
} else if (hour >= 12 && hour < 17) {
    greeting.innerText = 'Good afternoon my Guest!';
} else {
    greeting.innerText = 'Good evening my Guest!';
}