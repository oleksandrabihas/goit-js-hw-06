const form = document.querySelector(".login-form");
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (email.value === '' || password.value === '') {
        alert(`Всі поля повинні бути заповненні`)
    } else {
        const emailValue = form.elements.email.value;
        const passwordValue = form.elements.password.value;
        
        const arrayData = {
            email: emailValue,
            password: passwordValue
        };
console.log(arrayData)
form.reset()
    }
});


