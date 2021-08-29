function compute()
{
    var amount = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = amount * rate * years /100;
    var date = new Date();
    var targetYear = Number(date.getFullYear()) + Number(years);
    document.getElementById("result").innerHTML="If you deposit " + amount + " ,<br>at an interest rate of "
                                                + rate + "%.<br>You will receive an amount of " + interest +
                                                ",<br>in the year " + targetYear + ".";
}

function showRate()
{
    var rate = document.getElementById("rate").value;
    var show = document.getElementById("rate_val");
    show.innerHTML= rate;
    
}
        