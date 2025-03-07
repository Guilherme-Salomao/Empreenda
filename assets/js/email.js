document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("service_solvgav"); // Substitua pelo seu User ID do EmailJS

    document.querySelector(".btn-salvar").addEventListener("click", function (event) {
        event.preventDefault(); // Evita que a página recarregue

        // Captura os valores do formulário
        var templateParams = {
            nome_equipe: document.getElementById("nome_equipe").value,
            email: document.getElementById("email").value,
            video: document.getElementById("video").value
        };

        // Verifica se os campos obrigatórios estão preenchidos
        if (!templateParams.nome_equipe || !templateParams.email || !templateParams.video) {
            document.getElementById("mensagemAlerta").classList.remove("d-none");
            return;
        }

        // Envia o e-mail via EmailJS
        emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", templateParams)
            .then(function (response) {
                console.log("E-mail enviado com sucesso!", response);
                document.getElementById("mensagemSucesso").classList.remove("d-none");
                document.getElementById("mensagemAlerta").classList.add("d-none");
                document.getElementById("cadastroForm").reset(); // Limpa o formulário após o envio
            }, function (error) {
                console.log("Erro ao enviar o e-mail:", error);
                document.getElementById("mensagemAlerta").classList.remove("d-none");
            });
    });
});
