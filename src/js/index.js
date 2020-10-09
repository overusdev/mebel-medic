import $ from "jquery";


$(function () {

    const $listItem    = $('.main-catalog__tree-list-item');
    const $sublistItem = $('.main-catalog__tree-sublist');

    $sublistItem.hide();

    $listItem.on( 'click', function(event) {
        event.preventDefault();
        $( this ).children('.main-catalog__tree-sublist').toggleClass('main-catalog__tree-sublist_state_active');
    } );

});
