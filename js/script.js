/ Script para manejar el despliegue de preguntas
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {
            const isActive = item.classList.contains("active");

            // Cerrar todas las preguntas antes de abrir una nueva
            faqItems.forEach((faq) => {
                faq.classList.remove("active");
                faq.querySelector(".faq-answer").style.display = "none";
            });

            // Si la pregunta no estaba activa, la abrimos
            if (!isActive) {
                item.classList.add("active");
                item.querySelector(".faq-answer").style.display = "block";
            }
        });
    });
});