const subscribeBtn = document.getElementById("subscribeBtn")
const dismissBtn = document.getElementById("dismissBtn")
const signUpBox = document.querySelector(".sign-up")
const successBox = document.querySelector(".success-message")
const inputEmail = document.getElementById("inputEmail")
const errorMessage = document.getElementById("errorMessage")
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
const userEmail = document.getElementById("userEmail")

subscribeBtn.addEventListener("click", ()=>{
    if(inputEmail.value.length !== 0 && emailRegex.test(inputEmail.value)){
        successBox.classList.add("active")
        signUpBox.classList.add("disable")
        userEmail.innerHTML = inputEmail.value
    }
    else {
        errorMessage.innerHTML = "Valid email required"
        inputEmail.classList.add("error-input")
        setTimeout(()=>{
            errorMessage.innerHTML = ""
            inputEmail.classList.remove("error-input")
        },3000)
    }
})

dismissBtn.addEventListener("click", ()=>{
    successBox.classList.remove("active")
    signUpBox.classList.remove("disable")
})