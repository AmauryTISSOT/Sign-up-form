const firstName = ['firstName', document.querySelector('#firstName'), 'Please type in your first name'];
const lastName = ['lastName',document.querySelector('#lastName'), 'Please type in your last name'];
const email = ['email', document.querySelector('#email'), 'Please enter in a valid Email. ex(johnDoe@email.com)'];
const phoneNumber = ['phoneNumber', document.querySelector('#phoneNumber'), 'Please enter a valid phone number'];
const password = ['password', document.querySelector('#password'), ''];
const passwordValidation = ['passwordValidation', document.querySelector('#passwordValidation'), ''];


// function to get error div.

const errorSelector = (idSelector) => document.querySelector(`#${idSelector[0]}Error`);

// function to detect if input is invalid and show message error if not

const inputListener = (selectorConst) => selectorConst[1].addEventListener("input", (event) => {
    if (!selectorConst[1].validity.valid) {
        errorSelector(selectorConst).textContent = selectorConst[2];
        console.log('empty')
        console.log(selectorConst.value)
    }
    else {
        errorSelector(selectorConst).textContent = '';
        console.log(selectorConst.value)

    }
});

inputListener(firstName)