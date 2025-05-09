document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const mensajeFinal = document.getElementById("formMensaje");

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            mensajeFinal.textContent = "¡Gracias por tu mensaje! Te responderé pronto.";
            mensajeFinal.style.color = "green";
            form.reset();
        } else {
            mensajeFinal.textContent = "Hubo un error al enviar el mensaje. Probá de nuevo.";
            mensajeFinal.style.color = "red";
        }
    } catch (error) {
        mensajeFinal.textContent = "Error de conexión. Intentá más tarde.";
        mensajeFinal.style.color = "red";
    }
});

const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/5493496517864"; // Reemplazá con tu número
whatsappBtn.className = "btn btn-whatsapp";
whatsappBtn.textContent = "Escribime por WhatsApp";
whatsappBtn.style.display = "inline-block";
whatsappBtn.style.marginTop = "1rem";
whatsappBtn.target = "_blank";

document.querySelector(".cta").appendChild(whatsappBtn);
