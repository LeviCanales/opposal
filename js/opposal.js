$('#barraInicio').on('shown.bs.collapse', function () {
    if($('body').height()<=490){
        document.getElementById('encabezado').classList.remove('mb-auto');
        document.getElementById('encabezado').style.marginBottom = (($('.navbar').height()+15) + 'px');
    }
});

$('#barraInicio').on('hidden.bs.collapse', function () {
    document.getElementById('encabezado').classList.add('mb-auto');
})