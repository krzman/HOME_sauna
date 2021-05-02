$(function () {

    // get element with temp
    const tempElement = $('#temp')

    // get actualy temp from database
    var getTemp = function () {
        $.ajax({
            url: '/get_temp/',
            type: 'GET',
            dataType: 'json',
            data: {},
        }).done(function (response) {
            tempElement.text(response)
        })
    }

    // refresh temp
    setInterval(getTemp, 10000)

})