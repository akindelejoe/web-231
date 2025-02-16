/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: joe
    

     Filename: js03.js
 */
// Define array of weekdays
// Define array of weekdays
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Select all <th> elements inside <thead>
let headerCells = document.querySelectorAll("#calendar thead th");

// Ensure the number of header cells matches the number of weekdays
if (headerCells.length === 7) {
    weekDays.forEach((day, index) => {
        headerCells[index].textContent = day; // Replace empty <th> with weekday names
    });
} else {
    console.error("Table header structure is incorrect! Check HTML.");
}

// Example game results
const gameResults = {
    "2024-8-3": "Win",
    "2024-8-10": "Loss",
    "2024-8-17": "Postponed",
    "2024-8-24": "Suspended"
};

// Iterate through table cells and update based on game results
document.querySelectorAll("#calendar tbody td").forEach(cell => {
    let dateId = cell.id;
    if (dateId in gameResults) {
        let result = gameResults[dateId];
        cell.insertAdjacentHTML("beforeend", `<p class="${result.toLowerCase()}">${result}</p>`);
    }
});
