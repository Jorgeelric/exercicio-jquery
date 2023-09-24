$(document).ready(function () {
    $('#telefone').mask( '(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '999.999.999-99'
    })

    $('#cep').mask('00.000-000', {
        placeholder: '99.999-999'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true 
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
            estado: {
                required: true
            },
            cidade: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        }, 
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail',
            telefone: 'Por favor, insira o seu telefone',
            endereco: 'Por favor, insira o endereço',
            estado: 'Por favor, insira o estado em que mora',
            cidade: 'Por favor, insira a cidade em que mora',
            cep: 'Por favor, insira o seu CEP',
            cpf: 'Por favor, insira o seu CPF'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let campoIncorretos = validador.numberOfInvalids();
            if (campoIncorretos) {
                alert(`Existem ${campoIncorretos} campos incorretos`);
            }
        }
    })
})