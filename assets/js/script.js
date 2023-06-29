const options = {
    numbers: "0123456789",
    specialChars: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {
    var passOptions = "";
    var chosenChars = [];
    var result = "";

    var passLenght = prompt("Please enter a password lenght between 8 and 128");
    var numbers;
    var specialChars;
    var lowercase;
    var uppercase;

    //validates lenght should be larger than 8 and less than 128 characters, also validates if user input is not a number
    if (passLenght < 8 || passLenght > 128 || !passLenght) {
        alert("Password lenght should be 8 characters at least and no longer than 128 characters");
    } else {
        lowercase = confirm("Password should incluide lower case letters?");
        uppercase = confirm("Password should incluide upper case letters?")
        numbers = confirm("Password should incluide numbers?")
        specialChars = confirm("Password should incluide special characters?")
    }

    if (lowercase) {
        passOptions += options.lowerCase; 
        chosenChars.push(SelectRandomChar(options.lowerCase));
    }

    if (uppercase) {
        passOptions += options.upperCase;
        chosenChars.push(SelectRandomChar(options.upperCase));
    }

    if (numbers) {
        passOptions += options.numbers;
        chosenChars.push(SelectRandomChar(options.numbers));
    }

    if (specialChars) {
        passOptions += options.specialChars;
        chosenChars.push(SelectRandomChar(options.specialChars));
    }

    while (chosenChars.length < passLenght) {
        chosenChars.push(SelectRandomChar(passOptions));
    }

    for (i = 0; i < chosenChars.length; i++) {
        result += chosenChars[i];
    }

    return result;
}

function SelectRandomChar(chars) {
    return chars[Math.floor(Math.random() * chars.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);