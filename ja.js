function keydownLogInPassWord () {
    passWordInputMessage[0].innerHTML = ''
}

function blurSignUpPassWord (event) {
    let inputValue = event.target.value
    if (inputValue.length < 8 || inputValue.length > 20){
        passWordInputMessage[1].innerHTML = 'Password characters must be between 8 and 20!'
        passWordInputMessage[1].style.color = '#DD5746'
        passWordInputMessage[1].style.fontSize = '10px'
    }
    if (inputValue.length === 0) {
        passWordInputMessage[1].innerHTML = 'This field can not be empty!'
    }
}

function keydownSignUpPassWord () {
    passWordInputMessage[1].innerHTML = ''
}

// prevent submit
function preventSubmit(event) {
    event.preventDefault()
}

// fade loading page
function fadePage () {
    LoaderElem.classList.add('hidden')
}

signUpSpan.addEventListener('click', moveToLeft)
logInSpan.addEventListener('click', moveToRight)
inputUserName[0].addEventListener('blur', blurLoginUserName)
inputUserName[0].addEventListener('keydown', keydownLogInUserName)
inputUserName[1].addEventListener('blur', blurSignUpUserName)
inputUserName[1].addEventListener('keydown', keydownSignUpUserName)
inputPassword[0].addEventListener('blur', blurLoginPassWord)
inputPassword[0].addEventListener('keydown', keydownLogInPassWord)
inputPassword[1].addEventListener('blur', blurSignUpPassWord)
inputPassword[1].addEventListener('keydown', keydownSignUpPassWord)
signUpForm.addEventListener('submit', preventSubmit)
logInForm.addEventListener('submit', preventSubmit)
window.addEventListener('load',fadePage)
