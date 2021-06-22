$("#sendBtn").click(function() {
    var NomeValidation = validarNome(); 
    var SobrenomeValidation = validarSobrenome();
    var emailValidation = validaremail();
    var SenhaValidation = validarSenha();
    var ConfirmarValidation = validarConfirmar();
    var CheckboxValidation = validarCheckbox();
    
    if (NomeValidation && SenhaValidation && ConfirmarValidation && CheckboxValidation && SobrenomeValidation && emailValidation) {
        Enviar();
    }
    
})
    $("#sendBtn").click(function() {
        $("small").show()
        e.preventDefault()
    })




function validarNome() {
    var nome = $("#nome").val(); 
    if (nome == "") { 
        $("#NomeError").css("display", "block")
        return false;
    }
        $("#NomeError").hide()
            return true;
    
}

    function validarSobrenome() {
        var Sobrenome = $("#Sobrenome").val();
        if (Sobrenome == "") {
            $("#SobrenomeError").css("display", "block")
            return false;
        }
        $("#SobrenomeError").hide()
            return true;
    }

    function validaremail() {
    var email = $("#email").val();
            if (email.length < 6) {
            
                $("#EmailError").css("display", "block")
                return false
            }
            if (email == "") {
                $("#EmailError").css("display", "block")
                return false;
            }
            var user = email.split("@")
            if (user.length != 2) {
                $("#EmailError").css("display", "block")
                return false;
            }
            var dominio = email.split(".")    
            if (dominio.length < 2) {
                $("#EmailError").css("display", "block")
                return false;
            }
            $("#EmailError").hide()
            return true;
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
            var Senha = $("#Senha").val()
            var Confirmar = $("#Confirmar").val();
            if (Confirmar != Senha ) {
                $("#ConfirmarError").css("display", "block" )
                return false
            }
            $("#ConfirmarError").hide()
            return true;

        }

        function validarCheckbox(){
            var check = $("#checkk")
            if (check[0].checked == false) {
                $("#CheckError").css("display" , "block")
                return false
                    }
                    $("#CheckboxError").hide()
            return true
        }
    




