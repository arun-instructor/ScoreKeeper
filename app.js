$(document).ready(function() {

    var score = 0;

    //Increase score by 5
    $("#increase-5").on("click", function() {
        score += 5;

        $("#score").html(score + " Points");
    });

    //Decrease score by 5
    $("#decrease-5").on("click", function() {
        //Step 1: Calculate the new score with 5 removed
        //Step 2: Check to make sure this new score is 0 or above
        //Step 3: If score is 0 or above, update HTML
        score -= 5;

        if (score >= 0) {
            $("#score").html(score + " Points");
        } else {
            score = 0;
            $("#score").html("0 Points");
        }
    });

    $("#custom-score-form").on("submit", function(event) {
        event.preventDefault();

        var customScore = $("#custom-score").val();
        var customScoreInt = parseInt(customScore);

        if (customScoreInt >= 0) {
            score = customScoreInt;
            $("#score").html(score + " Points");
            $("#custom-score").val("");
        } else {
            score = 0;
            $("#score").html("0 Points");
            alert("You can't enter a negative score!");
        }
    });

});
