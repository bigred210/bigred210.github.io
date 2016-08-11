(function() {
"use strict";
    
    $(document).ready(function () {

                // global vars
            var count = 30;
            var score = 0;
            var highscore = localStorage.getItem("highscore");
            var imgIndex = 0;
            var keepGoing;
            var counter;
            var randomMole;
            var $hole = $(".row");
            var $image = $(".image");



                // function uses random img + fading in/out + scoreboard
            function whackaWalker() {
                var randomImg = getRandom();
                        var imgMole = setTimeout(function () {
                            $image.eq(randomImg).show().click(function() {
                                score++;
                                $('#scoreboard').html(score);
                                $('#audio')[0].play(whackaWalker(keepGoing));
                                highscores();
                            });
                        }, 100);
                        var setTimeoutId = setTimeout(function () {
                            $image.eq(randomImg).css("display" , "none").off("click");
                        }, 1400);
                        console.log(imgMole); 
            }; // end whackaWalker()

                // function gets the random img
            function getRandom() {
                var moleImg = Math.floor(Math.random() * $image.length);
                keepGoing = moleImg;
                console.log(moleImg);
                return moleImg;
            }; // end getRandom() 

                // game timer
            function timer() {
                count--;
                if (count == 0) {
                    clearInterval(counter);
                    clearInterval(randomMole);   
                }
                $("#timeboard").html(":" + count);
            } // end timer()

                // high score
            function highscores() {
                var currentScore = score;
                if (currentScore > highscore) {
                    highscore = currentScore;
                    $("#high-scoreboard").html("High Score: " + highscore);
                    localStorage.setItem("highscore", highscore)
                };
            }; // end highscores()

                // on .click of start game will begin
            $("#start").click(function(){
                count = 31;
                score = 0;
                counter = setInterval(timer,1000);
                randomMole = setInterval(function () {
                    whackaWalker(keepGoing);
                }, 1500);
            }); // end ("#start").click 


                // carousel 
            $("#start").on("click", function(e) {
                var activeImg = $(".shown");
                var nextActiveImg = activeImg.next();
                if  (nextActiveImg.length == 0) {
                    nextActiveImg = $("carousel-inner img").first();
                }
                activeImg.removeClass("shown").addClass("hidden").css("z-index", -10);
                nextActiveImg.addClass("shown").removeClass("hidden").css("z-index",20);
            }); // end (".next").on


                // find/change local storage highscore to 0 if null
            if (highscore == null) {
                highscore = 0;
            }


                // call highscores on page load and fill scoreboard with local storage score
            highscores();
            $("#high-scoreboard").html("High Score: " + highscore);

    }); // end $(document).ready

})();