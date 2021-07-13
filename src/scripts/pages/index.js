function login() {
    var user = $("#loginField").val();
    var pass = $("#passwordField").val();
    var respLogin = serviceValidateLogin(user,pass)
    console.log(respLogin)
    if (respLogin.status || false) {
        localStorage.setItem("userData", respLogin)
        window.location.href = "./src/views/pages/home.html"
    }
    else {
        localStorage.setItem("userData", "")
        openToast("Usuário ou senha inválidos", 'danger')
    }
}

