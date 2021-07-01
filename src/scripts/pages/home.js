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
    });
}


function createCard(title, id) {
    $(".main").append(
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
    console.log(data)
    for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
        tableHeaders += `<th>${key}</th>`
    }
    tableHeaders += '</tr>'

    var tableContent = '<tr><td>aaaa</td></tr>';

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
                `+tableHeaders+ tableContent+`
                </table>
            </div>
            <div class="modal-footer">
                <a href="#!" id="BotaoSair" class="modal-close waves-effect waves-green btn-flat">Visitar página</a>
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Baixar tabela</a>
            </div>
        </div>
        `
    )
    $('.modal').modal();
}



/*                  <tr>
                        <th>Cabeçalho 1</th>
                        <th>Cabeçalho 2</th>
                        <th>Cabeçalho 3</th>
                    </tr>
                    <tr>
                        <td>Data Linha 1</td>
                        <td>Data Linha 1</td>
                        <td>Data Linha 1</td>
                    </tr>                    
                    <tr>
                        <td>Data Linha 2</td>
                        <td>Data Linha 2</td>
                        <td>Data Linha 2</td>
                    </tr>                    
                    <tr>
                        <td>Data Linha 3</td>
                        <td>Data Linha 3</td>
                        <td>Data Linha 3</td>
                    </tr>                    
                    <tr>
                        <td>Data Linha 4</td>
                        <td>Data Linha 4</td>
                        <td>Data Linha 4</td>
                    </tr>*/