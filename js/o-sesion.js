$('#barraInicio').on('shown.bs.collapse', function () {
    if($('body').height()<=490){
        document.getElementById('encabezado').classList.remove('mb-auto');
        document.getElementById('encabezado').style.marginBottom = (($('.navbar').height()+20) + 'px');
    }
});

$('#barraInicio').on('hidden.bs.collapse', function () {
    document.getElementById('encabezado').classList.add('mb-auto');
})

function iniciarSesion(){
    let valido = true;
    let correo = document.getElementById('txt-correo');
    let contra = document.getElementById('txt-contra');

    if (!correo.checkValidity()){
        marcarInput('txt-correo', false);
        valido = false;
    } else {
        marcarInput('txt-correo', true);
    }
    if (!contra.checkValidity()){
        marcarInput('txt-contra', false);
        valido = false;
    } else {
        marcarInput('txt-contra', true);
    }
}

function marcarInput(id, valido){
    if (valido){
        document.getElementById(id).classList.remove('is-invalid');
        document.getElementById(id).classList.add('is-valid');
    }else{
        document.getElementById(id).classList.remove('is-valid');
        document.getElementById(id).classList.add('is-invalid');
    }
}

//funcion para validar si el usuario esta registrado