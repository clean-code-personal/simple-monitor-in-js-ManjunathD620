function convertTemperature(value, low, high, fromUnit, toUnit) {
    // Convert the value to Kelvin
    switch (fromUnit) {
        case "Celsius": {
            value = value + 273.15;
            low = low + 273.15;
            high = high + 273.15;
            break;
        }

        case "Fahrenheit": {
            value = ((value - 32) / 1.8) + 273.15;
            low = ((low - 32) / 1.8) + 273.15;
            high = ((high - 32) / 1.8) + 273.15;
            break;
        }

        case "Kelvin":
            break;
        default:
            throw new Error("Invalid temperature unit: " + fromUnit);
    }

    // Convert the value from Kelvin
    switch (toUnit) {
        case "Celsius": {
            value = value - 273.15;
            low = low - 273.15;
            high = high - 273.15;
            break;
        }

        case "Fahrenheit": {
            value = ((value - 273.15) * 1.8) + 32;
            low = ((low - 273.15) * 1.8) + 32;
            high = ((high - 273.15) * 1.8) + 32;
            break;
        }

        case "Kelvin":
            break;
        default:
            throw new Error("Invalid temperature unit: " + toUnit);
    }

    return { value, low, high };
}

module.exports = convertTemperature;
