$(function($) {

    $('.conditional-select').change(function(){

        $('.conditional-select-field').hide();

        selection = $('.conditional-select').prop('selectedIndex');

        console.log(selection);

        switch(selection){
            case 4:
            case 5:
                $('.conditional-select-field').show();
                break;
        }

    });

    $('.conditional-select-2').change(function(){

        $('.conditional-select-field-2').hide();

        selection = $('.conditional-select-2').prop('selectedIndex');

        console.log(selection);

        switch(selection){
            case 4:
            case 5:
                $('.conditional-select-field-2').show();
                break;
        }

    });

});

