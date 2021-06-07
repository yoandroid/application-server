function hidePage(){
    $('.container').addClass('d-none')
}

$(document).ready(function(){
    $('.portada').click(function(){
        hidePage();
        $('#portada').removeClass('d-none');
    });

    $('.glosario').click(function(){
        hidePage();
        $('#glosario').removeClass('d-none');
        $('#glosario').hide().slideDown(2000);   
    });

    $('.servidor').click(function(){
        hidePage();
        $('#servidor').removeClass('d-none');
        $('#servidor').hide().slideDown(2000);   
    });

    $('.cliente-servidor').click(function(){
        hidePage();
        $('#cliente-servidor').removeClass('d-none');
        $('#cliente-servidor').hide().slideDown(2000);   
    });

    $('.tipos-servidores').click(function(){
        hidePage();
        $('#tipos-servidores').removeClass('d-none');
        $('#tipos-servidores').hide().slideDown(2000);   
    });

    $('.servidor-web').click(function(){
        hidePage();
        $('#servidor-web').removeClass('d-none');
        $('#servidor-web').hide().slideDown(2000);   
    });

    $('.app-server').click(function(){
        hidePage();
        $('#app-server').removeClass('d-none');
        $('#app-server').hide().slideDown(2000);   
    });

    $('.comparacion').click(function(){
        hidePage();
        $('#comparacion').removeClass('d-none');
        $('#comparacion').hide().slideDown(2000);   
    });

    $('.contenedor-web').click(function(){
        hidePage();
        $('#contenedor-web').removeClass('d-none');
        $('#contenedor-web').hide().slideDown(2000);   
    });

    $('.resumen').click(function(){
        hidePage();
        $('#resumen').removeClass('d-none');
        $('#resumen').hide().slideDown(2000);   
    });

    $('.tomcat').click(function(){
        hidePage();
        $('#tomcat').removeClass('d-none');
        $('#tomcat').hide().slideDown(2000);   
    });

    $('.wildfly').click(function(){
        hidePage();
        $('#wildfly').removeClass('d-none');
        $('#wildfly').hide().slideDown(2000);   
    });
});