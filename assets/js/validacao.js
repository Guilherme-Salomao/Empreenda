$(document).ready(function () {
    $('.btn-salvar').on('click', function (event) {
        event.preventDefault();
        if (validarFormulario()) {

            $('#mensagemAlerta').addClass('d-none');
            $('#mensagemSucesso').removeClass('d-none').text('Cadastro realizado. Parabéns!');

            $('.btn-salvar').prop('disabled', true).text('Cadastrado!');

            setTimeout(() => {
                $('#cadastroForm')[0].reset();
                $('.btn-salvar').prop('disabled', false).text('Salvar Informações');
            }, 3000);
        }
    });

    function validarFormulario() {
        let valido = true;

        function validarCampo(id) {
            let valor = $(`#${id}`).val().trim();
            if (valor === '') {
                $(`#${id}`).addClass('is-invalid');
                valido = false;
            } else {
                $(`#${id}`).removeClass('is-invalid');
            }
        }

        function validarFormato(id, regex) {
            let valor = $(`#${id}`).val().trim();
            if (!regex.test(valor)) {
                $(`#${id}`).addClass('is-invalid');
                valido = false;
            } else {
                $(`#${id}`).removeClass('is-invalid');
            }
        }

        function validarRadio(name) {
            if (!$(`input[name="${name}"]:checked`).val()) {
                $(`input[name="${name}"]`).addClass('is-invalid-radio');
                valido = false;
            } else {
                $(`input[name="${name}"]`).removeClass('is-invalid-radio');
            }
        }

        validarCampo('nome');
        validarCampo('cpf');
        validarCampo('data_nascimento');
        validarCampo('email');
        validarCampo('emailConfirm');
        validarCampo('senha');
        validarCampo('confirme_senha');
        validarCampo('telefone');
        validarCampo('tipo_curso');
        validarCampo('Categoria');
        validarCampo('Unidade');
        validarCampo('nome_curso');
        validarCampo('inicio_curso');
        validarCampo('termino_curso');
        validarCampo('como_soube');
        validarCampo('nome_equipe');
        validarCampo('video');
        validarRadio('genero');
        validarRadio('deficiencia');
        validarFormato('data_nascimento', /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/);
        validarFormato('cpf', /^\d{3}\.\d{3}\.\d{3}-\d{2}$/);
        validarFormato('telefone', /^\(\d{2}\) \d{5}-\d{4}$/);
        validarFormato('inicio_curso', /^(0[1-9]|1[0-2])\/\d{4}$/);
        validarFormato('termino_curso', /^(0[1-9]|1[0-2])\/\d{4}$/);

        if ($('#email').val().trim() !== $('#emailConfirm').val().trim()) {
            $('#emailConfirm').addClass('is-invalid');
            valido = false;
        } else {
            $('#emailConfirm').removeClass('is-invalid');
        }

        if ($('#senha').val().trim() !== $('#confirme_senha').val().trim()) {
            $('#confirme_senha').addClass('is-invalid');
            valido = false;
        } else {
            $('#confirme_senha').removeClass('is-invalid');
        }

        if (!valido) {
            $('#mensagemAlerta').removeClass('d-none').text('Sua inscrição não foi realizada. Confirme todos os campos obrigatórios. (*)');
            $('#mensagemSucesso').addClass('d-none');
        }

        return valido;
    }
});
