// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var passLen;
  var availableChar  = "";

  // Ask for password length
  passLen = prompt("How many characters do you want this password? (8-128)", "8");
    if (passLen < 8 || passLen === null) {
    
    alert("I am sorry, but that is not enough characters. Please try again");
    return;

  } else if (passLen > 128) {

    alert("I am sorry, but that is too many characters. Please try again");
    return;  
    
  }
  else {
    
    // Ask for what characters to put in password
    alert("Please select OK on what to include in your password.");
    var lowercase = confirm("Do you want lowercase letters?");
    var uppercase = confirm("Do you want uppercase letters?");
    var number = confirm("Do you want numbers?");
    var specialChar = confirm("Do you want special characters?");
  
  
    if (lowercase === false && uppercase === false && number === false && specialChar === false) {
  
      alert("I am sorry, but you did not choose any criteria for your password.  Please try again");
      return;
      
    } else {
      
      var choices = "";

      if (lowercase != false) {
        availableChar += "abcdefghijklmnopqrstuvwxyz" ;
        choices += "lowercase \n";
      }

      if (uppercase != false) {
        availableChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        choices += "uppercase \n";
      }

      if (number != false) {
        availableChar +="0123456789";
        choices += "number \n";
      }

      if (specialChar != false) {
        availableChar += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        choices += "special characters";
      }

      // Notify what they chose
      alert("You have selected: \n" + choices);
     
    };

  };

  // Create the unique password based on parameters
  for (var i = 0; i < passLen; i++) {

      password += availableChar.charAt(Math.floor(Math.random() * availableChar.length));
  };
    
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

