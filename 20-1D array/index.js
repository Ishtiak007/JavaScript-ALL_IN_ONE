//One dimentional array
        //create a function called highestScore 
        //Receive a 1D array called scores
        //return the highest score
        
        function highestScore(run){
            var max=run[0];
            for(var x=1; x<run.length; x++){
                if(max<run[x]){
                    max=run[x];
                }
            }
            return max;

        }
        var run=[12,67,90,54,37,102,109];
        var maxScore=highestScore(run);
        document.write(maxScore);