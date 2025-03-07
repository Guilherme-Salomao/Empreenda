document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("cR8wNsQiTYlYHE-Nw"); // Substitua pelo seu User ID real

    document.querySelector(".btn-salvar").addEventListener("click", function (event) {
        event.preventDefault(); // Evita que a página recarregue

        var templateParams = {
            nome_equipe: document.getElementById("nome_equipe").value,
            video: document.getElementById("video").value
        };

        emailjs.send("service_solvgav", "template_fsqi1pr", templateParams);
    });
});
