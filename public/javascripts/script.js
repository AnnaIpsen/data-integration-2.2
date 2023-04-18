let getCities = document.getElementById('getCities')
let citiesOutput = document.getElementById('cities')
let url = 'http://localhost:3000'

async function getInfo() {
    let res = await fetch(url + '/cities', {method:'GET'})
    let data = await res.json()
    let cities = data.cities

    citiesOutput.innerHTML = ''


    for (let i = 0; i < cities.length; i++) {
        citiesOutput.innerHTML += `<div> 
                <h3>${cities[i].name}</h3>
                <p>Countrycode: ${cities[i].countrycode}</p>
                <p>District: ${cities[i].district}</p>
                <p>Population: ${cities[i].population}</p>
                </div>`
    }

}

getCities.addEventListener('click', getInfo)