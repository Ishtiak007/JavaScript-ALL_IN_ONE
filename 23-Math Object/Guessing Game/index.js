var youWon=0;
        var youLost=0;

        for(var x=1; x<=5; x++){
            var guessNumber = parseInt(prompt("Guess any number among 1 to 5: "));
        var randomNumber=Math.floor(Math.random()*5 +1);

        if(guessNumber == randomNumber){
            document.write("You have won,Your guess is correct"+"<br>");
            youWon++;
        }
        else
        {
            document.write("Sorry,Your guess is incorrect"+"<br>");
            youLost++;
        }
        }
        document.write("In this game you won :"+ youWon +" times"+"<br>");
        document.write("In this game you lost :"+ youLost +" times"+"<br>");