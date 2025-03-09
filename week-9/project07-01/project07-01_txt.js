"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Joe
      Date:   8-March-2025

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   // Clear previous feedback
   feedback.textContent = "";
   feedback.style.color = "red";

   // Password validation rules
   let pwdPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   
   if (!pwdPattern.test(pwd)) {
      feedback.textContent = "Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character.";
      e.preventDefault(); // Prevent form submission
   }
});
