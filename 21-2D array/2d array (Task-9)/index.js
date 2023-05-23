//2d array
        //create a function called highestRunScorer that will
        //Receive a 2d array called playerInfo
        //Based on highest score, return the name of the player
        function highestRunScorer(playerInfo){
            var maxScorerName=playerInfo[0][0];
            var maxRun=playerInfo[0][1];
            for(var x=1; x < playerInfo.length; x++){
                if(maxRun < playerInfo[x][1]){

                    maxRun = playerInfo[x][1];
                    maxScorerName = playerInfo[x][0];
                }
            }
            return maxScorerName;

        }
        var playerInfo=[
            ["Ashraful",90],
            ["Shakib Al Hasan",56],
            ["Ishtiak Ahmed",149],
            ["Virat Kholi",123],
            ["Kl Rahul",32]
        ];
        var onekRunJar=highestRunScorer(playerInfo);
        document.write(onekRunJar);