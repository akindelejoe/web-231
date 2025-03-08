"use strict";
/* JavaScript 7th Edition
   Chapter 6 - Hands-On Project 6-3
   Author: Joe
   Filename: project06-03.js
*/

document.addEventListener("DOMContentLoaded", function () {
    let useShipCheckbox = document.getElementById("useShip");
    let form = document.getElementById("billShip");
    let errorBox = document.getElementById("errorBox");

    // Function to copy shipping fields to billing
    function copyShippingToBilling() {
        if (useShipCheckbox.checked) {
            document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
            document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
            document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
            document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
            document.getElementById("cityBill").value = document.getElementById("cityShip").value;
            document.getElementById("stateBill").value = document.getElementById("stateShip").value;
            document.getElementById("countryBill").value = document.getElementById("countryShip").value;
            document.getElementById("codeBill").value = document.getElementById("codeShip").value;
        } else {
            document.getElementById("firstnameBill").value = "";
            document.getElementById("lastnameBill").value = "";
            document.getElementById("address1Bill").value = "";
            document.getElementById("address2Bill").value = "";
            document.getElementById("cityBill").value = "";
            document.getElementById("stateBill").value = "";
            document.getElementById("countryBill").value = "United States";
            document.getElementById("codeBill").value = "";
        }
    }

    // Attach event listener to checkbox
    useShipCheckbox.addEventListener("change", copyShippingToBilling);

    // Form validation before submission
    form.addEventListener("submit", function (event) {
        errorBox.textContent = ""; // Clear previous errors
        let requiredFields = form.querySelectorAll("input[required]");
        let valid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                valid = false;
                field.style.border = "2px solid red";
            } else {
                field.style.border = "";
            }
        });

        if (!valid) {
            event.preventDefault(); // Prevent form submission
            errorBox.textContent = "Please fill out all required fields.";
            errorBox.style.color = "red";
        }
    });
});
