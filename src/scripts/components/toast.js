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
        html: '<div class="verde">   <i class="material-icons">check</i>  <b>  Success  </b> </div>'  +  msg  + '</div>' ,
        classes: classe,
        displayLength: 4000
    });

    M.toast({
        html: '<div class="azul">   <i class="material-icons">info</i>  <b>  Info  </b> </div>'  +  msg  + '</div>' ,
        classes: classe,
        displayLength: 40000000000000
    });

    M.toast({
        html: '<div class="amarelo">   <i class="material-icons">warning</i>  <b>  Warning  </b> </div>'  +  msg  + '</div>' ,
        classes: classe,
        displayLength: 4000
    });
}