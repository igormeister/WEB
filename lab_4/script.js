function changeColor()
{
    var element = document.getElementById("first");
    r = Math.floor(Math.random() * (256));
    g = Math.floor(Math.random() * (256));
    b = Math.floor(Math.random() * (256));
    tr = Math.floor(Math.random() * (256));
    tg = Math.floor(Math.random() * (256));
    tb = Math.floor(Math.random() * (256));
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    colorText = '#' + tr.toString(16) + tg.toString(16) + tb.toString(16);
    element.style.background = color;
    element.style.color = colorText;
}

function changeColorQuery() 
{
    var element = document.querySelector("li.select");
    r = Math.floor(Math.random() * (256));
    g = Math.floor(Math.random() * (256));
    b = Math.floor(Math.random() * (256));
    tr = Math.floor(Math.random() * (256));
    tg = Math.floor(Math.random() * (256));
    tb = Math.floor(Math.random() * (256));
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    colorText = '#' + tr.toString(16) + tg.toString(16) + tb.toString(16);
    element.style.background = color;
    element.style.color = colorText;
}
function Delete()
{
    var element = document.getElementById("image");
    element.style.display = "none";
}
function Add()
{
    var element =document.getElementById("image");
    element.style.display = "block";
}
function big()
{
    var element =document.getElementById("image");
    element.style.width = "1280px"
}
function small()
{
    var element =document.getElementById("image");
    element.style.width ="900px"
}