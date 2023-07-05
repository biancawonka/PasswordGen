
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
var password = "";
for (var i = 0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * charset.length);
  password += charset[randomIndex];
}
return password;
}

// Function to display the generated password on the web page
function showGeneratedPassword() {
var passwordLength = 10; // Length of the generated password
var generatedPassword = generatePassword(passwordLength);
document.getElementById("password").textContent = generatedPassword;
}