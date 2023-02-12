module.exports = function (value, low, high, warningTolerance, parameterType) {
    let breach, warn;
    let LowWarn = low + warningTolerance, HighWarn = high - warningTolerance;
    
    if (value >= low && value <= high) {
        breach = false;
        if (value > LowWarn && value < HighWarn) {
            warn = "Normal";
        } else {
            warn = value <= LowWarn ? "Low" : "High";
        }
    } else {
        breach = true;
        warn = undefined;
    }

    return { breach, alert: warn, parameter: parameterType, value };
};
