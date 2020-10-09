import $ from "jquery";

$(function () {

    const $listItem         = $('.main-catalog__tree-list-item');
    const $sublistItem      = $('.main-catalog__tree-sublist');
    const $searchInput      = $('.main-catalog__form');
    const $searchFormResult = $('.main-catalog__form-result');
    const $searchCloseIcon  = $('.main-catalog__form-close-icon');


    $sublistItem.hide();

    $listItem.on( 'click', function(event) {
        event.preventDefault();
        $( this )
            .children('.main-catalog__tree-sublist')
            .toggleClass('main-catalog__tree-sublist_state_active');
    } );


    $searchInput.on( 'click', function() {
        $( this )
            .next($searchFormResult)
            .toggleClass('main-catalog__form-result_state_active');
    } );

    $searchCloseIcon.on( 'click', function() {
        $searchFormResult.removeClass('main-catalog__form-result_state_active');
    } );

    

} );
