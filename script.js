const secciones = document.querySelectorAll("section[id]");
const enlaces = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    secciones.forEach(seccion => {
        const sectionTop = seccion.offsetTop - 100;
        const sectionHeight = seccion.offsetHeight;
        const sectionId = seccion.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            enlaces.forEach(link => {
                link.classList.remove("activo");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("activo");
                }
            });
        }
    });
});

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

// Abrir modal
document.querySelectorAll('.btn-vermas').forEach(btn => {
    btn.addEventListener('click', function () {
        const modalId = this.dataset.modal;
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'block';
    });
});

// Cerrar modal
document.querySelectorAll('.cerrar').forEach(btn => {
    btn.addEventListener('click', function () {
        this.closest('.modal').style.display = 'none';
    });
});

// Cerrar al hacer clic fuera del contenido
window.addEventListener('click', function (e) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
