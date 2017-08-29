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
            scrollTop: $("#experience").offset().top-75
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
    function yearCalculator(day, year, month){
        var birth = new Date();
        birth.setDate(day);
        birth.setFullYear(year);
        birth.setMonth(month);
        var today = new Date();
        var age = Math.floor((today-birth) / (365.25 * 24 * 60 * 60 * 1000));
        return age;
        
    };
    $('#edad').text(yearCalculator(13,1996,2)+'');
    

    //Cargar habilidades
    //Array de habilidades
var programming = [
    {
        'habilidad' : 'java',
        'anio' : 2013, 
        'mes' : 1,
        'dia' : 21,
        'mastery' : 0.85 },
    {
        'habilidad' : 'c#',
        'anio' : 2015, 
        'mes' : 2,
        'dia' : 21,
        'mastery' : 0.70},
    {
        'habilidad' : 'HTML5/JavaScript',
        'anio' : 2014, 
        'mes' : 7,
        'dia' : 21,
        'mastery' : 0.65},
    {
        'habilidad' : 'GIT',
        'anio' : 2014, 
        'mes' : 3,
        'dia' : 21,
        'mastery' : 0.90},
    {
        'habilidad' : 'Shell',
        'anio' : 2016, 
        'mes' : 2,
        'dia' : 21,
        'mastery' : 0.60},
    {
        'habilidad' : 'Android',
        'anio' : 2017, 
        'mes' : 1,
        'dia' : 21,
        'mastery' : 0.70},
];

programming.forEach(function(ability){
    var container = $('<div class="container">');
    var row = $('<div class="row">');
    container.append(row);
    row.append($('<div class="col-md-1 pull-left"><span class="glyphicon glyphicon-asterisk"></span></div>'));
    var span = $('<span class="label label-primary">');
    span.attr('id','exp'+ability.habilidad).text(ability);
    var p = $('<p class="col-sm-4">').append(ability.habilidad)
        .innertHTML = ability.habilidad+' '+span+' de experiencia';
            
    row.append(p);
    row.append($('<div class="progress">')
        .append($('<div class="progress-bar">')
            .attr('role','progressbar')
            .attr('aria-valuenow','45')
            .attr('aria-valuemin','0')
            .attr('aria-valuemax','100')
            .attr('style','width: '+ability.mastery*100+'%').text(ability.mastery*100+'%')
    ));
    $('#programming').append(container);
});


    
};
$(document).ready(main);


