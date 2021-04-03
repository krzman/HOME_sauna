$(function () {

    // // autorefresh main page
    // setTimeout(function (){
    //     location.reload();
    // },1000)

    // get element with temp
    tempElement = $('#temp')

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
    setInterval(getTemp,1000)


})