var numbers=[50,3,45,12,1,4,6,7,78];
        numbers.sort(function(a,b){
            return a-b;
        });
        document.write("<br>"+numbers);
        numbers.reverse(function(a,b){
            return a-b;
        });
        document.write("<br>"+numbers);
