$(document).ready(function () {
    $('#homeLink').click(function () {

        location.reload();

    });

    // Al hacer clic en "Proyectos"
    $('#proyectosLink').click(function () {
        $('.nav-link').css({
            'background-color': '#005f87'
        });

        $('#proyectosLink').css({
            'background-color': '#fb4f05',
            'border-radius': '4px'
        });
        toogle();

        $('.navbar-toggler').click();
        $('#content').load('/proyectos');  // Cargar contenido de la ruta '/proyectos'
    });

    // Al hacer clic en "Contacto"


    $('#contactoLink').off('click').on('click', function () {
        $('.hero-section').css('background-image', 'none');
        $('.hero-section').css('display', 'none');

        $('.nav-link').css({
            'background-color': '#005f87'
        });

        $('#contactoLink').css({
            'background-color': '#fb4f05',
            'border-radius': '4px'
        });
        $('.navbar-toggler').click();
        toogle();
        // Cargar contenido de la ruta '/contacto' 
        $('#content').load('/contacto');
    });

    $('#servicesLink').click(function () {
        $('.nav-link').css({
            'background-color': '#005f87'
        });

        $('#servicesLink').css({
            'background-color': '#fb4f05',
            'border-radius': '4px'
        });
        toogle();
        $(".hero-section").css('display', 'none')
        $('.navbar-toggler').click();
        $('#content').load('/services');
    });


    $('#proyectosLink').click(function () {
        $('.nav-link').css({
            'background-color': '#005f87'
        });

        $('#proyectosLink').css({
            'background-color': '#fb4f05',
            'border-radius': '4px'
        });
        toogle();
        $(".hero-section").css('display', 'none')
        $('.navbar-toggler').click();
        $('#content').load('/proyectos');
    });
    
});

function toogle() {
    if ($(window).width() < 768) {
        $('.navbar-toggler').click();
    }
}



function adjustCarouselCaptions() {
    const captions = $('.carousel-caption');

    if ($(window).width() < 768) {
      captions.removeClass('d-none');  // Asegura que el texto sea visible
    } 
  }



  // Volver a ejecutar la función cuando se cambie el tamaño de la ventana
  $(window).resize(function() {
    adjustCarouselCaptions();
  });
