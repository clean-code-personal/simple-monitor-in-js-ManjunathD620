var isInRange = require('./checkRange')

function batteryIsOk(temperature, soc, charge_rate) {

    var checkTemperature = isInRange(temperature,0,45);
    var checkSoc = isInRange(soc,20,80);
    var checkChargeRate = isInRange(charge_rate,0,0.8);
  

    return {
        temperatureBreach : !checkTemperature,
        socBreach: !checkSoc,
        chargeRateBreach: !checkChargeRate
    }
}
module.exports = batteryIsOk;
