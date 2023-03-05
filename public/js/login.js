const loginBtn = document.getElementById('loginBtn')
const newUserBtn = document.getElementById('newUserBtn')

// Redirect to registration
const directToRegister = (event) => {
    event.preventDefault()
     
    document.location.href = '/register'

}


const handleLogin = async (event) => {
    event.preventDefault()
    const email = document.getElementById('inputEmail3').value.trim();
    const password = document.getElementById('inputPassword3').value.trim();

    if (email && password) {

        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json()
        console.log(data)
        if (response.ok) {
          document.location.replace(data.destination);
        } else {
          alert(response.statusText);
        }
      }   
}

newUserBtn.addEventListener('click', directToRegister)
loginBtn.addEventListener('click', handleLogin)