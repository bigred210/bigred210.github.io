
    // creating a deck of cards for the computer to randomly draw from.
var compDecks = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];
var compDeck = compDecks[Math.floor(Math.random()*compDecks.length)];
    console.log(compDeck);
var cards = [compDeck];
var computer = cards[Math.floor(Math.random()*cards.length)];
    console.log(computer);
    document.getElementById("computer").innerHTML = computer;

    // creating a deck of cards for the plaer to randomly draw from.
var playerDecks = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];
var playerDeck = playerDecks[Math.floor(Math.random()*playerDecks.length)];
    console.log(playerDeck);    
var cards = [playerDeck];
var player = cards[Math.floor(Math.random()*cards.length)];
    console.log(player);
    document.getElementById("player").innerHTML = player;

    // huge if statement comparing the two seperate cards drawn at random for the computer/player.
if (player == "A" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "A" && computer == "K") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";

}  else if (player == "A" && computer == "Q") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "A" && computer == "J") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "A" && computer == "10") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "A" && computer == "9") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "A" && computer == "8") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "A" && computer == "7") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "A" && computer == "6") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "A" && computer == "5") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "A" && computer == "4") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "A" && computer == "3") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "A" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "K" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "K" && computer == "K") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";

}  else if (player == "K" && computer == "Q") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "K" && computer == "J") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "K" && computer == "10") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "K" && computer == "9") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "K" && computer == "8") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "K" && computer == "7") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "K" && computer == "6") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "K" && computer == "5") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "K" && computer == "4") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "K" && computer == "3") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "K" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "Q" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "Q" && computer == "K") {
    console.log("ou LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "Q" && computer == "Q") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";
    
}  else if (player == "Q" && computer == "J") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "Q" && computer == "10") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "Q" && computer == "9") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "Q" && computer == "8") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "Q" && computer == "7") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "Q" && computer == "6") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "Q" && computer == "5") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "Q" && computer == "4") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "Q" && computer == "3") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "Q" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
} else if (player == "J" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "J" && computer == "K") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "J" && computer == "Q") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "J" && computer == "J") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";
    
}  else if (player == "J" && computer == "10") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "J" && computer == "9") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "J" && computer == "8") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "J" && computer == "7") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "J" && computer == "6") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "J" && computer == "5") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "J" && computer == "4") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "J" && computer == "3") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "J" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
} else if (player == "10" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "10" && computer == "K") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "10" && computer == "Q") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "10" && computer == "J") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "10" && computer == "10") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";
    
}  else if (player == "10" && computer == "9") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "10" && computer == "8") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "10" && computer == "7") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "10" && computer == "6") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "10" && computer == "5") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "10" && computer == "4") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "10" && computer == "3") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "10" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "9" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "9" && computer == "K") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "9" && computer == "Q") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "9" && computer == "J") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "9" && computer == "10") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "9" && computer == "9") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";
    
}  else if (player == "9" && computer == "8") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "9" && computer == "7") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "9" && computer == "6") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "9" && computer == "5") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "9" && computer == "4") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "9" && computer == "3") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "9" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
} else if (player == "8" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "8" && computer == "K") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "8" && computer == "Q") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "8" && computer == "J") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "8" && computer == "10") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "8" && computer == "9") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "8" && computer == "8") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";
    
}  else if (player == "8" && computer == "7") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "8" && computer == "6") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "8" && computer == "5") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "8" && computer == "4") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "8" && computer == "3") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "8" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
} else if (player == "7" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "7" && computer == "K") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "7" && computer == "Q") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "7" && computer == "J") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "7" && computer == "10") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "7" && computer == "9") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "7" && computer == "8") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "7" && computer == "7") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";
    
}  else if (player == "7" && computer == "6") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if (player == "7" && computer == "5") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "7" && computer == "4") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "7" && computer == "3") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "7" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
} else if (player == "6" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "6" && computer == "K") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "6" && computer == "Q") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "6" && computer == "J") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "6" && computer == "10") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "6" && computer == "9") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "6" && computer == "8") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "6" && computer == "7") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "6" && computer == "6") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";
    
}  else if (player == "6" && computer == "5") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "6" && computer == "4") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "6" && computer == "3") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "6" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
} else if (player == "5" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "5" && computer == "K") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "5" && computer == "Q") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "5" && computer == "J") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "5" && computer == "10") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "5" && computer == "9") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "5" && computer == "8") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "5" && computer == "7") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "5" && computer == "6") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "5" && computer == "5") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";
    
}  else if  (player == "5" && computer == "4") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "5" && computer == "3") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "5" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
} else if (player == "4" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "4" && computer == "K") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "4" && computer == "Q") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "4" && computer == "J") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "4" && computer == "10") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "4" && computer == "9") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "4" && computer == "8") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "4" && computer == "7") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "4" && computer == "6") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "4" && computer == "5") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if  (player == "4" && computer == "4") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";
    
}  else if  (player == "4" && computer == "3") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
}  else if  (player == "4" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
} else if (player == "3" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "3" && computer == "K") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "3" && computer == "Q") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "3" && computer == "J") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "3" && computer == "10") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "3" && computer == "9") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "3" && computer == "8") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "3" && computer == "7") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "3" && computer == "6") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "3" && computer == "5") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if  (player == "3" && computer == "4") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if  (player == "3" && computer == "3") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";
    
}  else if  (player == "3" && computer == "2") {
    console.log("You WIN")
    document.getElementById("result").innerHTML = "You WIN";
    
} else if (player == "2" && computer == "A") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

} else if (player == "2" && computer == "K") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";

}  else if (player == "2" && computer == "Q") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "2" && computer == "J") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "2" && computer == "10") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "2" && computer == "9") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "2" && computer == "8") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "2" && computer == "7") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "2" && computer == "6") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if (player == "2" && computer == "5") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if  (player == "2" && computer == "4") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if  (player == "2" && computer == "3") {
    console.log("You LOSE")
    document.getElementById("result").innerHTML = "You LOSE";
    
}  else if  (player == "2" && computer == "2") {
    console.log("It's a TIE")
    document.getElementById("result").innerHTML = "It's a TIE";
    
}   else {
    console.log("Something went horribly wrong, I screwed up somewhere!")
    document.getElementById("result").innerHTML = "Something went horribly wrong, I screwed up somewhere!";
}

        // SCORE(); will evaluate the .innerHTML and judging on the result will add a score to the user/computer, With the use of an if statement.
var urScore = localStorage.user || 0;
var coScore = localStorage.comp || 0;

var score = function() { 

    if (result.innerHTML == "You WIN") 
    {
        urScore++;
        user = urScore;
        localStorage.user = urScore;
        document.getElementById("userScore").innerHTML = urScore;
        document.getElementById("compScore").innerHTML = coScore;
        console.log("user" + " " + urScore);
        console.log("computer" + " " + coScore.length);
    } 

    else if (result.innerHTML == "You LOSE") 
    {
        coScore++;
        comp = coScore;
        localStorage.comp = coScore;
        document.getElementById("compScore").innerHTML = coScore;
        document.getElementById("userScore").innerHTML = urScore;
        console.log("computer" + " " + coScore);
        console.log("user" + " " + urScore);
    } 

    else 
    {
        document.getElementById("userScore").innerHTML = urScore; 
        document.getElementById("compScore").innerHTML = coScore;
    }
}
score()

    // refreshPage() = on click of the 'play' button the page will reload. By doing this we will re-run score() and create a new round of the game and keeping track of the scores. 
function refreshPage(){
    location.reload();
}

    // clearPage() = on click of the 'clear' button the page will reload. By doing this we will re-run score() and create a new game and start at 0 for the scores.
function clearPage(){
    localStorage.clear();
    location.reload();
}

