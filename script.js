const degreesElem = document.getElementById("degrees-input")
const tempTypeElem = document.getElementById("temperature-type")
const convertButton = document.getElementById("convertButton")
const convertedResult = document.getElementById("convertedResult")

const conversions = {
    'fahrenheit': function convert(tempFahrenheit) {
        return {
            'celsius': Number(((tempFahrenheit - 32) * 5/9)),
            'kelvin': Number(((tempFahrenheit - 32) * 5/9 + 273.15))
        }
    },
    'celsius': function convert(tempCelsius) {
        return {
           'fahrenheit': Number(((tempCelsius * 9/5) + 32)), 
           'kelvin': Number((tempCelsius + 273.15))
        }
    },
    'kelvin': function convert(tempKelvin) {
        return {
            'fahrenheit': Number(((tempKelvin - 273.15) * 9/5 + 32)), 
            'celsius': Number((tempKelvin - 273.15))
        }
    }
}

const tempSymbols = {
    'fahrenheit': '°F',
    'celsius': '°C',
    'kelvin': 'K'
}

const convertTemperature = () => {
    const degrees = Number(degreesElem.value)
    const tempType = tempTypeElem.value
    let resultHTML = ''
    let convertedTemps = conversions[tempType](degrees)

    for (let tempTypeKey of Object.keys(convertedTemps)) {
        console.log(convertedTemps)
        resultHTML += `<div>${convertedTemps[tempTypeKey].toFixed(2)}${tempSymbols[tempTypeKey]}</div>`
    }
    convertedResult.innerHTML = resultHTML
}

convertButton.addEventListener('click', convertTemperature)