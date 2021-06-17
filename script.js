function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if(principal==0)
    {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }

    if(rate.value == "")
    {
        alert("Please enter the Rate");
        rate.focus();
        return false;
    }

    if(years.value == "")
    {
        alert("Please enter the Time in years");
        year.focus();
        return false;
    }

    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerText=interest;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
