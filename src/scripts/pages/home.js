$(document).ready(function(){
    $('.modal').modal();
    $("#BotaoSair").click(function() {
        localStorage.setItem("userData","")
        window.location.href="../../../index.html"
    })
    loadProducts();
});

function loadProducts() {
    var produtos = getAllProducts()
    produtos.forEach(element => {
        var id = element.tableName.replace(" ","")
        createModal(element.data, id, element.tableName) 
        createCard(element.tableName, id)
    });
}


function createCard(title, id) {
    $(".main").append(
        `
        <div class="row">
            <div class="col s12 m6">
            <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">${title}</span>
                </div>
                <div class="card-action">
                <a class="modal-trigger" href="#${id}">Ver Tabela</a>
                <a href="#">Acessar produto</a>
                </div>
            </div>
            </div>
        </div>
        `
    )
}

function createModal(data, id, title) {
    $(".modais").append(
        `
        <div id="${id}" class="modal">
            <div class="modal-content">
                <h4>${title}</h4>
                <p>TABELA DE PRODUTOS ${title}</p>
            </div>
            <div class="modal-footer">
                <a href="#" class="modal-close waves-effect waves-green btn-flat">Fechar</a>
            </div>
        </div> 
        `
    )
}