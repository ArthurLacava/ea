/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // código que exibe/esconde o menu nos celulares
    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });

    // código que exibe a prévia
    $('.previa').click(function() {
        $(this).parent()
        	   .next(".previa").fadeIn("fast");
    });

    // código que esconde a prévia
    $('.fechar-previa').click(function() {
        $(this).parent()
        	   .parent().fadeOut("fast");
    });

    // código menu
    $('.expande').hover(
      function() {
        $('.expandidos').fadeIn();
      }, function() {
        $('.expandidos').fadeOut();
      }
    );

    // auxiliar de edição
    $('#block-views-aux-edicao-block h2').click(function() {
        $("#block-views-aux-edicao-block").toggleClass("ativo");
        $("#block-views-aux-edicao-block h2").toggleClass("ativo");
    });
      

    //usa o alemento alt para escrever o crédito da foto da biografia
    $(".field-name-field-verbete img").each(function() {
      var caption = $(this).attr('alt');
      $(this).wrap('<div class="caption"></div>');
      $(this).after('<div class="lgd-img">' + caption + '</div>');
    });
    

    // revisões > versões
    $('.not-logged-in .tabs-primary a').text("versões");

    //movimento suave entre ancoras
    $(function() {
    $('a[href^="#"]').bind('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    });

  }
};


})(jQuery, Drupal, this, this.document);
