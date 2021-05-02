$(function () {
    // pobranie elementu wyświetlającego czas
    timeElement = $('#time')

    // interwał do odczytu czasu
    INTERWAL = 1000

    setInterval(function () {
        var date = new Date
        hour = date.getHours()
        minutes = date.getMinutes()
        // sprawdzanie długości minut - jeśli mniej niż 10 wyświetla tylko jedną cyfrę
        if (minutes.toString().length === 1) {
            minutes = '0' + minutes
        }
        timeElement.text(hour +':'+ minutes)
    }, INTERWAL)


})