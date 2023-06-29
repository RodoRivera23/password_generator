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
    var newPassword = "";

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
        //add the lowercase options to the string
        passOptions += options.lowerCase; 

        //insert a random character from the lowecase options to the chosen characters array
        chosenChars.push(SelectRandomChar(options.lowerCase));
    }

    if (uppercase) {
        //add the upper case options to the string
        passOptions += options.upperCase;

        //insert a random character from the uppercase options to the chosen characters array
        chosenChars.push(SelectRandomChar(options.upperCase));
    }

    if (numbers) {
        //add the numbers options to the string
        passOptions += options.numbers;

        //insert a random number to the chosen characters array
        chosenChars.push(SelectRandomChar(options.numbers));
    }

    if (specialChars) {
        //add the special characters to the string
        passOptions += options.specialChars;

        //add a random special character to the chosen character array
        chosenChars.push(SelectRandomChar(options.specialChars));
    }

    //while the lenght of the chosen characters array is less than the input given by the user
    while (chosenChars.length < passLenght) {
        //add a random character from the string created with the selected options
        chosenChars.push(SelectRandomChar(passOptions));
    }

    //concatenate all the characters in the chosen chars array to a string
    for (i = 0; i < chosenChars.length; i++) {
        newPassword += chosenChars[i];
    }

    return newPassword;
}

function SelectRandomChar(chars) {
    return chars[Math.floor(Math.random() * chars.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);