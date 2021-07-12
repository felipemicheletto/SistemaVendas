$(document).ready(function(){
    $('.modal').modal();
    $("#BotaoSair").click(function() {
        localStorage.setItem("userData","")
        window.location.href="../../../index.html"
    })
    loadProducts();
});

function loadProducts() {
    var produtos = getAllProducts();
    produtos.forEach((element, i, array) => {
        var id = element.tableName.replace(" ","")
        createCard(element.tableName, id)
        createModal(element.data, id, element.tableName)
        localStorage.setItem(id, JSON.stringify(element.data))
    });
}


function createCard(title, id) {
    $(".all-cards").append(
        `
        <div class="row">
            <div class="col s12">
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
    var tableHeaders ='<tr>'
    var dataArray;
    for (const [key, value] of Object.entries(data)) {
        dataArray = value;
        tableHeaders += `<th>${key}</th>`;
    }
    tableHeaders += '</tr>'
    
    
    var tableContent = '';
    for (var i = 0; i < dataArray.length; i++) {
        tableContent += '<tr>';
        for (const [key, value] of Object.entries(data)) {
            tableContent += `<td>${value[i]}</td>`
        }
        tableContent += '</tr>'
    }
    

    $(".modais").append(
        `<div id="${id}" class="modal">
            <div class="modal-header">
                <h4 class="table-title">${title}</h4>
                <a class="modal-close p-10">
                    <i class="material-icons">close</i>
                </a>
            </div>
            <div class="modal-content">
                <table id="table-${id}" class="striped">
                `+tableHeaders+ tableContent+ `
                </table>
            </div>
            <div class="modal-footer">
                <a data-atributte="${id}" data-atributteTitle="${title}" href="#!" onclick="showTable(this)" class="modal-close waves-effect waves-green btn-flat">Visitar página</a>
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Baixar tabela</a>
            </div>
        </div>
        `
    )
    $('.modal').modal();
}

function showTable (button) {
    var data = JSON.parse(localStorage.getItem(button.attributes[0].value))
    var title = button.attributes[1].value
    tablePage(title, data)
    $(".all-cards").hide()
    $(".table-page").show()
}

function tablePage(title, data) {
    var tablepageheader ='<tr>'
    var dataArray;
    for (const [key, value] of Object.entries(data)) {
        dataArray = value;
        tablepageheader += `<th>${key}</th>`;
    }
    tablepageheader += '</tr>'

    var PageContent = '';
    for (var i = 0; i < dataArray.length; i++) {
        PageContent += '<tr>';
        for (const [key, value] of Object.entries(data)) {
            PageContent += `<td>${value[i]}</td>`
        }
        PageContent += '</tr>'
    }

    $(".table-page").html(`
    <h2>Tabela 1</h2>    
    <button onclick="showCards()">Voltar</button>
    <table>
        ${tablepageheader} 
        ${PageContent}
    </table>
        `)
}

function showCards() {
    $(".all-cards").show()
    $(".table-page").hide()
}

$("#BotaoHome").click(function() {
    window.location.href="../../../home.html#!"

})

$("#BotaoNovoCadastro").click(function() {
    window.location.href="../../../signup.html"

})