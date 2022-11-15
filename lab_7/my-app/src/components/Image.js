import React from "react";

function Image() {
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
return(
    <div>
    <a href="https://kyivcity.gov.ua/"><img id="image" src="https://tut-cikavo.com/images/Geographic/kviv-ukraine.jpg"/></a>
    <input type="button"  onClick={()=>Add()} value="Додати"/>
    <input type="button"  onClick={()=>big()} value="Збільшити"/>
    <input type="button"  onClick={()=>small()} value="Зменшити"/>
    <input type="button"  onClick={()=>Delete()} value="Видалити"/>
    </div>
    )
}

export default Image