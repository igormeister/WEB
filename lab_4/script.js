function changeColor()
{
    var element = document.getElementById("first");
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let tr = Math.floor(Math.random() * (256));
    let tg = Math.floor(Math.random() * (256));
    let tb = Math.floor(Math.random() * (256));
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    let colorText = '#' + tr.toString(16) + tg.toString(16) + tb.toString(16);
    element.style.background = color;
    element.style.color = colorText;
}

function changeColorQuery() 
{
    var element = document.querySelector("li.select");
    let r = Math.floor(Math.random() * (256));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let tr = Math.floor(Math.random() * (256));
    let tg = Math.floor(Math.random() * (256));
    let tb = Math.floor(Math.random() * (256));
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    let colorText = '#' + tr.toString(16) + tg.toString(16) + tb.toString(16);
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