document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Az alapértelmezett űrlap küldést letiltjuk

    const username = document.getElementById('username').value; // Felhasználónév
    const password = document.getElementById('password').value; // Jelszó

    // AJAX kérés küldése a Node.js szerverre
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username, // Felhasználónév
            password: password, // Jelszó
        }),
    })
    .then(response => {
        if (response.status === 200) {
            return response.text(); // Ha sikeres a válasz (200), akkor visszakapjuk a szöveget
        } else {
            throw new Error('Hibás felhasználónév vagy jelszó'); // Hiba dobása rossz válaszkód esetén
        }
    })
    .then(data => {
        // Sikeres bejelentkezés esetén átirányítás a hibabejelentő oldalra
        window.location.href = 'admin_redszegazda_muszakvezeto.html'; // Itt adod meg az átirányítás URL-jét
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'Sikertelen bejelentkezés. Kérjük, próbálja újra.'; // Hibaüzenet
    });
});
