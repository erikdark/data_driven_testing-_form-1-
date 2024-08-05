let users = [];

document.getElementById('showRegisterFormButton').addEventListener('click', function() {
    toggleForms('register');
});

document.getElementById('showLoginFormButton').addEventListener('click', function() {
    toggleForms('login');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        document.getElementById('messageContainer').innerText = 'Registration failed: Username already exists.';
    } else {
        users.push({ username, password });
        document.getElementById('messageContainer').innerText = 'Registration successful!';
    }

    clearForm('registerForm');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('messageContainer').innerText = 'Login successful!';
    } else {
        document.getElementById('messageContainer').innerText = 'Login failed: Invalid username or password.';
    }

    clearForm('loginForm');
});

function toggleForms(form) {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.add('hidden');

    if (form === 'register') {
        document.getElementById('registerForm').classList.remove('hidden');
    } else if (form === 'login') {
        document.getElementById('loginForm').classList.remove('hidden');
    }
}

function clearForm(formId) {
    document.getElementById(formId).reset();
}
