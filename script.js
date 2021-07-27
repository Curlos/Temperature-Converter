const degreesElem = document.getElementById("degrees")
const tempTypeElem = document.getElementById("temperature-type")
const convertButton = document.getElementById("convertButton")

const conversions = {
    'fahrenheit': function convert(tempFahrenheit) {
        return {
            'celsius': ((tempFahrenheit - 32) * 5/9),
            'kelvin': ((tempFahrenheit - 32) * 5/9 + 273.15)
        }
    },
    'celsius': function convert(tempCelsius) {
        return {
           'fahrenheit': ((tempCelsius * 9/5) + 32), 
           'kelvin': (tempCelsius + 273.15)
        }
    },
    'kelvin': function convert(tempKelvin) {
        return {
            'fahrenheit': ((tempKelvin - 273.15) * 9/5 + 32), 
            'celsius': (tempKelvin - 273.15)
        }
    }
}

const tempSymbols = {
    'fahrenheit': '°F',
    'celsius': '°C',
    'kelvin': '°K'
}

const convertTemperature = () => {
    const degrees = degreesElem.value
    const tempType = tempTypeElem.value

    console.log(conversions[tempType](degrees))
}
console.log(Number(conversions.fahrenheit(72).celsius.toFixed(4)))

convertButton.addEventListener('click', convertTemperature)
