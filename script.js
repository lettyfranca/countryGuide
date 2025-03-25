const inputCountry = document.querySelector('.inputCountry');
const btnSearch = document.querySelector('.btnSearch');
const resultHTML = document.querySelector('.resultContainer');
const url = `https://restcountries.com/v3.1/name/`;

let searchCountry = async () => {
    let nameCountry = inputCountry.value;
    let response = await fetch(`${url}${nameCountry}`);
    let item = await response.json();
    console.log(item);

    let countryData = item[0];
    let officialName = countryData.name.common;
    let flagUrl = countryData.flags.png;
    let capital = countryData.capital ? countryData.capital[0] : "Unknown";
    let continent = countryData.continents ? countryData.continents[0] : "Not specified";
    let population = countryData.population.toLocaleString();

    let currencyKey = Object.keys(countryData.currencies)[0];
    let currency = countryData.currencies[currencyKey].name;

    let languages = Object.values(countryData.languages).join(", ");


    resultHTML.innerHTML = 
    `
    <div class="titleFlag">
        <img src="${flagUrl}" alt="Flag of ${officialName}" class="imgFlag">
        <h2 class="title2">${officialName}</h2>
    </div>
    <div class="guideCountry">
        <p><strong>Capital: </strong><span>${capital}</span></p>
        <p><strong>Continent: </strong><span>${continent}</span></p>
        <p><strong>Population: </strong><span>${population}</span></p>
        <p><strong>Currency: </strong><span>${currency}</span></p>
        <p><strong>Common Languages: </strong><span>${languages}</span></p>
    </div>
    `;
}

btnSearch.addEventListener('click', searchCountry);
