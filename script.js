// PROBLEM 1

let continentsOne = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};



function renderAllContinents(continents) {
    for(let key in continents) {
        let continent = continents[key];
        console.log(continent['name']);
    }
}

function renderSingleContinent(continent) {
    console.log(continent['name']);
    console.log('Countries: ');
    for(let country in continent['countries']){
        console.log('$$$'+country);
    }
}

function renderSingleCountry(country) {
    console.log(country['name']);
    console.log('Capital: ' + country['capital']);
    console.log('Official Language: ' + country['officialLanguage']);
    console.log('Population: ' + country['population']);
    console.log('Area: ' + country['area']);
    console.log('Political Status: ' + country['politicalStatus']);

    if(country['politicalStatus'] === 'Republic') {
        console.log('President: ' + country['president']);
    }else if(country['politicalStatus'] === 'Monarchy') {
        console.log('Monarch: ' + country['monarch']);
    }

    console.log('Official Currency' + country['officialCurrency']);
}


//PROBLEM 2


let continentsTwo = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            }
        }
    }
};


function renderAllContinentsHTML(continents) {
    let divContinents = $('.continents');
    let divContinent = $('<div class="continent">');

    for (let key in continents) {
        let continent    = continents[key];
        let divTitle     = $(`<h5 class="continent-title">${continent['name']}</h5>`);
        divContinent.append(divTitle);
        divContinents.append(divContinent);
        renderSingleContinentHTML(continent);
    }
}

function renderSingleContinentHTML(continent) {
    let divContinentData  = $('.continent-data');
    let divContinentTitle = $(`<h2 class="continent-title">${continent['name']}</div>`);
    let divCountriesTitle = $(`<h3 class="countries-title">Countries</h3>`);
    let divCountries      = $('<div class="countries">');
    let selectClass       = $('<select class="dropdown-select"></select>');
    selectClass.append($('<option disabled selected value> -- select an option -- </option>'));

    for (key in continent['countries']) {
        let country = continent['countries'][key];
        selectClass.append($(`<option value="${country['name']}">${country['name']}</option>`));
        renderSingleCountryHTML(country);
    }

    divCountries.append(selectClass);
    let divImage = $(`<div class="continent-image"><img src="images/${continent['name']}.png"</div>`);

    divContinentData.append(divContinentTitle)
                    .append(divCountriesTitle)
                    .append(divCountries)
                    .append(divImage);
}

function renderSingleCountryHTML(country) {
    let divTitle = $(`<div class="country-title"><h2>${country['name']}</h2></div>`);
    let divCountryData = $('<div class="country-data">');

    let countryCapital = 
    $(`<div class="country-capital"><strong>Capital:</strong><div>${country['capital']}</div></div>`);
    
    let countrylanguage = 
    $(`<div class="country-official-language"><strong>Official Language:</strong><div>${country['officialLanguage']}</div></div>`);
    
    let countryPopulation =
    $(`<div class="country-population"><strong>Population:</strong><div>${country['population']}</div></div>`);
    
    let countryArea =
    $(`<div class="country-area"><strong>Area:</strong><div>${country['area']}<sup>2</sup></div></div>`);

    let countryPoliticalStatus =
    $(`<div class="country-political-status"><strong>Political Status:</strong><div>${country['politicalStatus']}</div></div>`);

    if(country['politicalStatus'] === 'Republic') {
        var govern = $(`<div class="country-president"><strong>President:</strong><div>${country['president']}</div></div>`);
    }else if (country['politicalStatus'] === 'Monarchy') {
        var govern = $(`<div class="country-monarch"><strong>Monarch:</strong><div>${country['monarch']}</div></div>`);
    }

    let countryCurrency =
    $(`<div class="country-official-currency"><strong>Official Currency:</strong><div>${country['officialCurrency']}</div></div>`);
    
    
    divCountryData.append(countryCapital)
                  .append(countrylanguage)
                  .append(countryPopulation)
                  .append(countryArea)
                  .append(countryPoliticalStatus)
                  .append(govern)
                  .append(countryCurrency);
 
    $('.continent-country').append(divTitle).append(divCountryData);
}



function renderDataHTML(continents) {
    renderAllContinentsHTML(continents);
}


// PROBLEM 3

let continentsThree = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China", 
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};


function renderAllContinentsDynamic(continents) {
    let divContinents = $('.continents');

    for (let key in continents) {
        let continent    = continents[key];
        let divContinent     = $('<div class="continent">').append($(`<h5 class="continent-title">${continent['name']}</h5>`));
        divContinents.append(divContinent);
    }

     attachEvents(continents);
    
}

function renderSingleContinentDynamic(continent) {
    let divContinentData  = $('.continent-data');
    let divContinentTitle = $(`<h2 class="continent-title">${continent['name']}</div>`);
    let divCountriesTitle = $(`<h3 class="countries-title">Countries</h3>`);
    let divCountries      = $('<div class="countries">');
    let selectClass       = $('<select class="dropdown-select"></select>');
    selectClass.append($('<option disabled selected value> -- select an option -- </option>'));

    for (key in continent['countries']) {
        let country = continent['countries'][key];
        selectClass.append($(`<option value="${country['name']}">${country['name']}</option>`));
    }

    divCountries.append(selectClass);
    let divImage = $(`<div class="continent-image"><img src="images/${continent['name']}.png"</div>`);

    divContinentData.append(divContinentTitle)
                    .append(divCountriesTitle)
                    .append(divCountries)
                    .append(divImage);
    attachCountryEvents(continent['name']); //attach events AFTER rendering the elements in the same function

}

function renderSingleCountryDynamic(country) {
    console.log('hi');
    let divTitle = $(`<div class="country-title"><h2>${country['name']}</h2></div>`);
    let divCountryData = $('<div class="country-data">');

    let countryCapital = 
    $(`<div class="country-capital"><strong>Capital:</strong><div>${country['capital']}</div></div>`);
    
    let countrylanguage = 
    $(`<div class="country-official-language"><strong>Official Language:</strong><div>${country['officialLanguage']}</div></div>`);
    
    let countryPopulation =
    $(`<div class="country-population"><strong>Population:</strong><div>${country['population']}</div></div>`);
    
    let countryArea =
    $(`<div class="country-area"><strong>Area:</strong><div>${country['area']}<sup>2</sup></div></div>`);

    let countryPoliticalStatus =
    $(`<div class="country-political-status"><strong>Political Status:</strong><div>${country['politicalStatus']}</div></div>`);

    if(country['politicalStatus'] === 'Republic') {
        var govern = $(`<div class="country-president"><strong>President:</strong><div>${country['president']}</div></div>`);
    }else if (country['politicalStatus'] === 'Monarchy') {
        var govern = $(`<div class="country-monarch"><strong>Monarch:</strong><div>${country['monarch']}</div></div>`);
    }

    let countryCurrency =
    $(`<div class="country-official-currency"><strong>Official Currency:</strong><div>${country['officialCurrency']}</div></div>`);
    
    
    divCountryData.append(countryCapital)
                  .append(countrylanguage)
                  .append(countryPopulation)
                  .append(countryArea)
                  .append(countryPoliticalStatus)
                  .append(govern)
                  .append(countryCurrency);
 
    $('.continent-country').append(divTitle).append(divCountryData);

}

function showData() {
    $('.continent-data').show();
    $('.continent-country').show();
}
function hideData() {
    $('.continent-data').hide();
    $('.continent-country').hide();
}
function clearData() {
    $('.continent-data').empty();
    $('.continent-country').empty();
}

function renderDataDynamic(continents) {
    renderAllContinentsDynamic(continents);
}


function attachContinentEvents(continentName) {
    $('.continent').on('click', function (e){
        e.preventDefault();

        if($(this).hasClass('shown')) {
            $(this).removeClass('shown');
            
            hideData();
            emptyData();
        }else {
            clearData();
            $(this).parent().find('.shown').removeClass('shown');
            $(this).addClass('shown');

            let continentName = $(this).find('.continent-title').text();

            $.ajax({
                url: 'https://continental-drift.firebaseio.com/continents/'+continentName+'.json',
                method: 'GET',
                success: renderSingleContinentDynamic, 
                error: function () {
                    console.log('error');
                }
            });                
            
           showData();
        }     
    });
}

function attachCountryEvents(continentName) {

    $('.dropdown-select').on('change', function(e) {
        e.preventDefault();
        $('.continent-country').empty();
        let countryName = $(this).val();
        console.log('countryName');
        $.ajax({
                url: 'https://continental-drift.firebaseio.com/continents/'+continentName+'/countries/'+countryName+'.json',
                method: 'GET',
                success: renderSingleCountryDynamic, 
                error: function () {
                    console.log('error');
                }
            });
    });
}

function attachEvents(continents) {
    attachContinentEvents(continents);
}



//PROBLEM 4



function getContinents() {
    $.ajax({
        url: 'https://continental-drift.firebaseio.com/continents.json',
        method: 'GET',
        success: renderAllContinentsDynamic, 
        error: function () {
            console.log('error');
        }
    });
}



// renderAllContinents(continents);
// renderSingleContinent(continents['Europe']);
// renderSingleCountry(continents['Europe']['countries']['Bulgaria']);

// renderDataHTML(continentsTwo);
// renderAllContinentsDynamic(continentsThree);

getContinents();