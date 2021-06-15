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

readFile("../../../../../backend/database/users.json", 'users')

function getAllUsers() { 
    return JSON.parse(localStorage.getItem("users"))
}

function getUserByName() {
    return 'users'
}

function serviceValidateLogin(user, pass) {
    var users = getAllUsers();
    for (var i = 0; i < users.length; i++) {
        if(users[i].login == user) {
            if(users[i].senha == pass)
                return {
                    status: true,
                    msg: "Operação realizada com sucesso",
                    resp: users[i]
                }
        }
    }
    return {
        status: false,
        msg: "Login ou senha inválidos",
        resp: ""
    }
}