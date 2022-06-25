function check()
{
    var username=document.getElementById("user").value;
    var password=document.getElementById("password").value;
    if(username=="Gigi" && password=="Julnov")
    {
        window.location.href="Home_Page.html";
    }
    else
    {
        alert("Invalid");
    }
}