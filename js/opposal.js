$('#barraInicio').on('shown.bs.collapse', function () {
    if($('body').height()<=490){
        document.getElementById('encabezado').classList.remove('mb-auto');
        document.getElementById('encabezado').style.marginBottom = (($('.navbar').height()+15) + 'px');
    }
});

$('#barraInicio').on('hidden.bs.collapse', function () {
    document.getElementById('encabezado').classList.add('mb-auto');
})

$('#empezar').hover(function(){
    if($('#principal').css( 'background-image' ) != 'url("http://127.0.0.1:5500/img/logo/opposal-logoAI.png")'){
        $('#principal').css('background-position','45.5% 24%, 49% center, center 65%');
    }else {
        $('#principal').css('background-position','center center');
    }
    console.log($('#principal').css( 'background-image' ));
},function(){
    $('#principal').removeAttr( 'style' );
});