import React, { Component } from "react";

class Content extends Component {
    render() {
        return (
            <div>
                <p>Місце народження: 15-го Липня, 2001 року, м. Київ<br/></p>
                <p>Освіта: Гімназія №32 "Успіх", м.Київ;<br/><p>&emsp;&emsp;&emsp; НТУУ "КПІ", м.Київ</p></p>
                <p id="first" onClick={()=>changeColor()}>Хоббі:</p>
                <ul>
                    <li className="select" onClick={()=>changeColorQuery()}>Спорт</li>
                    <li>Комп'ютерні ігри</li>
                    <li>Перегляд фільмів та серіалів</li>
                </ul>
                <p>Улюблені фільми:</p>
                <ul>
                    <ol>1."Трилогія "Володар перснів",2001-2003"</ol>
                    <ol>2."Втеча з Шоушенка",1994</ol>
                    <ol>3."Зелена миля",1999</ol>
                </ul>
                <p>Київ столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині.
                    Політичний, соціально-економічний, транспортний, освітньо-науковий, історичний, культурний та духовний центр України.У системі адміністративно-територіального
                    устрою України Київ має спеціальний статус, визначений Конституцією, і не входить до складу жодної області, хоча і є адміністративним центром Київської області.
                    Місце розташування центральних органів влади України, іноземних місій, штаб-квартир більшості підприємств і громадських об'єднань, що працюють в Україні.
                    <p>За «Повістю временних літ», Київ заснував полянський князь Кий зі своїми братами Щеком і Хоривом та сестрою Либіддю. Згідно з археологічними даними та
                        писемними джерелами, початок безперервного розвитку Києва датується 2-ю половиною V ст. — 1-ю половиною VI ст.; осередком розширення Києва була гора Замкова.
                        Був столицею полян, Русі, Київського князівства, Великого князівства Руського, Української Народної Республіки, Української Держави та
                        Української Радянської Соціалістичної Республіки. Також був адміністративним центром однойменного литовсько-польського воєводства, козацького полку,
                        російської губернії, радянської округи, німецької генеральної округи та радянської області.</p> Один із найстаріших історичних центрів Східної Європи та
                    християнства — Софійський собор та Києво-Печерська лавра внесені до списку Світової спадщини ЮНЕСКО.</p>
            </div>
        );
    }


}

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

export default Content