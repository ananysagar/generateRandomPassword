// Function to generate a random password
function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const passwordLength = 12; // Example length
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Function to handle the button click
function handleButtonClick() {
    const passwordField = document.querySelector(".pwd-field");
    const newPassword = generatePassword();
    passwordField.value = newPassword; // Set the generated password in the input field
}

// Attach the onclick handler to the button
document.querySelector(".generate-btn").addEventListener("click", handleButtonClick);

function handleCopyButton() {
    const textToCopy =  document.querySelector(".pwd-field").value;
    navigator.clipboard.writeText(textToCopy)
    alert("Password copied to clipboard!");
}
document.querySelector(".copy-btn").addEventListener("click",handleCopyButton);