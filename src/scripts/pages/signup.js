$("button").click(function() {
    var NomeValidation = validarNome(); 
    var SobrenomeValidation = validarSobrenome();
    var SenhaValidation = validarSenha();
    var ConfirmarValidation = validarConfirmar();
    //var CookingValidation = validarTabela();
    
    

    if (NomeValidation && SenhaValidation && ConfirmarValidation && CookingValidation && SobrenomeValidation) {
        Enviar();
    }
    
})

function validarNome() {
    var nome = $("#nome").val();
    if (nome == "") {
        $("#NomeError").css("display", "block")
        return false;
    }
}

    function validarSobrenome() {
        var Sobrenome = $("#Sobrenome").val();
        if (Sobrenome == "") {
            $("#SobrenomeError").css("display", "block")
            return false;
        }
    }
    

        function validarSenha() {
            var Senha = $("#Senha").val();
            if (Senha.length < 6) {
                $("#SenhaError").css("display", "block")
                return false
            }
            $("#SenhaError").hide()
            return true;
        }

        function validarConfirmar() {
            var Confirmar = $("Confirmar").val();
            if (Confirmar != Senha ) {
                $("ConfirmarError").css("display", "block" )
                return false
            }
            $("ConfirmarError").hide()
            return true;

        }
    




