/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Joe Akindele
      Date:   

      Filename: project02-02.js
 */
 
// Function to handle form submission
     //Get input values
     function displayContactInfo(){
      let name = document.getElementById("name").value
      let email = document.getElementById("email").value
      let phone = document.getElementById("phone").value;
  
      // Display values in an alert box
      alert("Contact Information:\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Phone: " + phone);
}

  
  // Add event listener to the submit button
  document.getElementById("submit").addEventListener("click", displayContactInfo);
  


