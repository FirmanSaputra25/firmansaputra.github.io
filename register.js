const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassowrd = document.getElementById("c-password");

//show error message
function showError(input, message) {
    const formControl = input.parentElement;

    formControl.className = "input error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}
//show Succes Message
function showError(input) {
    const formControl = input.parentElement;

    formControl.classList.add = ("success");
}
// Check Required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}
//get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(i);
}
//Check input lenght
function checkLenghth(input, min, max) {
    if (input.value.lenght < min) {
        showError(
            input, `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}
// check E-mail Is Valid
function checkEmail(input) {
    const re = newFunction()
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "E-mail is not valid");
    }

    function newFunction() {
        return /^(([^<>()/[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\))|(());/;
    }
}

//Check password Match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Password do not match");
    }
}

form.addEventListener("submit", (e) => ) {
    e.preventDefault();

    checkRequired([username, email, password, cPassword]);
    checkLenght(username, 3, 14);
    checkLenght(password, 8, 25);
    checkEmail(mail);
    checkPasswordMatch(password, cPassword);
}