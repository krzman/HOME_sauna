$(function (){

    // pobranie ustawionej temperatury
    const setTemp = $('#setTemp').val()

    // pobranie przycisku start
    const startButton = $('#startButton')

    // interwal sprawdza czy aktualna temperatura jest większa od zadanej, wtedy pozwala nacisnąć start
    var showButton = setInterval(function () {
        actualTemp = $('#temp').text()
        if (parseInt(actualTemp) > parseInt(setTemp)) {
            startButton.removeAttr('disabled')
            const stoper = 1
            clearInterval(showButton)
        }
    },1000)


    // stoper



})