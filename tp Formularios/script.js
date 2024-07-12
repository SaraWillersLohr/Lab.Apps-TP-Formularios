function cambiarimg(ruta) {
    document.querySelector("#foto").src = ruta;
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#r1").addEventListener("click", function() {
        cambiarimg("foto1.jpg");
    });
    document.querySelector("#r2").addEventListener("click", function() {
        cambiarimg("foto2.jpg");
    });
    document.querySelector("#r3").addEventListener("click", function() {
        cambiarimg("foto3.jpg");
    });
    document.querySelector("#r4").addEventListener("click", function() {
        cambiarimg("foto4.jpg");
    });
    document.querySelector("#r5").addEventListener("click", function() {
        cambiarimg("foto5.jpg");
    });
    document.querySelector("#r6").addEventListener("click", function() {
        cambiarimg("foto6.jpg");
    });

    document.querySelector(".contenedorForm").style.display = "block";

    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();
        let valid = true;
        let messages = [];

        const apellido = document.getElementById("apellido").value.trim();
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const fechaNacimiento = document.getElementById("fecha_nacimiento").value;

        if (!apellido || apellido.length > 50) {
            valid = false;
            messages.push("El apellido no puede estar vacío y no debe exceder 50 caracteres.");
        }

        if (!nombre || nombre.length > 50) {
            valid = false;
            messages.push("El nombre no puede estar vacío y no debe exceder 50 caracteres.");
        }

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            valid = false;
            messages.push("Debe proporcionar un correo electrónico válido.");
        }

        if (!fechaNacimiento || new Date(fechaNacimiento).getFullYear() <= 2000) {
            valid = false;
            messages.push("La fecha de nacimiento debe ser posterior al año 2000.");
        }

        if (document.querySelector("[name='aeroesmith'][value='Steven Tyler']").checked) {
            messages.push("Respuesta correcta sobre Aeroesmith!");
        }

        if (document.querySelector("select[name='bandas']").value === "pescado") {
            messages.push("Respuesta correcta sobre Spinetta!");
        }

        if (document.querySelector("input[name='edad2']").value == 32) {
            messages.push("Respuesta correcta sobre Taylor Swift!");
        }

        if (valid) {
            let mensaje = "¿Estás seguro/a de enviar el formulario?";
            if (confirm(mensaje)) {
                alert(messages.join("\n"));
                document.getElementById("formulario").reset();
                alert("¡Formulario enviado correctamente!");
            }
        } 
            
        
    });
});
