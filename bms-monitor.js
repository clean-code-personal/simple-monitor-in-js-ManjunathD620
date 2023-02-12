var isInRange = require('./checkRange');
var indicator = require('./Indicator');
var convertTemperature = require('./temperatureConverter');

function batteryIsOk(temperature, soc, charge_rate, tolerance) {

    temperature = convertTemperature(temperature, 0, 45, "Celsius", "Celsius");

    var checkTemperature = isInRange(temperature.value, temperature.low, temperature.high, tolerance, "Temperature");
    var checkSoc = isInRange(soc, 20, 80, tolerance, "Soc");
    var checkChargeRate = isInRange(charge_rate, 0, 0.8, 0.2, "Charge Rate");

    return indicator(checkTemperature, checkSoc, checkChargeRate);
}

module.exports = batteryIsOk;
