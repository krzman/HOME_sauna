$(function () {

    // POBIERANIE ELEMENTÓW

    // temperatura
    const temp = $('#param-temp')
    const btnTempAdd = $('#btn-temp-add')
    const btnTempSub = $('#btn-temp-sub')
    // czas sauna
    const sauna = $('#param-t-sauna')
    const btnTimeSaunaAdd = $('#btn-t-sauna-add')
    const btnTimeSaunaSub = $('#btn-t-sauna-sub')
    // czas prysznic
    const shower = $('#param-t-shower')
    const btnTimeShowerAdd = $('#btn-t-shower-add')
    const btnTimeShowerSub = $('#btn-t-shower-sub')
    // ilość sesji
    const sesion = $('#param-ses')
    const btnSesionAdd = $('#btn-ses-add')
    const btnSesionSub = $('#btn-ses-sub')

    // FUNKCJA DODAWANIA
    const funAdd = function (param, value) {
        if (param.val() < value) {
            param.val(parseInt(param.val()) + 1)
        }
    }

    // FUNKCJA ODEJMOWANIA
    const funSub = function (param, value) {
        if (param.val() > value) {
            param.val(parseInt(param.val()) - 1)
        }
    }

    // OBSŁUGA PRZYCISKÓW

    // TEMPERATURA
    // zwiększanie temperatury do 90
    btnTempAdd.on('click', function () {
        funAdd(temp, 80)
    })
    // zmniejszanie temperatury do 50
    btnTempSub.on('click', function () {
        funSub(temp, 20)
    })

    // CZAS SAUNA
    // zwiększanie czasu
    btnTimeSaunaAdd.on('click', function () {
        funAdd(sauna, 20)
    })
    // zmniejszanie czasu
    btnTimeSaunaSub.on('click', function () {
        funSub(sauna, 1)
    })

    // CZAS PRYSZNIC
    // zwiększanie czasu
    btnTimeShowerAdd.on('click', function () {
        funAdd(shower, 20)
    })
    // zmniejszenie czasu
    btnTimeShowerSub.on('click', function () {
        funSub(shower, 1)
    })

    // ILOŚĆ SESJI
    // zwiększanie
    btnSesionAdd.on('click', function () {
        funAdd(sesion, 5)
    })
    // zmniejszanie
    btnSesionSub.on('click', function () {
        funSub(sesion, 1)
    })

})