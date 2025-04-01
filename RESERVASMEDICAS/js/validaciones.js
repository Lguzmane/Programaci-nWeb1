
document.getElementById("registroForm")?.addEventListener("submit", function(e) {
    const nombre = document.getElementById("nombre").value.trim();
    const rut = document.getElementById("rut").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errors = [];


    if (nombre.length < 3) errors.push("El nombre debe tener al menos 3 caracteres.");


    if (!/^\d{7,8}$/.test(rut)) errors.push("El RUT debe tener 7 u 8 dígitos (sin guión ni puntos).");


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Ingrese un correo electrónico válido.");


    if (password.length < 8) errors.push("La contraseña debe tener al menos 8 caracteres.");
    if (!/\d/.test(password)) errors.push("La contraseña debe incluir al menos un número.");
    if (!/[A-Za-z]/.test(password)) errors.push("La contraseña debe incluir letras.");
    if (!/[!@#$%^&*]/.test(password)) errors.push("La contraseña debe incluir un carácter especial (!@#$%^&*).");

    if (errors.length > 0) {
        e.preventDefault();
        alert("Errores:\n" + errors.join("\n"));
    }
});


document.getElementById("reservaForm")?.addEventListener("submit", function(e) {
    const fecha = new Date(document.getElementById("fecha").value);
    const hora = document.getElementById("hora").value;
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const errors = [];

    if (fecha < hoy) errors.push("La fecha debe ser futura.");
    if (!hora || hora < "09:00" || hora > "18:00") errors.push("La hora debe estar entre 09:00 y 18:00.");

    if (errors.length > 0) {
        e.preventDefault();
        alert("Errores:\n" + errors.join("\n"));
    } else {
        alert("✅ ¡Hora agendada con éxito!");

        setTimeout(() => document.getElementById("reservaForm").reset(), 1500);
    }
});


document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;


    if (email === "admin@medicapp.cl" && password === "Admin123!") {
        window.location.href = "admin.html";
    } else if (email && password.length >= 8) {
        window.location.href = "reservas.html";
    } else {
        alert("❌ Correo o contraseña incorrectos. La contraseña debe tener al menos 8 caracteres.");
    }
});