$(document).ready(function () {
    
    var number = 0;
    var wins = 0;
    var losses = 0;
    var randomNumber = Math.floor(Math.random() * (121 - 19 + 1) + 19);

    function startGame() {
        randomNumber = Math.floor(Math.random() * (121 - 19 + 1) + 19);
        $("#randomNumber").text(randomNumber);

        $(".crystalButton").each(function () {
            $(this).val(Math.floor(Math.random() * (13 - 1 + 1) + 1));
            //or can do this.value = Math.random()
            console.log(this);
        });

        number = 0;
    }

    startGame();

    $(".crystalButton").click(function () {
        if (number == 0) {
            $("#winMessage").text("");
            $("#lossMessage").text("");
        }

        number = number + parseInt(this.value);
        $("#score").text(number);

        if (number == randomNumber) {
            $("#winMessage").text("You win!");
            wins = wins + 1;
            $("#wins").text(wins);
            startGame();
        }
        else if (number > randomNumber) {
            $("#lossMessage").text("You lost!");
            losses = losses + 1;
            $("#losses").text(losses);
            startGame();
        }

    });

   $('[data-bs-toggle="popover"]').popover({
    // trigger: 'focus'
  })

})
