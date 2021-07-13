function openToast(msg, type) {
    var classe = ''

    switch(type) {
        case 'danger':
            classe = 'toast-danger'
            break;
        case 'warning':
            classe = 'toast-warning'
            break;
        case 'success':
            classe = 'toast-success'
            break;
    }

    M.toast({
        html: msg,
        classes: classe,
        displayLength: 4000
    });
}