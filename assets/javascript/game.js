$(document).ready(function () {

    var randomNumber = Math.floor(Math.random() * (121 - 19 + 1) + 19);
    $("#randomNumber").text(randomNumber);

    $(".crystalButton").each(function () {
        $(this).val(Math.floor(Math.random() * (13 - 1 + 1) + 1));
        //or can do this.value = Math.random()
        console.log(this);
    });

    var number = 0;

    $(".crystalButton").click(function () {
        number = number + parseInt(this.value);
        $("#number").text(number);
    });





})


