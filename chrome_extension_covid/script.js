async function fetchData() {
    const res = await fetch("https://disease.sh/v3/covid-19/countries/Nepal");
    const data = await res.json();

    console.log(data);
    document.getElementById("flag").src = data.countryInfo.flag; document.getElementById("date").innerHTML =
        new Date(data.updated).toLocaleDateString();

    document.getElementById("areaName").innerHTML = data.country;
    document.getElementById("population").innerHTML = data.population;
    document.getElementById("deathNew").innerHTML = data.deaths;
}

fetchData();
