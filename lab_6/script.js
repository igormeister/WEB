'Use strict';
async function download()
{
var object = []
for(let i=0;i<5;i++)
{
    let response =  await fetch('https://randomuser.me/api');
    if (response.ok) 
    { 
      var json = await response.json();
      object[i] = json
    } else {
      alert("Ошибка HTTP: " + response.status);
    } 
}
  for(let i=0;i<5;i++)
  {
    console.log(object[i].results['0'])
    let image = document.createElement("img")
    image.src = object[i].results['0'].picture.large
    image.className = `box`
    div.append(image)
    let gender = document.createElement("p")
    gender.innerText = "Gender:" + object[i].results['0'].gender + "\n"
    gender.className = `box`
    div.append(gender)
    let name = document.createElement("p")
    name.innerText = "Name:" + object[i].results['0'].name.first + " " + object[i].results['0'].name.last + "\n"
    name.className = `box`
    div.append(name)
    let cell = document.createElement("p")
    cell.innerText = "Cell:" + object[i].results['0'].cell + "\n"
    cell.className = `box`
    div.append(cell)
    let country = document.createElement("p")
    country.innerText = "Country:" + object[i].results['0'].location.country + "\n"
    country.className = `box`
    div.append(country)
    let email = document.createElement("p")
    email.innerText = "Email:" + object[i].results['0'].email + "\n"
    email.className = `box`
    div.append(email)
    let coord = document.createElement("p")
    coord.innerText = "Coordinates: " + "Latitude: " + object[i].results['0'].location.coordinates.latitude + " " + "Longitude: " + object[i].results['0'].location.coordinates.longitude + "\n"
    coord.className = `box`
    div.append(coord)
    
  }
}
