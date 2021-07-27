const conversions = {
    'farenheit': function convert(tempFarenheit) {
        return {
            'celsius': ((tempFarenheit - 32) * 5/9),
            'kelvin': ((tempFarenheit - 32) * 5/9 + 273.15)
        }
    },
    'celsius': function convert(tempCelsius) {
        return {
           'farenheit': ((tempCelsius * 9/5) + 32), 
           'kelvin': (tempCelsius + 273.15)
        }
    },
    'kelvin': function convert(tempKelvin) {
        return {
            'farenheit': ((tempKelvin - 273.15) * 9/5 + 32), 
            'celsius': (tempKelvin - 273.15)
        }
    }
}

console.log(Number(conversions.farenheit(72).celsius.toFixed(4)))
