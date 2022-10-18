function check(){
    var PIB = document.getElementById("PIB").value
    var groups =document.getElementById("groups").value
    var telephone = document.getElementById("telephone").value
    var adresss = document.getElementById("address").value
    var mail = document.getElementById("mail").value
    var btn = document.querySelector(".btn")
    if(document.getElementById("telephone").checkValidity() && document.getElementById("mail").checkValidity() && document.getElementById("PIB").checkValidity() && document.getElementById("groups").checkValidity() && document.getElementById("address").checkValidity()){
            btn.removeAttribute('disabled');
    }else{
        btn.setAttribute('disabled', true);
        document.getElementById("tel").innerHTML = "Uncorrect telephone number"
        document.getElementById("Email").innerHTML = "Uncorrect Email adress"
        document.getElementById("name").innerHTML = "Uncorrect form of username"
        document.getElementById("group").innerHTML = "Uncorrect form of group"
        document.getElementById("adress").innerHTML = "Uncorrect form of adress"
    }
}
function enter()
{
    let elementList = Array.from(document.querySelectorAll('input.form')).map(inputElement => inputElement.value)
    document.getElementById("name").innerHTML = elementList[0]
    document.getElementById("group").innerHTML = elementList[1]
    document.getElementById("tel").innerHTML = elementList[2]
    document.getElementById("adress").innerHTML = elementList[3]
    document.getElementById("Email").innerHTML = elementList[4]
    let validElementList = ["Шерстюк І. О.","IS-91","(093)-944-86-49","м. Київ","example@gmail.com"]
    let idList = ["name","group","tel","adress","Email"]
    for(let i=0; i < elementList.length; i++){
        if(elementList[i] != validElementList[i]){
            document.getElementById(idList[i]).style.background ="#ff0000"
        }else{
            document.getElementById(idList[i]).style.background="#ffffff"
        }
    }
}

function randomColor(id)
{
    let element = document.getElementById(id)
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

function backColor(id)
{
    let element = document.getElementById(id)
    element.style.background = '#ffffff'
    element.style.color = '#000000'
}

function getColor(id)
{
    
    let back = document.getElementById("back").value
    let font = document.getElementById("style").value
    let element = document.getElementById(id)
    element.style.background = back;
    element.style.color = font;
}

function tab(id)
{
    let back = document.getElementById("back").value
    let font = document.getElementById("style").value
    let node = document.querySelectorAll("td")
    let Array = [].slice.call(node,0)
    let element = document.getElementById(id)
    element.style.background = '#ffffff'
    element.style.color = '#000000'
    let ArrayIndex = Array.indexOf(element)
    Array.splice(ArrayIndex,1)
    console.log(Array)
    for(let i=0;i<Array.length;i++)
    {
        Array[i].style.background=back;
        Array[i].style.color = font;
    }
}