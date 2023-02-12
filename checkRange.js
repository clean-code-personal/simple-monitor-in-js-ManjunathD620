module.exports = function (value, low, high, warningTolerance, parameterType) {
    let breach, warn;
    let LowWarn = low + warningTolerance, HighWarn = high - warningTolerance

    if (!(value >= low && value <= high))
        breach = true, warn = undefined;

    else if ((value > LowWarn && value < HighWarn))
        breach = false, warn = "Normal"

    else
        breach = false, warn = value > low && value <= LowWarn ? "Low" : "High";

    return { breach: breach, alert: warn, parameter: parameterType ,value:value }
}

