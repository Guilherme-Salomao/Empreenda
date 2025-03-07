document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("kiI6SSh2j6Diqoq6b"); // Substitua pelo seu User ID real

    document.querySelector(".btn-salvar").addEventListener("click", function (event) {
        event.preventDefault(); // Evita que a página recarregue

        var templateParams = {
            nome_equipe: document.getElementById("nome_equipe").value,
            video: document.getElementById("video").value
        };

        console.log("Enviando e-mail com os seguintes dados:", templateParams); // Verificar dados antes do envio

        emailjs.send("service_solvgav", "template_fsqi1pr", templateParams)
            .then(function (response) {
                console.log("E-mail enviado com sucesso!", response);
            }, function (error) {
                console.error("Erro ao enviar o e-mail:", error);
            });
    });
});
