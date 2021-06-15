function login() {
    var user = $("#loginField").val();
    var pass = $("#passwordField").val();
    var respLogin = serviceValidateLogin(user,pass)
    console.log(respLogin)
    
    //window.location.href="./src/views/pages/signup.html"
}