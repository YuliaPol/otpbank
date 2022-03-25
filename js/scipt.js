
jQuery(function ($) {
    $(document).ready(function () {
        $('.page-wrap').on('input', '.diapason-answer .input-range', function(e){
            setDiapasonValue(this);
            $('.form-wrapper').find('.btn-submit').addClass('active')
            $('.form-wrapper').find('.comment-answer').fadeIn(300);
        });
        $('.page-wrap').on('change', '.main-question input', function(e){
            $('.form-wrapper').find('.comment-answer').fadeIn(300);
        });
        $('.page-wrap').on('input', '.comment-answer textarea', function(e){
            let value = $(this).val();
            if(value.length > 5){
                $('.form-wrapper').find('.btn-submit').addClass('active')
            } else {
                $('.form-wrapper').find('.btn-submit').removeClass('active')
            }

        });
        //set new diapsson value
        function setDiapasonValue(input){
            var value = $(input).val();
            var max = $(input).attr('max');
            var min = $(input).attr('min');
            var range = max - min;
            var relvalue = value - min;
            var percent = (100/range)*relvalue;
            var parents = $(input).parents('.diapason-answer');
            var paddleft = (34*percent)/100;
            parents.find('.label').css('left', 'calc(' + percent + '% - ' + paddleft + 'px)');
            parents.find('.value').css('left', 'calc(' + percent + '% - ' + paddleft + 'px)');
            parents.find('.value').html(value);
            parents.find('.input-box .bar-filled').css('width', percent + '%');
            parents.find('.label').css('background-position', percent + '%');
            if(value === min){
                parents.find('.top-label').find('span:nth-child(1)').addClass('hidden');
            } else {
                parents.find('.top-label').find('span:nth-child(1)').removeClass('hidden');
            }

            if(value === max){
                parents.find('.top-label').find('span:nth-child(2)').addClass('hidden');
            } else {
                parents.find('.top-label').find('span:nth-child(2)').removeClass('hidden');
            }

            if(value > min) {
                console.log(parents.find('.label'));
                parents.find('.label').addClass('active');
            } else {
                parents.find('.label').removeClass('active');
            }
        };
    });
});