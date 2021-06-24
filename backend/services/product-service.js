function readFile(file, storeLocation) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                localStorage.setItem(storeLocation, rawFile.responseText)                          
            }
        }
    }    
    rawFile.send(null);
}

readFile("../../../../../backend/database/produtos.json", 'products')

function getAllProducts() { 
    return JSON.parse(localStorage.getItem("products"))
}

function getProductsByName() {
    return 'products'
}