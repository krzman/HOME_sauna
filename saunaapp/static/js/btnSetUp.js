$(function () {

    // pobranie przycisku start
    var button = $('.btn-set-up  ')

    // zdarzenie - przeladowanie strony
    button.on('click', function () {
        location.reload()
    })

})