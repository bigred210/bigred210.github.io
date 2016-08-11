(function() {
"use strict";
    
    $(document).ready(function () {

        
        var randomColor = [];
        var index = 0;
        var $box = $(".box");
        var random = "";
        var colorIndex = 0;


       
            // next 3 functions show how SimpleWars compiles data and works
        function flipper() {
            if (index < randomColor.length) {
                $box.eq(randomColor[index]).fadeTo(900, 0.2).fadeTo(100, 1)
                setTimeout(flipper, 1100);
                $('#audio')[0].play(randomColor[index]);
                index++; 
            } 
            else {
                index = 0;
            }
        }; // end flipper()


        function getRandom() {
            random = Math.floor(Math.random() * $box.length);
                randomColor.push(random);
        }; // end getRandom() 


        $("#start").click(function(){
            getRandom();
            flipper(randomColor);
        }); // end ("#start").click 




            // checking human against SimpleWars
        $(".box").click(function(e) {
            var clickBox = $(this).data("number");
            if (clickBox == randomColor[colorIndex]) {
                    console.log("hit: " + clickBox);
                            $box.eq(randomColor[colorIndex]).fadeTo(900, 0.2).fadeTo(100, 1);
                            $('#audio')[0].play(randomColor[colorIndex]);
                                colorIndex++;         
                if (colorIndex == randomColor.length) {
                        console.log("You did it!");
                            colorIndex = 0;
                                var delaySuccess = setTimeout(function () {
                                    $("#success_video").show();
                                    $('#success')[0].play();
                                    }, 1000);
                                    var setTimeoutId = setTimeout(function () {
                                    $("#success_video").css("display" , "none");
                                    }, 4000);                    
                }
            }

            else {
                console.log("miss: " + clickBox);
                    console.log("You IDIOT!");
                        colorIndex = 0;
                            var delayDefeat = setTimeout(function () {
                                $("#defeat_video").show();
                                $('#defeat')[0].play();
                                }, 1000);
                                var setTimeoutId = setTimeout(function () {
                                $("#defeat_video").css("display" , "none");
                                }, 2300);
            }

        });  // end (".box").click



            // refresh screen for new game 
        $('#new').click(function() {
            location.reload();
        }); // end ("#new").click



        // konami code = clip for upcoming 2016 movie
        var keys = {
            up:    38,
            down:  40,
            left:  37,
            right: 39,
            a:     65,
            b:     66,
            enter: 13
        };
        var sequence = [
            keys.up,
            keys.up,
            keys.down,
            keys.down,
            keys.left,
            keys.right,
            keys.left,
            keys.right,
            keys.b,
            keys.a,
            keys.enter
        ];
        var keyIndex = 0;
        $("body").keydown(function(e) {
            var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
            if (charCode == sequence[keyIndex]) {
                console.log("hit: " + charCode);
                keyIndex++;
                if (keyIndex == sequence.length) {
                    console.log("A Winner Is You!");
                    $("#secret_video").show();
                    $('#video')[0].play();
                    var timeoutId = setTimeout(function () {
                        $("#secret_video").css("display" , "none");
                    }, 65700);
                    keyIndex = 0;
                }
            } else {
                console.log("miss: " + charCode);
                keyIndex = 0;
            }
        }); // end konami code


    }); 

})();