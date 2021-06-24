$(document).ready(function(){
    $('.modal').modal();
    $("#BotaoSair").click(function() {
        localStorage.setItem("userData","")
        window.location.href="../../../index.html"
    })
});

