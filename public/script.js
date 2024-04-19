function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'bill' && password === 'NoOneWillEverGuessThisPassword!') {
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = data.redirect;
            } else {
                alert('Login failed. Try again.');
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Invalid username or password');
    }
}