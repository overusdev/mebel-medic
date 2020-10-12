import $ from "jquery";

$(function () {

    const $listItem         = $('.main-catalog__tree-list-item');
    const $sublistItem      = $('.main-catalog__tree-sublist');
    const $searchInput      = $('.search-form');
    const $searchFormResult = $('.search-form__result');
    const $searchFormActive = 'search-form__result_state_active';
    const $searchCloseIcon  = $('.search-form__close-icon');


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
            .toggleClass( $searchFormActive );
    } );

    $searchCloseIcon.on( 'click', function() {
        $searchFormResult.removeClass( $searchFormActive );
    } );

    

} );
