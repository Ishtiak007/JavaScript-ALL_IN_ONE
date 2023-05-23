var num=["Ishtiak","Habib","Anish","Obaidur"];
        document.write(num);
        num.pop();  //using pop
        document.write("<br>"+num);

        //Ebar ami first er dik theke "Ishtiak" nam ta tule dibo
        //shift use kore
        num.shift();
        document.write("<br>"+num)

        //Jodi special vabe kaw k remove korte chai taile
        num.shift("Habib");
        document.write("<br>"+num)