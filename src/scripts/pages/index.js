function login() {
    var user = $("#loginField").val();
    var pass = $("#passwordField").val();
    var respLogin = serviceValidateLogin(user,pass)
    if (respLogin.status) {
        localStorage.setItem("userData", respLogin)
        window.location.href = "./src/views/pages/home.html"
    }
    else {
        localStorage.setItem("userData", "")
        alert("Usuário ou senha inválidos")
    }
}

