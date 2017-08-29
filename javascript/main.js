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
        $('.active').removeClass( "active", 300, "swing" );
        $(this).addClass('active',300,'swing');
          
    });
    $('#nav-experience').on('click',function(){
        $('html,body').animate({
            scrollTop: $("#experience").offset().top
        });
        $('.active').removeClass( "active", 300, "swing" );
        $(this).addClass('active',300,'swing');  
    });
    $('#nav-abilities').on('click',function(){
        $('html,body').animate({
            scrollTop: $("#abilities").offset().top
        });
        $('.active').removeClass( "active", 300, "swing" );
        $(this).addClass('active',300,'swing');  
    });
    $('#nav-interests').on('click',function(){
        $('html,body').animate({
            scrollTop: $("#intersts").offset().top
        });
        $('.active').removeClass( "active",300, "swing" );
        $(this).addClass('active',300,'swing');
    });
    $('#nav-connections').on('click',function(){
        $('html,body').animate({
            scrollTop: $("#intersts").offset().top
        });
        $('.active').removeClass( "active",300, "swing" );
        $(this).addClass('active',300,'swing');
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
    var birth = new Date();
    birth.setDate(13);
    birth.setFullYear(1996);
    birth.setMonth(2);
    var today = new Date();
    var age = Math.floor((today-birth) / (365.25 * 24 * 60 * 60 * 1000));
    $('#edad').text(age+'');

    //Cargar habilidades
    var programming = [
        {
        'habilidad' : 'java',
        'anio' : 2013, 
        'mes' : 'enero',
        'dia' : 21,
        'mastery' : 0.80,
        'continua' : true },
        {
        'habilidad' : 'c',
        'anio' : 2013, 
        'mes' : 'enero',
        'dia' : 21,
        'continua' : true },
        {
        'habilidad' : 'java',
        'anio' : 2013, 
        'mes' : 'enero',
        'dia' : 21,
        'continua' : true },
        {
        'habilidad' : 'java',
        'anio' : 2013, 
        'mes' : 'enero',
        'dia' : 21,
        'continua' : true }
    ];
};
$(document).ready(main);
