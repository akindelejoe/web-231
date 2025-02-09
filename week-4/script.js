
let gameResults = ["Win", "Loss", "Tie", "Win", "Loss", "Win"];


let outputDiv = document.getElementById("output");


gameResults.forEach((result, index) => {
    let resultElement = document.createElement("p");
    resultElement.textContent = `Game ${index + 1}: ${result}`;

  
    if (result === "Win") {
        resultElement.style.color = "green";
    } else if (result === "Loss") {
        resultElement.style.color = "red";
    } else {
        resultElement.style.color = "gray";
    }

    outputDiv.appendChild(resultElement);
});
