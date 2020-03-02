$(document).ready(function(){
    $('.carousel__inner').slick({
      autoplay: true,
      centerMode: true,

        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/rt.png"></button>',
      });

      $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    function valideForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
                },
              phone: "required",
              email:{
                  required: true,
                  email: true,
              }
          },
          messages: {
              name: {
                  required: "Пожалуйста, введите своё имя",
                  minlength: jQuery.validator.format("Введите минимум {0} буквы!")
                },
              phone: "Пожалуста, введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свой почтовый адрес",
                email: "Неправильно введён почтовый адрес"
              }
            }
      });
  };

  valideForms('#question-form');
  valideForms('#coll-form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

});
