const registerBtn = document.getElementById('registerBtn')

// New User Registration Functions
const newUserRegister = async (event) => {
    event.preventDefault();

    const email = document.getElementById('inputEmail3').value.trim();
    const password = document.getElementById('inputPassword3').value.trim();
    const name = document.getElementById('inputName3').value.trim();


    if (email && password && name) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password, name}),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }

    }

}

registerBtn.addEventListener('click', newUserRegister)