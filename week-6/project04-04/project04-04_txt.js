/*    JavaScript 7th Edition
      Chapter 4
      Project 04-04

      Application to determine change from a cash amount
      Author: Joe
        

      Filename: project04-04.js
*/

"use strict";

// Global variables
let cashBox = document.getElementById("cash");
let billBox = document.getElementById("bill");
let changeBox = document.getElementById("change");

// Event handlers to be run when the cash or bill value changes
cashBox.addEventListener("change", runTheRegister);
billBox.addEventListener("change", runTheRegister);

// Function to reset the values in the web page
function zeroTheRegister() {
   changeBox.value = 0;
   document.getElementById("bill20").innerHTML = 0;
   document.getElementById("bill10").innerHTML = 0;
   document.getElementById("bill5").innerHTML = 0;
   document.getElementById("bill1").innerHTML = 0;
   document.getElementById("coin25").innerHTML = 0;
   document.getElementById("coin10").innerHTML = 0;
   document.getElementById("coin5").innerHTML = 0;
   document.getElementById("coin1").innerHTML = 0;
   document.getElementById("warning").innerHTML = "";
}

// Function to run the cash register
function runTheRegister() {
   zeroTheRegister();
   
   let cashValue = parseFloat(cashBox.value) || 0;
   let billValue = parseFloat(billBox.value) || 0;
   
   let changeValue = cashValue - billValue;  // calculate the change 

   if (changeValue < 0) {
      document.getElementById("warning").innerHTML = "Not enough cash provided!";
      return;
   }

   changeBox.value = formatCurrency(changeValue); // format the change as currency
   calcChange(changeValue); // Determine the units of currency needed for the change
}

// Function to calculate the change by each unit of currency
function calcChange(changeValue) {
   let bill20Amt = determineCoin(changeValue, 20);
   document.getElementById("bill20").innerHTML = bill20Amt;
   changeValue -= bill20Amt * 20;

   let bill10Amt = determineCoin(changeValue, 10);
   document.getElementById("bill10").innerHTML = bill10Amt;
   changeValue -= bill10Amt * 10;

   let bill5Amt = determineCoin(changeValue, 5);
   document.getElementById("bill5").innerHTML = bill5Amt;
   changeValue -= bill5Amt * 5; // Fixed error (was incorrectly 3)

   let bill1Amt = determineCoin(changeValue, 1);
   document.getElementById("bill1").innerHTML = bill1Amt;
   changeValue -= bill1Amt * 1;

   let coin25Amt = determineCoin(changeValue * 100, 25);
   document.getElementById("coin25").innerHTML = coin25Amt;
   changeValue -= coin25Amt * 0.25;

   let coin10Amt = determineCoin(changeValue * 100, 10);
   document.getElementById("coin10").innerHTML = coin10Amt;
   changeValue -= coin10Amt * 0.10;

   let coin5Amt = determineCoin(changeValue * 100, 5);
   document.getElementById("coin5").innerHTML = coin5Amt;
   changeValue -= coin5Amt * 0.05;

   let coin1Amt = Math.round(changeValue * 100);
   document.getElementById("coin1").innerHTML = coin1Amt;
}

// Function to determine the largest whole number of currency units that fit within the cash value
function determineCoin(cashValue, currencyUnit) {
   return Math.floor(cashValue / currencyUnit);
}

// Function to display a numeric value as a text string in the format ##.##
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}
