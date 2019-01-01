window.addEventListener("load", function(){

$('.preloader').delay(2500).fadeOut('slow'); // will fade out the white DIV that covers the website. 

//----------------------- HEADER --------------------------
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 70) {
        $(".header").addClass("header-scroll");
    } else {
        $(".header").removeClass("header-scroll");
    }
});


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.main-menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeAttr("id", "current");
        })
        $(this).attr("id", "current");
      
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    var off = ($(window).height()) / 2;
    scrollPos = scrollPos + off;
    $('.navig a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height()  > scrollPos) {
            $('.navig ul li a').removeAttr("id", "current");
            currLink.attr("id", "current");
        }
        else{
            currLink.removeAttr("id", "current");
        }
    });
}
//---------------------END OF HEADER --------------------------
/*------Show/hide burger menu list-------*/
$('.navigation-toggle').on('click',function() {

    if($('.navigation-target').hasClass('clicked')){
      $('.navigation-target').removeClass('clicked');
      $('.dropdown-menu').slideUp();
        
    }
    else{
      $('.navigation-target').addClass('clicked');
      $('.dropdown-menu').slideDown();
    }
  });

  $(document).ready(function () {
    
    //smoothscroll
    $('.mobile-menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
      
        var target = this.hash;
        $target = $(target);

        $(".dropdown-menu").slideUp();
        $('.navigation-target').removeClass('clicked');
        
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target; 
        });
    });
});

//form-section
$(".btn-form").click(function(){
    $(".form-section").addClass('burger-show');
});

$(".form-close").click(function(e){
    $(".form-section").removeClass('burger-show');
    $(".form-info").removeClass('hidden');
    $(".message-send").addClass('hidden');
    $('.input').val('');
});

$(".btn-message").click(function(e){
    $(".form-info").addClass('hidden');
    $(".message-send").removeClass('hidden');
    $('.input').val('');
});

jQuery(function($){
    $(".form-section").mouseup(function (e){ // отслеживаем событие клика по веб-документу
        var block = $(".form-contain"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            $(".form-section").removeClass('burger-show');
            $(".form-info").removeClass('hidden');
            $(".message-send").addClass('hidden');
            $('.input').val('');
        }
    });
});

//hover
$(".photo").mouseover(function(){
    $(this).find("div").removeClass("hidden");
    $(this).find(".svg").addClass("hidden");
    $(this).stop().animate({ 
        marginTop:'-1rem'
  },300);
});
$(".photo").mouseout(function(){
    $(this).find(".photo-hover").addClass("hidden");
    $(this).find(".svg").removeClass("hidden");
    $(this).stop().animate({ 
        marginTop:'0'
  },300);
});

});