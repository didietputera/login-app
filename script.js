document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Cek kredensial login (ini hanya contoh, sebaiknya menggunakan server untuk validasi)
    if (username === "admin" && password === "password123") {
        alert("Login berhasil!");
        // Arahkan ke halaman berikutnya jika berhasil
        window.location.href = "welcome.html";
    } else {
        alert("Username atau password salah.");
    }
});
