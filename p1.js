function check()
{
    var username=document.getElementById("user").value;
    var password=document.getElementById("password").value;
    if(username=="Gigi" && password=="Nov30")
    {
        window.location.href="Home_Page.html";
    }
    else
    {
        alert("Invalid");
    }
}