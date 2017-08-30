var main = function(){
    //Funciones de botones para desplegar habilidades
    $("#languages-btn").on("click", function () {
        $('#skills').slideUp(400);
        $("#tools").slideUp(400);
        $("#platforms").slideUp(400);
        $("#programming").slideToggle(400);
    });

    $("#platforms-btn").on("click", function () {
        $('#skills').slideUp(400);
        $("#tools").slideUp(400);
        $("#programming").slideUp(400);
        $("#platforms").slideToggle(400);
    });

    $("#tools-btn").on("click", function () {
        $('#skills').slideUp(400);
        $("#programming").slideUp(400);
        $("#platforms").slideUp(400);
        $("#tools").slideToggle(400);
    });

    $("#skills-btn").on("click", function () {
        $('#programming').slideUp(400);
        $("#tools").slideUp(400);
        $("#platforms").slideUp(400);
        $("#skills").slideToggle(400);
    });

    //Navegación
    $('#nav-who').on('click',function(){
        $('html,body').animate({
            scrollTop: $("#who").offset().top
        });
        $('.activeNav').removeClass( "activeNav", 300, "swing" );
        $(this).addClass('activeNav',300,'swing');
          
    });
    $('#nav-experience').on('click',function(){
        $('html,body').animate({
            scrollTop: $("#experience").offset().top-75
        });
        $('.activeNav').removeClass( "activeNav", 300, "swing" );
        $(this).addClass('activeNav',300,'swing');  
    });
    $('#nav-abilities').on('click',function(){
        $('html,body').animate({
            scrollTop: $("#abilities").offset().top
        });
        $('.activeNav').removeClass( "activeNav", 300, "swing" );
        $(this).addClass('activeNav',300,'swing');  
    });
    $('#nav-interests').on('click',function(){
        $('html,body').animate({
            scrollTop: $("#intersts").offset().top
        });
        $('.activeNav').removeClass( "activeNav",300, "swing" );
        $(this).addClass('activeNav',300,'swing');
    });
    $('#nav-connections').on('click',function(){
        $('html,body').animate({
            scrollTop: $("#intersts").offset().top
        });
        $('.activeNav').removeClass( "activeNav",300, "swing" );
        $(this).addClass('activeNav',300,'swing');
    });

    $(document).scroll(function(){
        if($(document).scrollTop()===$('#nav-interests').scrollTop){
            $('.active').removeClass( "active",300, "swing" );
            $('#nav-interests').addClass('active',300,'swing');
        } else if($(document).scrollTop()===$('#nav-abilities').scrollTop){
            $('.active').removeClass( "active",300, "swing" );
            $('#nav-abilities').addClass('active',300,'swing');
        } else if($(document).scrollTop()===$('#nav-experience').scrollTop){
            $('.active').removeClass( "active",300, "swing" );
            $('#nav-experience').addClass('active',300,'swing');
        } else if($(document).scrollTop()===$('#nav-who').scrollTop){
            $('.active').removeClass( "active",300, "swing" );
            $('#nav-who').addClass('active',300,'swing');
        } else if($(document).scrollTop()===$('#nav-connetions').scrollTop){
            $('.active').removeClass( "active",300, "swing" );
            $('#nav-who').addClass('active',300,'swing');
        }
    });

    //Manejo de fechas
    function yearCalculator(day, year, month){
        var birth = new Date();
        birth.setDate(day);
        birth.setFullYear(year);
        birth.setMonth(month);
        var today = new Date();
        var age = Math.floor((today-birth) / (365.25 * 24 * 60 * 60 * 1000));
        return age+'';
        
    };
    $('#edad').text(yearCalculator(13,1996,2)+'');
    
    //Cargar habilidades
    //Array de habilidades
    $.getJSON("../jsons/abilities.json", function (data) {
        data.forEach(function(ability){
            var container = $('<div class="container">');
            var row = $('<div class="row">');
            container.append(row);
            row.append($('<div class="col-md-1 pull-left"><span class="glyphicon glyphicon-asterisk"></span></div>'));
            var span = $('<span class="label label-primary">');
            var years = yearCalculator(ability.dia,ability.anio,ability.mes)+'';
            console.log(years);
            if( years > 1){
                span.attr('id','exp'+ability.habilidad).append(years + ' años');
            } else {
                span.attr('id','exp'+ability.habilidad).append(years + ' año');
            }
            var p = $('<p class="col-sm-3">').append(ability.habilidad+' ');
            p.append(span);
            p.append(' de experiencia')
            row.append(p);
            row.append('<p class="col-sm-2">Nivel de dominio: </p>')
            row.append($('<div class="progress">')
                .append($('<div class="progress-bar progress-bar-striped active">')
                    .attr('role','progressbar')
                    .attr('aria-valuenow','45')
                    .attr('aria-valuemin','0')
                    .attr('aria-valuemax','100')
                    .attr('style','width: '+ability.mastery*100+'%').text(ability.mastery*100+'%')
            ));
            $('#programming').append(container);
        });   
    });

    //Cargar experiencia laboral
    $.getJSON("../jsons/experience.json", function (data) {
        data.forEach(function(company){
            var exp = $('<div class="company">');
            var mainRow = $('<div class="row">');
            $('#experience').append(exp);
            exp.append(mainRow);
                mainRow.append($('<div class="col-sm-6">').text(company.lugar));
                mainRow.append($('<div class="col-sm-6">').append($('<img class="logo">').attr('src', company.logo)));
            company.cargos.forEach(function(cargo){
                var row = $('<div class="row item-lista">');
                var rowCargo = $('<div class="row item-lista">');
                rowCargo.append($('<div class="col-md-1 pull-left">')
                    .append('<span class="glyphicon glyphicon-asterisk">'));
                rowCargo.append($('<div class="col-md-3 pull-left">')
                    .append($('<div class="row">')).text(cargo.nombre));
                rowCargo.append($('<div class="col-md-5 pull-left">')
                    .append($('<p class="p-justify">')).text(cargo.description));
                if(cargo.fin != null){
                    var rowProgress = $('<div class="row">');
                    row.append(rowCargo);
                    rowCargo.append($('<div class="col-md-3 pull-left">').text(cargo.inicio+' - '+cargo.fin));
                    row.append(rowProgress);
                    var progressBar =$('<div class="progress-bar progress-bar-success">')
                        .attr('role','progressbar')
                        .attr('aria-valuenow','45')
                        .attr('aria-valuemin','0')
                        .attr('aria-valuemax','100')
                        .attr('style','width: 100%')
                        .text('Terminado');
                    rowProgress.append($('<div class="progress">').append(progressBar));
                } else {
                    var rowProgress = $('<div class="row">');
                    row.append(rowCargo);
                    rowCargo.append($('<div class="col-md-3 pull-left">').text(cargo.inicio+' - hoy'));
                    row.append(rowProgress);
                    var progressBar =$('<div class="progress-bar progress-bar-info progress-bar-striped active">')
                        .attr('role','progressbar')
                        .attr('aria-valuenow','45')
                        .attr('aria-valuemin','0')
                        .attr('aria-valuemax','100')
                        .attr('style','width: '+ (Math.floor(Math.random()*10)+50)+'%')
                        .text('En progreso');
                    rowProgress.append($('<div class="progress">').append(progressBar));
                }
                
                exp.append(row);
            });
        });
    });
}

$(document).ready(main);
