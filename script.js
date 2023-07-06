function generatePassword() {

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*";

  var passwordLength = parseInt(prompt("Pick a number from 8 to 128."));


  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }


  var includeLowercase = confirm("Would you like to include lowercase characters?");
  var includeUppercase = confirm("How about some uppercase characters?");
  var includeNumeric = confirm("You definitely want some numeric characters, right?");
  var includeSpecial = confirm("A dash of special characters?");

 
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return;
  }


  var characters = "";
  if (includeLowercase) characters += lowercaseChars;
  if (includeUppercase) characters += uppercaseChars;
  if (includeNumeric) characters += numericChars;
  if (includeSpecial) characters += specialChars;


  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }


  document.getElementById("passwordTextbox").value = password;
}
