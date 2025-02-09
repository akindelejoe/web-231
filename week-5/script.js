let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let temperatures = [72, 75, 78, 80, 76, 74, 73];


let outputDiv = document.getElementById("output");
let tableHTML = "<table><tr><th>Day</th><th>Temperature (°F)</th></tr>";


for (let i = 0; i < weekDays.length; i++) {
    tableHTML += `<tr><td>${weekDays[i]}</td><td>${temperatures[i]}°</td></tr>`;
}

tableHTML += "</table>";
outputDiv.innerHTML = tableHTML;


let avgTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;

let message = avgTemp > 75 ? "It's a warm week!" : "The weather is cool this week.";
outputDiv.innerHTML += `<p><strong>${message}</strong></p>`;
