function compute()
{
    var amount = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = amount * rate * years /100;
    alert(interest);
}

function show_rate()
{
    var rate = document.getElementById("rate").value;
    var show = document.getElementById("rate_val");
    show.innerHTML= rate;
    
}
        