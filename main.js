$(document).ready(function() {
    $('#carousel-imagens').slick({ //Correção: Alteração de "carousel" para "carousel-imagens"
        autoplay: true,
        arrows: false
    })

    $('#telefone').mask('(00) 00000-0000', { //Correção: Alteração de "mascara" para "mask"
        placeholder: '(00) 00000-0000'
    })

    $('#cpf').mask('000.000.000-00', { //Correção: Alteração de "mascara" para "mask"
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('00000-000', { //Correção: Alteração de "mascara" para "mask"
        placeholder: '00000-000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true //Ateração de "requerido" para "required"
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },

        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },

        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos, por favor preencha-os para prosseguir com a compra!`); //Alteração de aspas duplas para craze e re-organização do código
            }
        }
    })
})