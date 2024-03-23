let nameEle = document.getElementById('name');
let emailEle = document.getElementById('email');
let passwordEle = document.getElementById('password')
let nameErrorMsg = document.getElementById('nameErrMsg');
let emailErrorMsg = document.getElementById('emailErrMsg');
let passwordErrorMsg = document.getElementById('passwdErrorMsg')
let addUserForm = document.getElementById('addUserForm');
let formData = {
    name: "",
    email: "",
    password: "",
};
nameEle.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        nameErrorMsg.textContent = "Required*";
    } else {
        nameErrorMsg.textContent = "";
    }
});
emailEle.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        emailErrorMsg.textContent = "Required*";
    } else {
        emailErrorMsg.textContent = "";
    }
});

passwordEle.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        passwordErrorMsg.textContent = "Required*";
    } else {
        passwordErrorMsg.textContent = "";
    }
});
addUserForm.addEventListener("submit", function(event){
    event.preventDefault();
})